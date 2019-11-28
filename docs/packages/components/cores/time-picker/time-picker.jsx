import React, { useMemo } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { TimePickerProps, TimePickerDefaultProps } from './interface';
import Input from '../input';
import {Icon} from "../index";
import Trigger from '../trigger';
import Panel from './panel';
import Header from "./header";

function TimePicker(props) {
    const {componentCls} = useContextConf('time-picker');
    const {
        children,
        className,
        selectorClassName,
        selectorStyle,
        defaultVisible,
        visible,
        onVisibleChange,
        defaultValue,
        value,
        onChange,
        placeholder,
        disabled,
        ...others
    } = props;

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

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange);
    const [dateValue, setDateValue] = useController(defaultValue, value, onChange, null);

    // ---------------------------------- render mini chunk ----------------------------------
    const suffixIcon = useMemo(() => {
        return (
            <div>
                <Icon type={'time-circle'} className={`${componentCls}__caret`} />
                <Icon type={'close-circle'} className={`${componentCls}__clear`} />
            </div>
        )
    }, [componentCls]);

    // ---------------------------------- render chunk ----------------------------------
    const renderPanel = useMemo(() => {
        return (
            <>
                <Panel
                    prefix={`${componentCls}-panel`}
                    value={dateValue}
                    onChange={setDateValue}
                    placeholder={placeholder}
                    disabled={disabled}
                />
                <div className="popper__arrow" style={{left: '35px'}} />
            </>
        )
    }, [componentCls, dateValue, setDateValue, placeholder, disabled]);

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
                <Input readOnly suffix={suffixIcon} placeholder={placeholder} />
            </div>
        </Trigger>
    );
}

TimePicker.propTypes = TimePickerProps;
TimePicker.defaultProps = TimePickerDefaultProps;

export default TimePicker;