import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* year-panel-props */
export const YearPanelProps = {
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const YearPanelDefaultProps = {
    onChange: noop,
    onSelect: noop,
    disabled: false,
}

/* year-header-props */
export const YearHeaderProps = {
    prefixCls: PropTypes.string,
    // year: PropTypes.number,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const YearHeaderDefaultProps = {
    onChange: noop,
    disabled: false,
}

/* year-body-props */
export const YearBodyProps = {
    prefixCls: PropTypes.string,
    // year: PropTypes.number,
    value: PropTypes.instanceOf(Date),
    // selectedYear: PropTypes.number,
    selectedDate: PropTypes.instanceOf(Date),
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const YearBodyDefaultProps = {
    onSelect: noop,
    disabled: false,
}