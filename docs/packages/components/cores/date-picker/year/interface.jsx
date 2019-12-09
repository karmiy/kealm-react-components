import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* year-panel-props */
export const YearPanelProps = {
    // prefixCls: PropTypes.string,
    year: PropTypes.number,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const YearPanelDefaultProps = {
    onSelect: noop,
    onChange: noop,
    disabled: false,
}

/* year-header-props */
export const YearHeaderProps = {
    prefixCls: PropTypes.string,
    year: PropTypes.number,
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
    year: PropTypes.number,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const YearBodyDefaultProps = {
    onSelect: noop,
    onChange: noop,
    disabled: false,
}