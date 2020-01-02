import React, { useState, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDidMount } from 'hooks';
import Message from './message';
import { Motion, RenderWrapper } from '../../common';
import { isObject, isEmpty } from 'utils/common/base';
import { isReactElement } from 'utils/common/react-util';

// Global config
let base_duration = 3000,
    base_top = 20,
    base_gap = 16,
    base_max_count = Infinity;

const mes_store = Object.create(null);
const getNewMesId = () => `km_message_${Date.now()}`;
const getNextTop = () =>  Object.values(mes_store).reduce((sum, height) => sum + +height + base_gap, base_top);

function MessageTrigger(props) {
    const {
        visible,
        onMount,
        afterClose,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const ref = useRef(null);

    // ---------------------------------- effect ----------------------------------
    useDidMount(() => {
        const el = ref.current;
        onMount && onMount(el);
    }, true);

    // ---------------------------------- event ----------------------------------
    const onEnd = useCallback(() => {
        if(visible) return;

        afterClose && afterClose();
    }, [afterClose, visible]);

    return (
        <Motion
            showProp={'visible'}
            transitionName={'km-message-fade'}
            transitionAppear
            onEnd={onEnd}
        >
            <RenderWrapper visible={visible} unmountOnExit>
                <Message messageRef={ref} {...others} />
            </RenderWrapper>
        </Motion>
    );
}

const MessageManager = {
    items: [],
    wrap: null,
    getWrap() {
        if(this.wrap) return this.wrap;
        const div = document.createElement('div');
        div.className = 'km-message-wrap';
        document.body.appendChild(div);
        this.wrap = div;
        return div;
    },
    add(config) {
        if(this.items.length >= base_max_count) return;
        const {
            key: _key,
            duration,
            onClose,
            ...others
        } = config;
        const key = isEmpty(_key) ? getNewMesId() : _key;
        const props = { ...others, visible: true, top: getNextTop() };
        const item = { key, onClose, props };
        this.items.push(item);
        this.render();
        this.timeout(item, duration);
        return key;
    },
    timeout(item, duration) {
        if(duration === 0) return;

        clearTimeout(item.timeout);

        item.timeout = setTimeout(() => {
            this.close(item.key);
        }, isEmpty(duration) ? base_duration : duration);
    },
    close(key) {
        const item = this.items.find(item => item.key === key);
        if(!item) return;
        const { timeout, onClose } = item;
        clearTimeout(timeout);
        delete item.timeout;
        delete mes_store[item.key];

        this.refreshTop(key);
        this.update(key, {
            visible: false,
        });
        onClose && onClose();
    },
    refreshTop(key) {
        const curIndex = this.items.findIndex(item => item.key === key);
        if(curIndex === -1) return;
        const len = this.items.length;
        let prevTop = this.items[curIndex].props.top;
        for(let i = curIndex + 1; i < len; i++) {
            const curTop = this.items[i].props.top;
            this.items[i].props.top = prevTop;
            prevTop = curTop;
        }
    },
    update(key, config) {
        const item = this.items.find(item => item.key === key);
        if(!item) return;

        const {
            duration,
            onClose,
            ...others
        } = config;
        item.props = {
            ...item.props,
            ...others,
            onClose: onClose || item.onClose,
        };
        if(!isEmpty(duration)) {
            this.timeout(item, duration);
        }
        this.render();
    },
    onMount(el, key) {
        mes_store[key] = el.offsetHeight;
    },
    afterClose(item) {
        this.items.splice(item, 1);
        const { afterClose } = item.props;
        afterClose && afterClose();
        this.render();
    },
    destroy() {
        const wrap = this.getWrap();
        if(!wrap) return;
        const unmountResult = ReactDOM.unmountComponentAtNode(wrap);

        if (unmountResult && wrap.parentNode) {
            wrap.parentNode.removeChild(wrap);
            this.wrap = null;
        }
    },
    render() {
        if(!this.items.length) {
            this.destroy();
            return;
        }
        const messageComps = this.items.map(item => {
            return (
                <MessageTrigger
                    key={item.key}
                    {...item.props}
                    onMount={el => this.onMount(el, item.key)}
                    afterClose={() => this.afterClose(item)}
                />
            )
        });
        ReactDOM.render(messageComps, this.getWrap());
    },
}

function createMessage(type, ...params) {
    let key = null;
    const promise = new Promise((resolve) => {
        key = MessageManager.add({
            type,
            ...createConfig(...params),
            afterClose: resolve,
        });
    });
    const fn = () => MessageManager.close(key);
    fn.key = key;
    fn.then = promise.then.bind(promise);
    return fn;
}

function createConfig(config, duration, onClose) {
    if(isObject(config) && !isReactElement(config)) return config;

    return {
        content: config,
        duration,
        onClose,
    }
}

const api = {
    open(...params) {
        return createMessage(null, ...params);
    },
    info(...params) {
        return createMessage('info', ...params);
    },
    success(...params) {
        return createMessage('success', ...params);
    },
    warning(...params) {
        return createMessage('warning', ...params);
    },
    error(...params) {
        return createMessage('error', ...params);
    },
    loading(...params) {
        return createMessage('loading', ...params);
    },
    update(key, config) {
        MessageManager.update(key, config);
    },
}

// export default api;
/*export {
    Message,
}*/
export default api;