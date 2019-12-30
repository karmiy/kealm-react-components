import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Message from './message';
import { Motion, RenderWrapper } from '../../common';
import {isObject} from "utils/common/base";
import {isReactElement} from "utils/common/react-util";

const CONF_DURATION = 3000;

function MessageTrigger(props) {
    const {
        visible,
        onClose,
        ...others
    } = props;

    // ---------------------------------- event ----------------------------------
    const onEnd = useCallback(() => {
        onClose && onClose();
    }, [onClose]);

    return (
        <Motion
            showProp={'visible'}
            transitionName={'km-message-fade'}
            transitionAppear
            onEnd={onEnd}
        >
            <RenderWrapper visible={visible} unmountOnExit>
                <Message {...others} />
            </RenderWrapper>
        </Motion>
    );
}

function createMessage(config) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const {
        duration,
        ...props
    } = config;
    let currentConfig = { ...props, visible: true };

    function destroy() {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);

        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }

    function update(newConfig) {
        currentConfig = {
            ...currentConfig,
            ...newConfig,
        };
        render(currentConfig);
    }

    function render(props) {
        ReactDOM.render(<MessageTrigger {...props} />, div);
    }

    setTimeout(() => {
        /*update({
            visible: false,
            onClose: () => {
                destroy();
            }
        });*/
    }, duration || CONF_DURATION);

    render(currentConfig);
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
    info(config, duration, onClose) {

        return createMessage({
            type: 'info',
            ...createConfig(config, duration, onClose),
        });
    },
}

// export default api;
export {
    Message,
}
export default api;