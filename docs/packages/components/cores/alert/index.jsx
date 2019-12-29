import React, { useState, useCallback, useMemo } from 'react';
import { AlertProps, AlertDefaultProps } from './interface';
import { useContextConf, useClassName } from 'hooks';
import Icon from '../icon';
import { RenderWrapper } from '../../common';
import { CollapseTransition } from '../transition';

const iconType = {
    success: 'check-circle',
    info: 'info-circle',
    warning: 'warning-circle',
    error: 'close-circle',
}

function Alert(props) {
    const { componentCls } = useContextConf('alert');
    const {
        className,
        type,
        effect,
        title,
        description,
        closable,
        onClose,
        afterClose,
        closeText,
        showIcon,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${type}`]: type,
        [`is-${effect}`]: effect,
        'is-with-desc': description,
        [className]: className,
    }, [className, effect, type, description]);

    // ---------------------------------- variable ----------------------------------
    const [isClosed, setIsClosed] = useState(false);

    // ---------------------------------- event ----------------------------------
    const handleClose = useCallback(e => {
        setIsClosed(true);
        onClose(e);
    }, [onClose]);

    const onAfterClose = useCallback(() => afterClose(), [afterClose]);

    // ---------------------------------- render chunk ----------------------------------
    const renderIcon = useMemo(() => {
        if(!showIcon) return null;

        return <Icon type={iconType[type]} className={`${componentCls}__icon`} />
    }, [showIcon, type]);

    const renderCloseIcon = useMemo(() => {
        if(!closable) return null;

        if(closeText) return <a className={`${componentCls}__close-btn is-custom`} onClick={handleClose}>{closeText}</a>;

        return <Icon type={'close'} className={`${componentCls}__close-btn`} onClick={handleClose} />;
    }, [closable, handleClose, closeText]);

    // ---------------------------------- render ----------------------------------
    return (
        <CollapseTransition visible={!isClosed} unmountOnExit visibleChange={onAfterClose}>
            <div role={'alert'} className={classNames} {...others}>
                {renderIcon}
                <div className={`${componentCls}__content`}>
                    <span className={`${componentCls}__title`}>
                        {title}
                    </span>
                    <RenderWrapper visible={!!description} unmountOnExit>
                        <p className={`${componentCls}__description`}>
                            {description}
                        </p>
                    </RenderWrapper>
                    {renderCloseIcon}
                </div>
            </div>
        </CollapseTransition>
    );
}

Alert.propTypes = AlertProps;
Alert.defaultProps = AlertDefaultProps;

export default Alert;
