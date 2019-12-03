import React, { useMemo, useCallback } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { TimePickerProps, TimePickerDefaultProps } from './interface';
import Input from '../input';
import {Icon} from "../index";
import Trigger from '../trigger';
import Header from './header';
import Combobox from './combobox';
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
        hourStep,
        minuteStep,
        secondStep,
        disabledHours: _disabledHours,
        disabledMinutes: _disabledMinutes,
        disabledSeconds: _disabledSeconds,
        hideDisabledOptions,
        addon,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange, false, disabled);
    const [dateValue, setDateValue, setInnerValue] = useController(defaultValue, value, onChange, null, disabled);
    const isAM = dateValue ? dateValue.getHours() < 12 : (defaultOpenValue ? defaultOpenValue.getHours() < 12 : true); // am or pm for hh
    const selectedHour = dateValue ? dateValue.getHours() : (defaultOpenValue ? defaultOpenValue.getHours() : 0),
        selectedMinute = dateValue ? dateValue.getMinutes() : (defaultOpenValue ? defaultOpenValue.getMinutes() : 0);
    const disabledHours = useMemo(() => _disabledHours(), [_disabledHours]),
        disabledMinutes = useMemo(() => _disabledMinutes(selectedHour), [_disabledMinutes, selectedHour]),
        disabledSeconds = useMemo(() => _disabledSeconds(selectedHour, selectedMinute), [_disabledSeconds, selectedHour, selectedMinute]);

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
    const panelDependencies = [
        componentCls,
        dateValue,
        setDateValue,
        defaultOpenValue,
        placeholder,
        disabled,
        isVisible,
        format,
        isAM,
        hourStep,
        minuteStep,
        secondStep,
        disabledHours,
        disabledMinutes,
        disabledSeconds,
        hideDisabledOptions,
    ];

    const renderAddon = useMemo(() => {
        if(!addon) return null;

        return (
            <div className={`${componentCls}-panel__addon`}>
                {addon(dateValue, setDateValue)}
            </div>
        );
    }, [addon, dateValue]);

    const renderPanel = useMemo(() => {
        const commonProps = {
            prefix: `${componentCls}-panel`,
            defaultOpenValue,
            value: dateValue,
            onChange: setDateValue,
            disabled,
            format,
            isAM,
            hourStep,
            minuteStep,
            secondStep,
            disabledHours,
            disabledMinutes,
            disabledSeconds,
        };
        return (
            <>
                <div className={`${componentCls}-panel__inner`}>
                    <Header
                        placeholder={placeholder}
                        {...commonProps}
                    />
                    <Combobox
                        visible={visible}
                        hideDisabledOptions={hideDisabledOptions}
                        {...commonProps}
                    />
                    {renderAddon}
                </div>
                <div className="popper__arrow" style={{left: '35px'}} />
            </>
        )
    }, [...panelDependencies, renderAddon]);

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