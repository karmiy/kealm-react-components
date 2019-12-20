import PropTypes from 'prop-types';
import { emptyArr } from 'utils/common/base';
import { omit } from 'utils/common/object';

/* header-props */
export const HeaderProps = {
    prefixCls: PropTypes.string,
    defaultOpenValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    visible: PropTypes.bool,
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    disabledHours: PropTypes.array,
    disabledMinutes: PropTypes.array,
    disabledSeconds: PropTypes.array,
}

export const HeaderDefaultProps = {
    disabled: false,
    placeholder: '请选择日期',
    format: 'YYYY-MM-DD',
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    disabledHours: emptyArr,
    disabledMinutes: emptyArr,
    disabledSeconds: emptyArr,
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