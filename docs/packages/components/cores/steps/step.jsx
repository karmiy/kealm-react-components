import React, { useMemo } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { StepProps, StepDefaultProps } from './interface';
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
        stepNum,
        icon,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`is-${status}`]: status,
        [`is-custom`]: icon,
        [className]: className,
    }, [className, componentCls, status, icon]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderIconContent = useMemo(() => {
        if(icon) return icon;

        return status === 'finish'
            ? <Icon type={'check'} className={`${componentCls}__icon-inner`} />
            : stepNum;
    }, [componentCls, icon, status, stepNum]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
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
                        <div className={`${componentCls}__subtitle`}>
                            {subTitle}
                        </div>
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