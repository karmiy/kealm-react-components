import React, { useCallback, useMemo } from 'react';
import { TimePanelProps, TimePanelDefaultProps } from './interface';
import { useContextConf, useClassName, useController } from 'hooks';
import Combobox from './combobox';
import { isArray } from 'utils/common/base';

const { createConfig } = useController;

function TimePanel(props) {
    const { componentCls } = useContextConf('time-panel');
    const {
        className,
        defaultOpenValue,
        defaultValue,
        value,
        onChange,
        onSelect,
        disabled,
        visible,
        format,
        hourStep,
        minuteStep,
        secondStep,
        disabledHours: _disabledHours,
        disabledMinutes: _disabledMinutes,
        disabledSeconds: _disabledSeconds,
        hideDisabledOptions,
        header,
        footer,
        initAsyncScroll,
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- variable ----------------------------------
    const [timeValue, setTimeValue] = useController(defaultValue, value, { onChange, onSelect }, null, disabled);
    const selectedHour = timeValue ? timeValue.getHours() : (defaultOpenValue ? defaultOpenValue.getHours() : 0),
        selectedMinute = timeValue ? timeValue.getMinutes() : (defaultOpenValue ? defaultOpenValue.getMinutes() : 0);

    const disabledHours = useMemo(() => _disabledHours(), [_disabledHours]),
        disabledMinutes = useMemo(() => _disabledMinutes(selectedHour), [_disabledMinutes, selectedHour]),
        disabledSeconds = useMemo(() => _disabledSeconds(selectedHour, selectedMinute), [_disabledSeconds, selectedHour, selectedMinute]);

    // ---------------------------------- event ----------------------------------
    const onComboboxSelect = useCallback(v => {
        if(isArray(disabledHours) && disabledHours.includes(v.getHours())) return;
        if(isArray(disabledMinutes) && disabledMinutes.includes(v.getMinutes())) return;
        if(isArray(disabledSeconds) && disabledSeconds.includes(v.getSeconds())) return;

        setTimeValue(createConfig({
            value: v,
            event: ['onChange', 'onSelect'],
            shouldTrigger: {
                onChange: (prev, next) => !prev || prev && prev.getTime() !== next.getTime(),
                onSelect: true,
            },
        }))
    }, []);
    
    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames}>
            {header(timeValue)}
            <Combobox
                prefixCls={componentCls}
                defaultOpenValue={defaultOpenValue}
                value={timeValue}
                onSelect={onComboboxSelect}
                disabled={disabled}
                visible={visible}
                format={format}
                hourStep={hourStep}
                minuteStep={minuteStep}
                secondStep={secondStep}
                disabledHours={disabledHours}
                disabledMinutes={disabledMinutes}
                disabledSeconds={disabledSeconds}
                hideDisabledOptions={hideDisabledOptions}
                initAsyncScroll={initAsyncScroll}
            />
            {footer(timeValue)}
        </div>
    );
}

TimePanel.propTypes = TimePanelProps;
TimePanel.defaultProps = TimePanelDefaultProps;

export default TimePanel;
