import React, { useMemo } from 'react';
import { RadioGroupProps, RadioGroupDefaultProps } from "./interface";
import { useContextConf, useClassName, useCheckGroupValue } from 'hooks';
import { CheckedContext } from './context';
import { isEmpty } from 'utils/common/base';

function RadioGroup(props) {
    const { componentCls } = useContextConf('radio-group');

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

    // ---------------------------------- logic code ----------------------------------
    const { checkedValue, checkChange } = useCheckGroupValue(defaultValue, value, onChange);

    // ---------------------------------- context.provider ----------------------------------
    // 传递给选择框的context
    const providers = useMemo(() => ({
        disabled,
        name,
        solid,
        size,
        groupValues: !isEmpty(checkedValue) ? [checkedValue] : [],
        onChange: checkChange,
    }), [checkedValue, checkChange, disabled, solid, size, name])

    // ---------------------------------- render ----------------------------------
    return (
        <CheckedContext.Provider value={providers}>
            <div role={'radio-group'} className={classNames} {...others}>
                {children}
            </div>
        </CheckedContext.Provider>
    )
}
RadioGroup.propTypes = RadioGroupProps;
RadioGroup.defaultProps = RadioGroupDefaultProps;

export default RadioGroup;