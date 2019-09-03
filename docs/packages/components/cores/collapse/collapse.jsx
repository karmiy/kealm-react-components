import React from 'react';
import { CollapseProps, CollapseDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';

function Collapse(props) {
    const { componentCls } = useContextConf('collapse');
    const {
        children,
        className,
        ...others
    } = props;

    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
    });

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

Collapse.propTypes = CollapseProps;
Collapse.defaultProps = CollapseDefaultProps;

export default Collapse