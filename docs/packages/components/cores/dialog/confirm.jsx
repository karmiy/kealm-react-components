import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './dialog';

function ConfirmDialog(props) {
    const {
        visible,
        getContainer
    } = props;
    return (
        <Dialog visible={visible} getContainer={getContainer}>
            <p>这是一段话</p>
            <p>这是一段话</p>
            <p>这是一段话</p>
        </Dialog>
    )
}

export default function confirm(config) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    let currentConfig = { ...config, close, visible: true };

    function close() {

    }

    function render(props) {
        ReactDOM.render(<ConfirmDialog getContainer={null} {...props} />, div);
    }

    render(currentConfig);
}