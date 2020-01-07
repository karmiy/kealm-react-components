import React, { useMemo } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { MessageProps, MessageDefaultProps } from './interface';
import Icon from '../icon';
import { RenderWrapper } from '../../common';
import {cloneVElement} from "utils/common/react-util";

const iconType = {
    success: 'check-circle-fill',
    info: 'info-circle-fill',
    warning: 'warning-circle-fill',
    error: 'close-circle-fill',
    loading: 'loading',
}

function Message(props) {
    const { componentCls } = useContextConf('message');
    const {
        className,
        style,
        type,
        messageRef,
        top,
        content,
        icon,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${type}`]: type,
        [className]: className,
    }, [className, componentCls, type]);

    // ---------------------------------- style ----------------------------------
    const styles = {
        ...style,
        top,
    };

    // ---------------------------------- render mini chunk ----------------------------------
    const renderIcon = useMemo(() => {
        if(icon) return cloneVElement(icon, {
            className: `${componentCls}__icon`,
        });

        return (
            <RenderWrapper visible={!!type} unmountOnExit>
                <Icon type={iconType[type]} className={`${componentCls}__icon`} />
            </RenderWrapper>
        )
    }, [icon, type]);

    // ---------------------------------- render ----------------------------------
    return (
        <div ref={messageRef} className={classNames} style={styles} {...others}>
            {renderIcon}
            <div className={`${componentCls}__content`}>
                {content}
            </div>
        </div>
    );
}

Message.propTypes = MessageProps;
Message.defaultProps = MessageDefaultProps;

export default Message;
