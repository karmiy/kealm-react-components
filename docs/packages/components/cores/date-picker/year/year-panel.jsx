import React from 'react';
import { YearPanelProps, YearPanelDefaultProps } from './interface';
import { useContextConf, useClassName, useDidUpdate, usePuppet } from 'hooks';
import YearHeader from './year-header';
import YearBody from './year-body';

function YearPanel(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
        defaultYear,
        year,
        disabled,
        onSelect,
        visible,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerYear,
        innerYear,
        setOuterYear,
        setInnerYear
    ] = usePuppet(defaultYear, year, onSelect, null, disabled, false, true);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        [`${componentCls}-year`]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && year && setInnerYear(year);
    }, [visible], true);

    // ---------------------------------- render ----------------------------------
    const commonProps = {
        prefixCls: componentCls,
        year: innerYear || new Date().getFullYear(),
        disabled,
    };

    return (
        <div className={classNames}>
            <YearHeader
                {...commonProps}
                onChange={setInnerYear}
                visible={visible}
            />
            <YearBody
                {...commonProps}
                selectedYear={outerYear}
                onSelect={setOuterYear}
            />
        </div>
    );
}

YearPanel.propTypes = YearPanelProps;
YearPanel.defaultProps = YearPanelDefaultProps;

export default YearPanel;