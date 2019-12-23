import React, { useMemo, useCallback } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { TimePickerProps, TimePickerDefaultProps } from './interface';
import Input from '../input';
import {Icon} from "../index";
import Trigger from '../trigger';
// import Header from './header';
import Header from '../date-picker/parts/header';
import TimePanel from './time-panel';
import { RenderWrapper } from '../../common';
import { formatDate } from 'utils/common/date'

const { createConfig } = useController;

function TimePicker(props) {
    const { componentCls, prefix } = useContextConf('time-picker');
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
    const [dateValue, setDateValue] = useController(defaultValue, value, onChange, null, disabled);
    const selectedHour = dateValue ? dateValue.getHours() : (defaultOpenValue ? defaultOpenValue.getHours() : 0),
        selectedMinute = dateValue ? dateValue.getMinutes() : (defaultOpenValue ? defaultOpenValue.getMinutes() : 0);
    const disabledHours = useMemo(() => _disabledHours(), [_disabledHours]),
        disabledMinutes = useMemo(() => _disabledMinutes(selectedHour), [_disabledMinutes, selectedHour]),
        disabledSeconds = useMemo(() => _disabledSeconds(selectedHour, selectedMinute), [_disabledSeconds, selectedHour, selectedMinute]);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${prefix}-picker-panel`]: true,
        [className]: className,
    }, [className]);

    const inputClassNames = useClassName({
        [componentCls]: true,
        [selectorClassName]: selectorClassName,
        'is-clearable': allowClear && dateValue && !disabled,
        'is-disabled': disabled,
    }, [componentCls, selectorClassName, allowClear, dateValue, disabled]);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(e => {
        e && e.stopPropagation();

        setDateValue(createConfig({
            value: null,
            event: [null, ''],
        }));
    }, []);

    const onDateChange = useCallback(v => {
        if(!v) {
            onClear();
            return;
        }
        setDateValue(createConfig({
            value: v,
            event: [v, formatDate(v, format)],
        }));
    }, [format]);

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
    }, [componentCls, allowClear]);

    // ---------------------------------- render chunk ----------------------------------
    const panelDependencies = [
        componentCls,
        dateValue,
        onDateChange,
        defaultOpenValue,
        placeholder,
        disabled,
        isVisible,
        format,
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
                {addon(dateValue, onDateChange)}
            </div>
        );
    }, [addon, dateValue]);

    const renderPanel = useMemo(() => {
        const commonProps = {
            // prefixCls: `${componentCls}-panel`,
            defaultOpenValue,
            value: dateValue,
            onChange: onDateChange,
            disabled,
            format,
            visible: isVisible,
            hourStep,
            minuteStep,
            secondStep,
            disabledHours,
            disabledMinutes,
            disabledSeconds,
        };
        return (
            <>
                <div className={`${componentCls}-panel`}>
                    <Header
                        prefixCls={`${componentCls}-panel`}
                        placeholder={placeholder}
                        // onChange={onDateChange}
                        {...commonProps}
                    />
                    <TimePanel
                        hideDisabledOptions={hideDisabledOptions}
                        // onSelect={onDateChange}
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