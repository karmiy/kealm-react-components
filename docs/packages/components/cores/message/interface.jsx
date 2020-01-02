import PropTypes from 'prop-types';

/* message-props */
export const MessageProps = {
    type: PropTypes.oneOf(['success', 'warning', 'info', 'error', 'loading']), // 类型
    messageRef: PropTypes.object,
    content: PropTypes.node,
    icon: PropTypes.node,
}

export const MessageDefaultProps = {
}