import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../select/interface';
import { noop, emptyArr } from 'utils/common/base';

/* date-picker-props */
export const DatePickerProps = {
    ...dropdownCommonProps, // defaultVisible ...
    defaultPickerValue: PropTypes.instanceOf(Date),
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    allowClear: PropTypes.bool,
}

export const DatePickerDefaultProps = {
    ...dropdownCommonDefaultProps,
    onChange: noop,
    disabled: false,
    placeholder: '请选择日期',
    format: 'YYYY-MM-DD',
    allowClear: false,
}

/* panel-props */
export const PanelProps = {
    prefixCls: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    visible: PropTypes.bool,
    onVisibleChange: PropTypes.func,
}

export const PanelDefaultProps = {
    onChange: noop,
    disabled: false,
    placeholder: '请选择日期',
    format: 'YYYY-MM-DD',
    onVisibleChange: noop,
}

/* header-props */
export const HeaderProps = {
    prefixCls: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    visible: PropTypes.bool,
}

export const HeaderDefaultProps = {
    disabled: false,
    placeholder: '请选择日期',
    format: 'YYYY-MM-DD',
}