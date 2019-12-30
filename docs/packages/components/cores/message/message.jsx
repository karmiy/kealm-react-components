import React, { useState } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { MessageProps, MessageDefaultProps } from './interface';
import Icon from '../icon';
import { Motion, RenderWrapper } from '../../common';

const iconType = {
    success: 'check-circle-fill',
    info: 'info-circle-fill',
    warning: 'warning-circle-fill',
    error: 'close-circle-fill',
}

function Message(props) {
    const { componentCls } = useContextConf('message');
    const {
        className,
        type,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${type}`]: type,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useState(false);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            <RenderWrapper visible={!!type} unmountOnExit>
                <Icon type={iconType[type]} className={`${componentCls}__icon`} />
            </RenderWrapper>
            <div className={`${componentCls}__content`}>
                This is a normal message
            </div>
        </div>
    );
}

Message.propTypes = MessageProps;
Message.defaultProps = MessageDefaultProps;

export default Message;
