import PropTypes from 'prop-types';

/* button-props */
export const ButtonProps = {
    className: PropTypes.string,
    type: PropTypes.string, // 类型
    plain: PropTypes.bool, // 是否为普通按钮
    round: PropTypes.bool, // 是否有圆角
    circle: PropTypes.bool, // 是否为圆形
    icon: PropTypes.string, // 图标
}

export const DefaultProps = {
    type: 'default',
    plain: false,
    round: false,
    circle: false,
}