import React from 'react';
import { ButtonGroupProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';
import Button from "./button";

function ButtonGroup(props) {
    const { componentCls } = useContextConf('button-group');
    const {
        children,
        className,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
    }, [className]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            {children}
        </div>
    )
}
ButtonGroup.propTypes = ButtonGroupProps;

export default ButtonGroup;