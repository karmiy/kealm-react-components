import React, { useCallback } from 'react';
import { YearPanelProps, YearPanelDefaultProps } from './interface';
import { useContextConf, useClassName, useDidUpdate, usePuppet, useController } from 'hooks';
import YearHeader from './year-header';
import YearBody from './year-body';

const { createConfig } = useController;

function YearPanel(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
        defaultValue,
        value,
        disabled,
        onChange,
        onSelect,
        visible,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerValue,
        innerValue,
        setOuterValue,
        setInnerValue
    ] = usePuppet(defaultValue, value, { onChange, onSelect }, null, disabled, false);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        [`${componentCls}-year`]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && value && setInnerValue(value);
    }, [visible], true);

    // ---------------------------------- event ----------------------------------
    const onYearSelect = useCallback(v => {
        setOuterValue(createConfig({
            value: v,
            event: ['onChange', 'onSelect'],
            shouldTrigger: {
                onChange: (prev, next) => !prev || prev && prev.getTime() !== next.getTime(),
                onSelect: true,
            },
        }))
    }, []);

    // ---------------------------------- render ----------------------------------
    const commonProps = {
        prefixCls: componentCls,
        value: innerValue,
        disabled,
    };

    return (
        <div className={classNames}>
            <YearHeader
                {...commonProps}
                onChange={setInnerValue}
                visible={visible}
            />
            <YearBody
                {...commonProps}
                selectedDate={outerValue}
                onSelect={onYearSelect}
            />
        </div>
    );
}

YearPanel.propTypes = YearPanelProps;
YearPanel.defaultProps = YearPanelDefaultProps;

export default YearPanel;