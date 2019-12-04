import React from 'react';
import Input from '../input';

function Header(props) {
    const {
        prefixCls,
        placeholder,
        disabled,
    } = props;

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}-panel__input-wrap`}>
            <Input placeholder={placeholder} disabled={disabled} size={'small'} />
        </div>
    );
}

export default Header;