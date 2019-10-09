import React from 'react';
import Dialog, { destroyFns } from './dialog';
import confirm from './confirm';
import Icon from '../icon';

const iconType = {
    info: 'info-circle',
    success: 'check-circle',
    error: 'close-circle',
    warning: 'warning-circle',
}

/**
 * Info Dialog common config
 */
function typeCommonConfig(type) {
    return {
        type: type,
        icon: <Icon type={iconType[type]} />,
        okText: '知道了',
        showCancel: false,
    }
}


Dialog.confirm = function (props) {
    const config = {
        ...props,
    };
    return confirm(config);
};

Dialog.info = function (props) {
    const config = {
        ...typeCommonConfig('info'),
        ...props,
    };
    return confirm(config);
}

Dialog.success = function (props) {
    const config = {
        ...typeCommonConfig('success'),
        ...props,
    };
    return confirm(config);
}

Dialog.error = function (props) {
    const config = {
        ...typeCommonConfig('error'),
        ...props,
    };
    return confirm(config);
}

Dialog.warning = function (props) {
    const config = {
        ...typeCommonConfig('warning'),
        ...props,
    };
    return confirm(config);
}

Dialog.destroyAll = function () {
    while (destroyFns.length) {
        const close = destroyFns.pop();
        close && close();
    }
}

export default Dialog;