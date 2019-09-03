import PropTypes from 'prop-types';

/* button-props */
export const ButtonProps = {
    className: PropTypes.string,
    type: PropTypes.string, // 类型
    plain: PropTypes.bool, // 简单按钮
    round: PropTypes.bool, // 圆角
    circle: PropTypes.bool, // 圆形按钮
    icon: PropTypes.string, // 图标
    iconRight: PropTypes.bool, // 图标置后
    disabled: PropTypes.bool, // 禁用
    loading: PropTypes.bool, // loading
    active: PropTypes.bool, // active
    size: PropTypes.string, // 大小
    nativeType: PropTypes.string, // 原生type
}

export const ButtonDefaultProps = {
    type: 'default',
    plain: false,
    round: false,
    circle: false,
    iconRight: false,
    disabled: false,
    loading: false,
    active: false,
    nativeType: 'button',
}

/* button-group-props */
export const ButtonGroupProps = {
    className: PropTypes.string,
}