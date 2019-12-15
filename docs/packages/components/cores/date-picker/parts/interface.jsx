import PropTypes from 'prop-types';

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