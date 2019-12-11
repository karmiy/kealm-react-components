import React from 'react';
import { YearPanelProps, YearPanelDefaultProps } from './interface';
import { useContextConf, useClassName, useDidUpdate, usePuppet } from 'hooks';
import YearHeader from './year-header';
import YearBody from './year-body';

function YearPanel(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
        defaultValue,
        value,
        disabled,
        onSelect,
        visible,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerValue,
        innerValue,
        setOuterValue,
        setInnerValue
    ] = usePuppet(defaultValue, value, onSelect, null, disabled, false, true);

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
                onSelect={setOuterValue}
            />
        </div>
    );
}

YearPanel.propTypes = YearPanelProps;
YearPanel.defaultProps = YearPanelDefaultProps;

export default YearPanel;