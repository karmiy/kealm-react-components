import React, { Children, cloneElement, useMemo } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { StepsProps, StepsDefaultProps } from './interface';
import { transChildren } from 'utils/common/react-util';

function Steps(props) {
    const {componentCls} = useContextConf('steps');
    const {
        children,
        className,
        direction,
        current,
        size,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${direction}`]: direction,
        [`${componentCls}--${size}`]: size,
        [className]: className,
    }, [className, componentCls, direction, size]);

    // ---------------------------------- logic code ----------------------------------
    // 转化children
    const _children = transChildren(children);

    // ---------------------------------- render chunk ----------------------------------
    const renderChildren = useMemo(() => {
        return Children.map(_children, (child, index) => {
            if(child) {
                return cloneElement(child, {
                    stepNum: index + 1,
                    status: index === current ? 'process' : (index < current ? 'finish' : child.props.status),
                });
            }
        })
    }, [current]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            {renderChildren}
        </div>
    );
};

Steps.propTypes = StepsProps;
Steps.defaultProps = StepsDefaultProps;

export default Steps;