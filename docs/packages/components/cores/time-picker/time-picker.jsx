import React, { useMemo, useCallback } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { TimePickerProps, TimePickerDefaultProps } from './interface';
import Input from '../input';
import {Icon} from "../index";
import Trigger from '../trigger';
import Panel from './panel';
import { RenderWrapper } from '../../common';
import { formatDate } from 'utils/common/date'

function TimePicker(props) {
    const {componentCls} = useContextConf('time-picker');
    const {
        className,
        selectorClassName,
        selectorStyle,
        defaultVisible,
        visible,
        onVisibleChange,
        defaultOpenValue,
        defaultValue,
        value,
        onChange,
        placeholder,
        disabled,
        allowClear,
        onClear: clear,
        size,
        format,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange, false, disabled);
    const [dateValue, setDateValue, setInnerValue] = useController(defaultValue, value, onChange, null, disabled);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        'km-popper': true,
        [className]: className,
    }, [className]);

    const inputClassNames = useClassName({
        [componentCls]: true,
        [selectorClassName]: selectorClassName,
        'is-clearable': allowClear && dateValue,
    }, [componentCls, selectorClassName, allowClear, dateValue]);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(e => {
        e.stopPropagation();

        setInnerValue(null);
        clear(e);
    }, [clear]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderSuffix = useMemo(() => {
        return (
            <div>
                <Icon type={'time-circle'} className={`${componentCls}__caret`} />
                <RenderWrapper visible={allowClear} unmountOnExit>
                    <Icon type={'close-circle'} className={`${componentCls}__clear`} onClick={onClear} />
                </RenderWrapper>
            </div>
        )
    }, [componentCls, allowClear, onClear]);

    // ---------------------------------- render chunk ----------------------------------
    const renderPanel = useMemo(() => {
        return (
            <>
                <Panel
                    prefix={`${componentCls}-panel`}
                    defaultOpenValue={defaultOpenValue}
                    value={dateValue}
                    onChange={setDateValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    visible={isVisible}
                    format={format}
                />
                <div className="popper__arrow" style={{left: '35px'}} />
            </>
        )
    }, [componentCls, dateValue, setDateValue, defaultOpenValue, placeholder, disabled, isVisible, format]);

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
                    suffix={renderSuffix}
                    placeholder={placeholder}
                    size={size}
                    disabled={disabled}
                />
            </div>
        </Trigger>
    );
}

TimePicker.propTypes = TimePickerProps;
TimePicker.defaultProps = TimePickerDefaultProps;

export default TimePicker;