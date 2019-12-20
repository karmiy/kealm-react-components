import React, { memo } from 'react';

function Footer(props) {
    const {
        prefixCls,
    } = props;

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}__footer-wrap`}>
            <div className={`${prefixCls}__footer-container`}>
                <a className={`${prefixCls}__footer-btn`}>选择时间</a>
            </div>
        </div>
    );
};

export default Footer;
