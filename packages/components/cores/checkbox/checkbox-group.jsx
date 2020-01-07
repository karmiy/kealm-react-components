import React, { useMemo } from 'react';
import { CheckboxGroupProps, CheckboxGroupDefaultProps } from "./interface";
import { useContextConf, useClassName, useCheckGroupValue } from 'hooks';
import { CheckedContext } from '../radio/context';

function CheckboxGroup(props) {
    const { componentCls } = useContextConf('checkbox-group');

    const {
        className,
        children,
        defaultValue,
        value,
        onChange,
        disabled,
        solid,
        size,
        name,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    // root-className
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- variable ----------------------------------
    const { checkedValue, checkChange } = useCheckGroupValue(defaultValue, value, onChange);

    // ---------------------------------- context.provider ----------------------------------
    // 传递给选择框的context
    const providers = useMemo(() => ({
        disabled,
        name,
        solid,
        size,
        groupValues: checkedValue,
        onChange: checkChange,
    }), [checkedValue, disabled, solid, size, name])

    // ---------------------------------- render ----------------------------------
    return (
        <CheckedContext.Provider value={providers}>
            <div role={'checkbox-group'} className={classNames} {...others}>
                {children}
            </div>
        </CheckedContext.Provider>
    )
}
CheckboxGroup.propTypes = CheckboxGroupProps;
CheckboxGroup.defaultProps = CheckboxGroupDefaultProps;

export default CheckboxGroup;