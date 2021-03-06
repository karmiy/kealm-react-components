import PropTypes from 'prop-types';
import { emptyArr, noop } from 'utils/common/base';
import { omit } from 'utils/common/object';

/* header-props */
export const HeaderProps = {
    prefixCls: PropTypes.string,
    defaultOpenValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    visible: PropTypes.bool,
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    disabledDate: PropTypes.func,
    disabledTime: PropTypes.func,
    /*disabledHours: PropTypes.array,
    disabledMinutes: PropTypes.array,
    disabledSeconds: PropTypes.array,*/
}

export const HeaderDefaultProps = {
    disabled: false,
    onChange: noop,
    placeholder: '请选择日期',
    format: 'YYYY-MM-DD',
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    disabledDate: noop,
    disabledTime: noop,
    /*disabledHours: emptyArr,
    disabledMinutes: emptyArr,
    disabledSeconds: emptyArr,*/
}

/* range-header-props */
export const RangeHeaderProps = {
    ...omit(HeaderProps, ['placeholder']),
    defaultOpenValue: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    value: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    startPlaceholder: PropTypes.string,
    endPlaceholder: PropTypes.string,
}

export const RangeHeaderDefaultProps = {
    ...omit(HeaderDefaultProps, ['placeholder']),
    defaultOpenValue: emptyArr,
    value: emptyArr,
    startPlaceholder: '请选择日期',
    endPlaceholder: '请选择日期',
}

/* footer-props */
export const FooterProps = {
    prefixCls: PropTypes.string,
    onChange: PropTypes.func,
    showTime: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    showToday: PropTypes.bool,
    showNow: PropTypes.bool,
    showOk: PropTypes.bool,
    timePicker: PropTypes.bool,
    disabled: PropTypes.bool,
    okDisabled: PropTypes.bool,
    isRange: PropTypes.bool,
    timeVisible: PropTypes.bool,
    onTimeVisibleChange: PropTypes.func,
    onOk: PropTypes.func,
    disabledDate: PropTypes.func,
    renderFooter: PropTypes.node,
}

export const FooterDefaultProps = {
    onChange: noop,
    showTime: false,
    showToday: false,
    showNow: false,
    showOk: false,
    timePicker: false,
    disabled: false,
    okDisabled: false,
    isRange: false,
    timeVisible: false,
    onTimeVisibleChange: noop,
    onOk: noop,
    disabledDate: noop,
}