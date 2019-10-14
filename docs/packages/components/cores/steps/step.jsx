import React, { useMemo, useCallback } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { StepProps, StepDefaultProps, noop } from './interface';
import Icon from '../icon';

function Step(props) {
    const {componentCls} = useContextConf('step');
    const {
        children,
        className,
        title,
        subTitle,
        description,
        status,
        current,
        stepNum,
        icon,
        progressDot,
        onChange,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`is-${status}`]: status,
        [`is-custom`]: icon,
        [className]: className,
    }, [className, componentCls, status, icon]);

    // ---------------------------------- event ----------------------------------
    const _change = onChange !== noop ? useCallback(() => {
        onChange(stepNum - 1);
    }, [onChange, stepNum]) : null;

    // ---------------------------------- render mini chunk ----------------------------------
    const renderIconContent = useMemo(() => {
        // Priority: dot > custom-icon > origin
        if(progressDot) return <span className={`${componentCls}__icon-dot`} />;

        if(icon) return icon;

        return status === 'finish'
            ? <Icon type={'check'} className={`${componentCls}__icon-inner`} />
            : (status === 'error'
            ? <Icon type={'close'} className={`${componentCls}__icon-inner`} />
            : stepNum);
    }, [componentCls, icon, status, stepNum, progressDot]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others} role={onChange !== noop && current !== stepNum - 1 ? 'button' : null} onClick={_change}>
            <div className={`${componentCls}__container`}>
                <div className={`${componentCls}__tail`} />
                <div className={`${componentCls}__icon`}>
                    <span className={`${componentCls}__icon-wrap`}>
                        {renderIconContent}
                    </span>
                </div>
                <div className={`${componentCls}__content`}>
                    <div className={`${componentCls}__title`}>
                        {title}
                        {subTitle ? (
                            <div className={`${componentCls}__subtitle`}>
                                {subTitle}
                            </div>
                        ) : null}
                    </div>
                    <div className={`${componentCls}__description`}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

Step.propTypes = StepProps;
Step.defaultProps = StepDefaultProps;

export default Step;