import React, { memo, Children, cloneElement, useMemo } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { StepsProps, StepsDefaultProps, noop } from './interface';
import { transChildren } from 'utils/common/react-util';

function Steps(props) {
    const {componentCls} = useContextConf('steps');
    const {
        children,
        className,
        direction,
        current,
        size,
        status,
        progressDot,
        onChange,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${direction}`]: direction,
        [`${componentCls}--${size}`]: size,
        [`${componentCls}--dotted`]: progressDot,
        [`${componentCls}-label--${direction}`]: progressDot,
        [className]: className,
    }, [className, componentCls, direction, size, progressDot]);

    // ---------------------------------- logic code ----------------------------------
    // 转化children
    const _children = transChildren(children);

    // ---------------------------------- render chunk ----------------------------------
    const renderChildren = useMemo(() => {
        return Children.map(_children, (child, index) => {
            const currentStatus = child.props.status || status || 'process';
            const finishStatus = child.props.status || 'finish';
            const waitStatus = child.props.status || 'wait';

            if(child) {
                return cloneElement(child, {
                    current,
                    stepNum: index + 1,
                    status: index === current ? currentStatus : (index < current ? finishStatus : waitStatus),
                    progressDot,
                    onChange,
                });
            }
        })
    }, [current, status, progressDot, onChange]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            {renderChildren}
        </div>
    );
};

Steps.propTypes = StepsProps;
Steps.defaultProps = StepsDefaultProps;

export default memo(Steps);