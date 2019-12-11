import React, { useCallback } from 'react';
import { DecadePanelProps, DecadePanelDefaultProps } from './interface';
import { useContextConf, useClassName, useDidUpdate, usePuppet } from 'hooks';
import DecadeHeader from './decade-header';
import DecadeBody from './decade-body';

function DecadePanel(props) {
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
        [`${componentCls}-decade`]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && value && setInnerValue(value);
    }, [visible], true);

    // ---------------------------------- event ----------------------------------
    const onDecadeSelect = useCallback((from, to) => setOuterValue(from, from, to), []);

    // ---------------------------------- render ----------------------------------
    const commonProps = {
        prefixCls: componentCls,
        value: innerValue,
        disabled,
    };

    return (
        <div className={classNames}>
            <DecadeHeader
                {...commonProps}
                onChange={setInnerValue}
            />
            <DecadeBody
                {...commonProps}
                selectedDate={outerValue}
                onSelect={onDecadeSelect}
            />
        </div>
    );
}

DecadePanel.propTypes = DecadePanelProps;
DecadePanel.defaultProps = DecadePanelDefaultProps;

export default DecadePanel;