import React, { useMemo, useCallback } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { DatePickerProps, DatePickerDefaultProps } from './interface';
import Input from '../input';
import Trigger from '../trigger';
import { formatDate } from 'utils/common/date';

function DatePicker(props) {
    const {componentCls} = useContextConf('date-picker');
    const {
        className,
        selectorClassName,
        selectorStyle,
        defaultVisible,
        visible,
        onVisibleChange,
        defaultPickerValue,
        defaultValue,
        value,
        onChange,
        disabled,
        placeholder,
        format,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange, false, disabled);
    const [dateValue, setDateValue] = useController(defaultValue, value, onChange, null, disabled);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        'km-popper': true,
        [className]: className,
    }, [className]);

    const inputClassNames = useClassName({
        [componentCls]: true,
        [selectorClassName]: selectorClassName,
    }, [componentCls, selectorClassName]);

    // ---------------------------------- render chunk ----------------------------------
    const renderPanel = useMemo(() => {
        return (
            <>
                <div>123123111111111111111111111111</div>
                <div className="popper__arrow" style={{left: '35px'}} />
            </>
        )
    }, []);

    // ---------------------------------- render ----------------------------------
    return (
        <Trigger
            trigger={'manual'}
            disabled={disabled}
            popup={renderPanel}
            className={classNames}
            modifiers={{
                computeStyle: {
                    gpuAcceleration: false,
                }
            }}
            visible={isVisible}
            onVisibleChange={setIsVisible}
            {...others}
        >
            <div className={inputClassNames} style={selectorStyle}>
                <Input
                    value={dateValue ? formatDate(dateValue, format) : ''}
                    readOnly
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </div>
        </Trigger>
    );
}

DatePicker.propTypes = DatePickerProps;
DatePicker.defaultProps = DatePickerDefaultProps;

export default DatePicker;