import Dialog from './dialog';
import confirm from './confirm';

Dialog.confirm = function (props) {
    const config = {
        ...props,
    };
    return confirm(config);
};

export default Dialog;