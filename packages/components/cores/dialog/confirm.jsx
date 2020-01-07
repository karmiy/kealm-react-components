import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Dialog, { destroyFns } from './dialog';
import Icon from '../icon';
import { useContextConf, useClassName, useWillUnMount } from 'hooks';
import { ConfirmProps, ConfirmDefaultProps } from './interface';


function ConfirmDialog(props) {
    const {
        className,
        title,
        content, //
        close, //
        confirmLoading,
        icon, //
        type, //
        closeAfterOk, //
        onOk,
        onCancel,
        afterOk, //
        ...others
    } = props;

    const { componentCls } = useContextConf(`dialog__confirm`);

    // ---------------------------------- class ----------------------------------
    const dialogClassNames = useClassName({
        'is-confirm': true,
        [className]: className,
    }, [className]);

    const confirmClassNames = useClassName({
        [componentCls]: true,
        [`${componentCls}-${type}`]: type,
    }, [componentCls, type]);


    const [loading, setLoading] = useState(false);

    // ---------------------------------- event ----------------------------------
    let next = useCallback((e, info, status) => {
        status !== undefined && setLoading(false);
        afterOk(e, info, status);
        closeAfterOk && close();
    }, [afterOk, closeAfterOk]);

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
        }else {
            next();
        }
    }, [onOk, onCancel, closeAfterOk]);

    // ---------------------------------- logic code ----------------------------------
    useWillUnMount(() => {
        next = null;
    });

    const iconNode = icon || <Icon type={'question-circle'} />;

    // ---------------------------------- render ----------------------------------
    return (
        <Dialog
            className={dialogClassNames}
            title={null}
            confirmLoading={confirmLoading || loading}
            onOk={ok}
            onCancel={cancel}
            {...others}
        >
            <div className={confirmClassNames}>
                {iconNode}
                <span className={`${componentCls}-title`}>{title}</span>
                <div className={`${componentCls}-content`}>{content}</div>
            </div>
        </Dialog>
    )
}

ConfirmDialog.propTypes = ConfirmProps;
ConfirmDialog.defaultProps = ConfirmDefaultProps;

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
        destroy: close,
        update,
    }
}