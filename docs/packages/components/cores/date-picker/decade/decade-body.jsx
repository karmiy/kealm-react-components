import React from 'react';

function DecadeBody(props) {
    const {
        prefixCls,
    } = props;

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}-panel__body ${prefixCls}__body`}>
            <table className={`${prefixCls}-panel__table ${prefixCls}__table`} cellSpacing={0}>
                <tbody>
                    <tr>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell is-prev-decade`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                        <td className={`${prefixCls}-panel__cell ${prefixCls}__cell is-next-decade`}>
                            <span className={`${prefixCls}-panel__date ${prefixCls}__date`}>
                                2000-2009
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DecadeBody;