import React from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { DatePickerProps, DatePickerDefaultProps } from './interface';

function DatePicker(props) {
    const {componentCls} = useContextConf('date-picker');
    const {
        className,
        defaultVisible,
        visible,
        onVisibleChange,
        defaultPickerValue,
        defaultValue,
        value,
        onChange,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames}>
            123
        </div>
    );
}

DatePicker.propTypes = DatePickerProps;
DatePicker.defaultProps = DatePickerDefaultProps;

export default DatePicker;