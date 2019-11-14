import React, { useState, useMemo, useCallback } from 'react';
import { useContextConf, useClassName, useController, useDidUpdate } from 'hooks';
import { PaginationProps, PaginationDefaultProps } from './interface';
import Icon from '../icon';
import { mergeStr } from 'utils/common/base';

function createNumbers(num = 0) {
    const arr = [];
    while (num > 0) {
        arr.unshift(num--);
    }
    return arr;
}

function Pagination(props) {
    const {componentCls} = useContextConf('pagination');
    const {
        children,
        className,
        defaultCurrent,
        current,
        onChange,
        defaultPageSize,
        pageSize: _pageSize,
        onPageSizeChange,
        total,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [pageNo ,setPageNo] = useController(defaultCurrent, current, onChange, 1);
    const [pageSize, setPageSize] = useController(defaultPageSize, _pageSize, onPageSizeChange, 10);
    const minPageNo = 1, maxPageNo = Math.ceil(total / pageSize);
    const [prevDisabled, setPrevDisabled] = useState(pageNo <= 1);
    const [nextDisabled, setNextDisabled] = useState(pageNo >= maxPageNo);
    const pageNumbers = createNumbers(maxPageNo);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    const prevClassNames = useClassName({
        [`${componentCls}__item`]: true,
        'is-prev': true,
        'is-disabled': prevDisabled,
    }, [componentCls, prevDisabled]);

    const nextClassNames = useClassName({
        [`${componentCls}__item`]: true,
        'is-next': true,
        'is-disabled': nextDisabled,
    }, [componentCls, nextDisabled]);

    // ---------------------------------- logic code ----------------------------------
    useDidUpdate(() => {
        setPrevDisabled(pageNo <= minPageNo);
        setNextDisabled(pageNo >= maxPageNo);
    }, [pageNo], true);

    // ---------------------------------- event ----------------------------------
    const onPrevClick = useCallback(() => {
        if(pageNo <= minPageNo || prevDisabled)
            return;

        setPageNo(n => --n);
    }, [pageNo, minPageNo, prevDisabled]);

    const onNextClick = useCallback(() => {
        if(pageNo >= maxPageNo || nextDisabled)
            return;

        setPageNo(n => ++n);
    }, [pageNo, maxPageNo, nextDisabled]);

    // ---------------------------------- render chunk ----------------------------------
    const renderPrev = useMemo(() => {
        return (
            <li className={prevClassNames} tabIndex={0}>
                <span className={`${componentCls}__link`} onClick={onPrevClick}>
                    <Icon type={'left'} />
                </span>
            </li>
        )
    }, [prevClassNames, componentCls, onPrevClick]);

    const renderNext = useMemo(() => {
        return (
            <li className={nextClassNames} tabIndex={0}>
                <span className={`${componentCls}__link`} onClick={onNextClick}>
                    <Icon type={'right'} />
                </span>
            </li>
        )
    }, [nextClassNames, componentCls, onNextClick]);

    const renderPageNums = useMemo(() => {
        return pageNumbers.map(num => {
            const itemClassNames = mergeStr({
                [`${componentCls}__item`]: true,
                'is-active': num === pageNo,
            })
            return (
                <li key={num} className={itemClassNames} tabIndex={0} onClick={() => setPageNo(num)}>
                    <span className={`${componentCls}__link`}>
                        {num}
                    </span>
                </li>
            )
        });
    }, [pageNumbers.length, componentCls, pageNo]);

    // ---------------------------------- render ----------------------------------
    // if(!total) return null;

    return (
        <ul className={classNames} {...others}>
            {renderPrev}
            <li className={`${componentCls}__item is-shrink`} tabIndex={0}>
                <span className={`${componentCls}__link`}>
                    <Icon className={`${componentCls}__rapid`} type={'double-left'} />
                    <span className={`${componentCls}__ellipsis`}>
                        •••
                    </span>
                </span>
            </li>
            {renderPageNums}
            <li className={`${componentCls}__item is-shrink`} tabIndex={0}>
                <span className={`${componentCls}__link`}>
                    <Icon className={`${componentCls}__rapid`} type={'double-right'} />
                    <span className={`${componentCls}__ellipsis`}>
                        •••
                    </span>
                </span>
            </li>
            {renderNext}
        </ul>
    );
}

Pagination.propTypes = PaginationProps;
Pagination.defaultProps = PaginationDefaultProps;

export default Pagination;