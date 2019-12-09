import React from 'react';
import Icon from '../../icon';

function DecadeHeader(props) {
    const {
        prefixCls,
    } = props;

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}__header`}>
            <button className={`${prefixCls}__header-btn ${prefixCls}__header-prev-century`}>
                <Icon type={'double-left'} />
            </button>
            <span className={`${prefixCls}__header-select`}>
                2110 - 2119
            </span>
            <button className={`${prefixCls}__header-btn ${prefixCls}__header-next-century`}>
                <Icon type={'double-right'} />
            </button>
        </div>
    );
}

export default DecadeHeader;