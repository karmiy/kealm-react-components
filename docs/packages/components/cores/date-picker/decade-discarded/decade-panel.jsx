import React, { useCallback } from 'react';
import { DecadePanelProps, DecadePanelDefaultProps } from './interface';
import { useContextConf, useClassName, useDidUpdate, usePuppet, useController } from 'hooks';
import DecadeHeader from './decade-header';
import DecadeBody from './decade-body';

const { createConfig } = useController;

function DecadePanel(props) {
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
        [`${componentCls}-decade`]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && value && setInnerValue(value);
    }, [visible], true);

    // ---------------------------------- event ----------------------------------
    const onDecadeSelect = useCallback((from, to) => {
        setOuterValue(createConfig({
            value: from,
            event: {
                onChange: [from, to],
                onSelect: [from, to],
            },
            shouldTrigger: {
                onChange: (prev, next) => !prev || prev && prev.getTime() !== next.getTime(),
                onSelect: true,
            },
        }));
    }, []);

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