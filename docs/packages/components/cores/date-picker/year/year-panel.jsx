import React, { useState, useCallback } from 'react';
import { YearPanelProps, YearPanelDefaultProps } from './interface';
import { useContextConf, useClassName, useDidUpdate } from 'hooks';
import YearHeader from './year-header';
import YearBody from './year-body';

function YearPanel(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
        year,
        disabled,
        onSelect,
        onChange,
        visible,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [innerYear, setInnerYear] = useState(year || new Date().getFullYear());

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        [`${componentCls}-year`]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setInnerYear(year || new Date().getFullYear());
    }, [year], true);

    useDidUpdate(() => {
        visible && setInnerYear(year || new Date().getFullYear());
    }, [visible], true);

    // ---------------------------------- event ----------------------------------
    const onHeaderChange = useCallback(year => {
        setInnerYear(year);
    }, []);

    const onYearSelect = useCallback(year => {
        onSelect(year);
    }, [onSelect]);

    const onYearChange = useCallback(year => {
        onChange(year);
    }, [onChange]);

    // ---------------------------------- render ----------------------------------
    const commonProps = {
        prefixCls: componentCls,
        year: innerYear,
        disabled,
    };

    return (
        <div className={classNames}>
            <YearHeader
                {...commonProps}
                onChange={onHeaderChange}
            />
            <YearBody
                {...commonProps}
                onSelect={onYearSelect}
                onChange={onYearChange}
            />
        </div>
    );
}

YearPanel.propTypes = YearPanelProps;
YearPanel.defaultProps = YearPanelDefaultProps;

export default YearPanel;