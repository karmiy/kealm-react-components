/* 方向性图标 */
export const directionIcons = [
    'up', 'right', 'down', 'left', 'double-left', 'double-right',
    'caret-up', 'caret-right', 'caret-down', 'caret-left',
    'backward-to', 'forward-to', 'step-backward', 'step-forward',
    'fast-backward', 'fast-forward',
    'undo', 'redo', 'forward', 'reply', 'spinner',
    'arrow-up-left', 'arrow-up', 'arrow-up-right', 'arrow-right',
    'arrow-down-right', 'arrow-down', 'arrow-down-left', 'arrow-left',
    'circle-up', 'circle-right', 'circle-down', 'circle-left',
    'enlarge-full', 'shrink-full', 'enlarge', 'shrink',
]

/* 提示性图标 */
export const tipIcons = [
    'check', 'close', 'minus', 'plus', 'question',
    'check-circle', 'close-circle', 'info-circle', 'minus-circle', 'plus-circle',
    'question-circle', 'pause-circle', 'stop-circle', 'time-circle', 'warning-circle',
    'issues-close', 'close-square', 'minus-square', 'plus-square', 'check-square', 'error',
    'check-circle-fill', 'close-circle-fill', 'info-circle-fill', 'minus-circle-fill', 'plus-circle-fill',
    'question-circle-fill', 'pause-circle-fill', 'stop-fill', 'time-circle-fill', 'warning-circle-fill'
]

/* 编辑类图标 */
export const editIcons = [
    'edit', 'copy', 'paste', 'save', 'config', 'delete', 'ellipsis',
    'ordered-list', 'unordered-list', 'bold', 'underline', 'italic',
    'strikethrough', 'scissors', 'menu', 'align-left', 'align-center',
    'align-right', 'ellipsis', 'dash'
]


/* 通用图标 */
export const generalIcons = [
    'home', 'droplet', 'image', 'images', 'camera', 'music',
    'film', 'connection', 'mic', 'book', 'books', 'file',
    'files', 'file-text', 'file-music', 'file-play', 'file-video',
    'file-pdf', 'file-word', 'file-excel', 'folder',
    'tree', 'download', 'upload', 'link', 'eye', 'eye-o', 'eye-fill', 'eye-fill-o', 'price-tag',
    'barcode', 'qrcode', 'cart', 'coin-dollar', 'coin-euro', 'coin-pound',
    'coin-yen', 'phone', 'envelop', 'location', 'alarm', 'calendar', 'printer',
    'keyboard', 'display', 'mobile', 'database', 'user', 'add-user', 'delete-user',
    'team', 'add-team', 'delete-team', 'solution', 'smile', 'smile-fill', 'frown', 'frown-fill',
    'loading', 'search', 'zoom-in', 'zoom-out', 'key', 'lock', 'unlock', 'gift',
    'rocket', 'power', 'switch', 'star-empty', 'star-half', 'star-full', 'heart',
    'heart-broken', 'play', 'pause', 'stop', 'previous', 'next', 'go-backward', 'go-forward',
    'volume-medium', 'volume-mute', 'volume-mute-o', 'filter'
]

/* 标识性图标  */
export const identityIcons = [
    'earth', 'chrome', 'firefox', 'IE', 'edge', 'safari',
    'alipay', 'taobao', 'zhihu', 'aliwangwang', 'apple', 'android',
    'windows', 'QQ', 'weibo', 'wechat', 'github'
]

/* 总数 */
export const iconLength = [
    ...directionIcons,
    ...tipIcons,
    ...editIcons,
    ...generalIcons,
    ...identityIcons
].length;

export default [
    {
        name: '方向性图标',
        icons: directionIcons,
    },
    {
        name: '提示性图标',
        icons: tipIcons,
    },
    {
        name: '编辑类图标',
        icons: editIcons,
    },
    {
        name: '通用图标',
        icons: generalIcons,
    },
    {
        name: '标识性图标',
        icons: identityIcons,
    }
]