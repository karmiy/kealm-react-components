import React from 'react';
import { ButtonGroupProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';

function ButtonGroup(props) {
    const { componentCls } = useContextConf('button-group');
    const {
        children,
        className,
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
            {children}
        </div>
    )
}
ButtonGroup.propTypes = ButtonGroupProps;

export default ButtonGroup;