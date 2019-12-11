import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* decade-panel-props */
export const DecadePanelProps = {
    // prefixCls: PropTypes.string,
    // defaultYear: PropTypes.number,
    // year: PropTypes.number,
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const DecadePanelDefaultProps = {
    onSelect: noop,
    disabled: false,
}

/* decade-header-props */
export const DecadeHeaderProps = {
    prefixCls: PropTypes.string,
    // year: PropTypes.number,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const DecadeHeaderDefaultProps = {
    onChange: noop,
    disabled: false,
}

/* decade-body-props */
export const DecadeBodyProps = {
    prefixCls: PropTypes.string,
    // year: PropTypes.number,
    value: PropTypes.instanceOf(Date),
    // selectedYear: PropTypes.number,
    selectedDate: PropTypes.instanceOf(Date),
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const DecadeBodyDefaultProps = {
    onSelect: noop,
    disabled: false,
}