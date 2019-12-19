import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

const panelProps = {
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    disabledDate: PropTypes.func,
    disabledArrow: PropTypes.func,
    hiddenDisabledArrow: PropTypes.bool,
}

const panelDefaultProps = {
    onChange: noop,
    onSelect: noop,
    disabled: false,
    disabledDate: noop,
    disabledArrow: noop,
    hiddenDisabledArrow: false,
}

/* year-panel-props */
export const YearPanelProps = {
    ...panelProps,
    disabledDecade: PropTypes.func,
}

export const YearPanelDefaultProps = {
    ...panelDefaultProps,
    disabledDecade: noop,
}

/* decade-panel-props */
export const DecadePanelProps = {
    ...panelProps,
}

export const DecadePanelDefaultProps = {
    ...panelDefaultProps,
}

/* month-panel-props */
export const MonthPanelProps = {
    ...panelProps,
    disabledYear: PropTypes.func,
    disabledDecade: PropTypes.func,
}

export const MonthPanelDefaultProps = {
    ...panelDefaultProps,
    disabledYear: noop,
    disabledDecade: noop,
}