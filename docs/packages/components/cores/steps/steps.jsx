import React from 'react';
import { useContextConf, useClassName } from 'hooks';
import { StepsProps, StepsDefaultProps } from './interface';

function Steps(props) {
    const {componentCls} = useContextConf('steps');
    const {
        children,
        className,
        direction,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${direction}`]: direction,
        [className]: className,
    }, [className, componentCls, direction]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            {children}
        </div>
    );
};

Steps.propTypes = StepsProps;
Steps.defaultProps = StepsDefaultProps;

export default Steps;