import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* decade-panel-props */
export const DecadePanelProps = {
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const DecadePanelDefaultProps = {
    onChange: noop,
    onSelect: noop,
    disabled: false,
}

/* decade-header-props */
export const DecadeHeaderProps = {
    prefixCls: PropTypes.string,
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
    value: PropTypes.instanceOf(Date),
    selectedDate: PropTypes.instanceOf(Date),
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const DecadeBodyDefaultProps = {
    onSelect: noop,
    disabled: false,
}