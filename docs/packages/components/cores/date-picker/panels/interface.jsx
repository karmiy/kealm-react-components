import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

const panelProps = {
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

const panelDefaultProps = {
    onChange: noop,
    onSelect: noop,
    disabled: false,
}

/* year-panel-props */
export const YearPanelProps = {
    ...panelProps,
}

export const YearPanelDefaultProps = {
    ...panelDefaultProps,
}

/* decade-panel-props */
export const DecadePanelProps = {
    ...panelProps,
}

export const DecadePanelDefaultProps = {
    ...panelDefaultProps,
}