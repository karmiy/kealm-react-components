import React, { useCallback } from 'react';
import { DecadePanelProps, DecadePanelDefaultProps } from './interface';
import { useContextConf, useClassName, useDidUpdate, usePuppet } from 'hooks';
import DecadeHeader from './decade-header';
import DecadeBody from './decade-body';

function DecadePanel(props) {
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
    // const [innerYear, setInnerYear] = useState(year || new Date().getFullYear());
    const [
        outerYear,
        innerYear,
        setOuterYear,
        setInnerYear
    ] = usePuppet(defaultYear, year, onSelect, null, disabled, false, true);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        [`${componentCls}-decade`]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && year && setInnerYear(year);
    }, [visible], true);

    // ---------------------------------- event ----------------------------------
    const onDecadeSelect = useCallback((from, to) => setOuterYear(from, from, to), []);

    // ---------------------------------- render ----------------------------------
    const commonProps = {
        prefixCls: componentCls,
        year: innerYear || new Date().getFullYear(),
        disabled,
    };

    return (
        <div className={classNames}>
            <DecadeHeader
                {...commonProps}
                onChange={setInnerYear}
            />
            <DecadeBody
                {...commonProps}
                selectedYear={outerYear}
                onSelect={onDecadeSelect}
            />
        </div>
    );
}

DecadePanel.propTypes = DecadePanelProps;
DecadePanel.defaultProps = DecadePanelDefaultProps;

export default DecadePanel;