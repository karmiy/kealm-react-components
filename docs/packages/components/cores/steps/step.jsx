import React from 'react';
import { useContextConf, useClassName } from 'hooks';
import { StepProps, StepDefaultProps } from './interface';
import Icon from '../icon';

function Step(props) {
    const {componentCls} = useContextConf('step');
    const {
        children,
        className,
        title,
        description,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            <div className={`${componentCls}__head`}>
                <div className={`${componentCls}__line`}>
                    <i className={`${componentCls}__line-inner`} />
                </div>
                <div className={`${componentCls}__icon`}>
                    <Icon type={'check'} className={`${componentCls}__icon-inner`} />
                </div>
            </div>
            <div className={`${componentCls}__main`}>
                <div className={`${componentCls}__title`}>
                    {title}
                </div>
                <div className={`${componentCls}__description`}>
                    {description}
                </div>
            </div>
        </div>
    );
};

Step.propTypes = StepProps;
Step.defaultProps = StepDefaultProps;

export default Step;