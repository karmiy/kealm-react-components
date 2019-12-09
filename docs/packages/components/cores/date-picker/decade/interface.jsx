import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* decade-panel-props */
export const DecadePanelProps = {
    // prefixCls: PropTypes.string,
    year: PropTypes.number,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const DecadePanelDefaultProps = {
    onSelect: noop,
    onChange: noop,
    disabled: false,
}

/* decade-header-props */
export const DecadeHeaderProps = {
    prefixCls: PropTypes.string,
    year: PropTypes.number,
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
    year: PropTypes.number,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const DecadeBodyDefaultProps = {
    onSelect: noop,
    onChange: noop,
    disabled: false,
}