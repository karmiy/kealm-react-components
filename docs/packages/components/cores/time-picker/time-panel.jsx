import React, { useCallback } from 'react';
import { TimePanelProps, TimePanelDefaultProps } from './interface';
import { useContextConf, useClassName, useController } from 'hooks';
import Combobox from './combobox';

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
        disabledHours,
        disabledMinutes,
        disabledSeconds,
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

    // ---------------------------------- event ----------------------------------
    const onComboboxSelect = useCallback(v => {
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
