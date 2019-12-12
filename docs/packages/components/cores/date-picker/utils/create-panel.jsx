import React, { useMemo, useCallback } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { mergeStr, isFunction } from 'utils/common/base';
import Icon from '../../icon';

function CreatePanel(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
        data,
        headerPrev,
        headerNext,
        headerSelect,
        headerAddon,
        cellOption,
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        [isFunction(className) ? className(componentCls) : className]: className,
    }, [componentCls, className]);

    // ---------------------------------- function ----------------------------------
    const createRow = useCallback((rowData, key) => {
        return (
            <tr key={key}>
                {
                    rowData.map(item => {
                        const { key, className, isDisabled, isSelected, onClick, content } = cellOption(item);
                        const cellClassName = mergeStr({
                            [`${componentCls}-panel__cell`]: true,
                            [`${componentCls}__cell`]: true,
                            'is-selected': isSelected,
                            'is-disabled': isDisabled,
                            [isFunction(className) ? className(componentCls) : className]: className,
                        });

                        return (
                            <td key={key} className={cellClassName}>
                                <span className={`${componentCls}-panel__date ${componentCls}__date`} onClick={isDisabled ? null : onClick}>
                                    {content}
                                </span>
                            </td>
                        )
                    })
                }
            </tr>
        )
    }, [cellOption]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderPrevIcon = useMemo(() => {
        const { className, isDisabled, onClick } = headerPrev;
        const classNames = mergeStr({
            [`${componentCls}__header-btn`]: true,
            'is-disabled': isDisabled,
            [isFunction(className) ? className(componentCls) : className]: className,
        });

        return (
            <button className={classNames} onClick={onClick}>
                <Icon type={'double-left'} />
            </button>
        )
    }, Object.values(headerPrev));

    const renderNextIcon = useMemo(() => {
        const { className, isDisabled, onClick } = headerNext;
        const classNames = mergeStr({
            [`${componentCls}__header-btn`]: true,
            'is-disabled': isDisabled,
            [isFunction(className) ? className(componentCls) : className]: className,
        });

        return (
            <button className={classNames} onClick={onClick}>
                <Icon type={'double-right'} />
            </button>
        )
    }, Object.values(headerNext));

    const renderSelect = useMemo(() => {
        const { className, isDisabled, content } = headerSelect;

        const classNames = mergeStr({
            [`${componentCls}__header-select`]: true,
            'is-disabled': isDisabled,
            [isFunction(className) ? className(componentCls) : className]: className,
        })

        return (
            <span className={classNames}>
                {content}
            </span>
        )
    }, Object.values(headerSelect));

    // ---------------------------------- render chunk ----------------------------------
    const renderTbody = useMemo(() => {
        return (
            <tbody>
            {
                data.map((rowData, index) => createRow(rowData, index))
            }
            </tbody>
        )
    }, [data, createRow]);


    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames}>
            <div className={`${componentCls}__header`}>
                <div className={`${componentCls}__header-wrap`}>
                    {renderPrevIcon}
                    {renderSelect}
                    {renderNextIcon}
                </div>
                {headerAddon}
            </div>
            <div className={`${componentCls}-panel__body ${componentCls}__body`}>
                <table className={`${componentCls}-panel__table ${componentCls}__table`} cellSpacing={0}>
                    {renderTbody}
                </table>
            </div>
        </div>
    );
}

export default CreatePanel;