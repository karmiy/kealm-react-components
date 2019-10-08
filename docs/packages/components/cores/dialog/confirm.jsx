import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Dialog, { destroyFns } from './dialog';
import Icon from '../icon';
import { useContextConf, useWillUnMount } from 'hooks';

const noop = () => {}

function ConfirmDialog(props) {
    const {
        title,
        content,
        close,
        confirmLoading,
        onOk = noop,
        onCancel = noop,
        ...others
    } = props;

    const { componentCls } = useContextConf(`dialog__confirm`);

    const [loading, setLoading] = useState(false);

    // ---------------------------------- event ----------------------------------
    let next = useCallback((e, info, status) => {
        setLoading(false);
        onCancel(e, info, status);
    }, [setLoading, onCancel]);

    const cancel = useCallback(e => {
        onCancel(e);
        close();
    }, [close, onCancel]);

    const ok = useCallback(e => {
        const p = onOk(e);
        if(p instanceof Promise) {
            setLoading(true);
            p.then(data => {
                next && next(e, data, true);
            }).catch(err => {
                setLoading(false);
                next && next(e, err, false);
            });
        }
    }, [onOk, onCancel, setLoading]);

    // ---------------------------------- logic code ----------------------------------
    useWillUnMount(() => {
        next = null;
    });

    // ---------------------------------- render ----------------------------------
    return (
        <Dialog
            className={'is-confirm'}
            title={null}
            confirmLoading={confirmLoading || loading}
            onOk={ok}
            onCancel={cancel}
            {...others}
        >
            <div className={`${componentCls}`}>
                <Icon type={'question-circle'} className={`${componentCls}-icon`} />
                <span className={`${componentCls}-title`}>{title}</span>
                <div className={`${componentCls}-content`}>{content}</div>
            </div>
        </Dialog>
    )
}

export default function confirm(config) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    let currentConfig = { ...config, close, visible: true };
    
    function destroy() {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);

        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }

        for (let i = 0; i < destroyFns.length; i++) {
            const fn = destroyFns[i];
            if (fn === close) {
                destroyFns.splice(i, 1);
                break;
            }
        }
    }

    function close() {
        currentConfig = {
            ...currentConfig,
            visible: false,
            afterClose: destroy,
        };
        render(currentConfig);
    }

    function update(newConfig) {
        currentConfig = {
            ...currentConfig,
            ...newConfig,
        };
        render(currentConfig);
    }

    function render(props) {
        ReactDOM.render(<ConfirmDialog getContainer={null} {...props} />, div);
    }

    render(currentConfig);

    destroyFns.push(close);

    return {
        close,
        update,
    }
}