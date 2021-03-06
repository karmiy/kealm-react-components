import React, { useState, useMemo, useCallback } from 'react';
import { useContextConf, useClassName, useController, useDidUpdate, useStateStore } from 'hooks';
import { PaginationProps, PaginationDefaultProps } from './interface';
import Icon from '../icon';
import Select from '../select';
import Input from '../input';
import { mergeStr, isInteger, noop } from 'utils/common/base';

const { Option } = Select;

const LEAST_COUNT = 5,
    SCOPE = (LEAST_COUNT - 1) / 2;

const ARROW_OPTIONS = {
    left: 'prev',
    right: 'next',
}

function createNumbers(num = 0) {
    const arr = [];
    while (num > 0) {
        arr.unshift(num--);
    }
    return arr;
}

function isWithin(num, current, max, scope = SCOPE) {
    return Math.abs(num - current) <= scope
        || (current <= scope && num <= LEAST_COUNT)
        || num === 1
        || num === max
        || (current >= max - scope && num >= max - scope * 2);
}

function Pagination(props) {
    const {componentCls} = useContextConf('pagination');
    const {
        className,
        defaultCurrent,
        current,
        onChange,
        defaultPageSize,
        pageSize: _pageSize,
        pageSizeOptions,
        onPageSizeChange,
        total,
        disabled,
        showSizeChanger,
        showQuickJumper,
        simple,
        showTotal,
        itemRender,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [pageNo ,setPageNo] = useController(defaultCurrent, current, onChange, 1, disabled);
    const [pageSize, setPageSize] = useController(defaultPageSize, _pageSize, onPageSizeChange, 10, disabled);
    const minPageNo = 1, maxPageNo = Math.ceil(total / pageSize);
    const [prevDisabled, setPrevDisabled] = useState(pageNo <= 1);
    const [nextDisabled, setNextDisabled] = useState(pageNo >= maxPageNo);
    const [jumpValue, setJumpValue] = useState('');
    const [simpleValue, setSimpleValue] = useState(pageNo);
    const pageNumbers = createNumbers(maxPageNo);
    const isMore = maxPageNo >= 10;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
        'is-disabled': disabled,
        'is-simple': simple,
    }, [className, componentCls, disabled, simple]);

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

    useDidUpdate(() => {
        setPageNo(num => Math.min(maxPageNo, num));
    }, [pageSize], true);

    useDidUpdate(() => {
        simple && setSimpleValue(pageNo);
    }, [pageNo], true);

    // ---------------------------------- function ----------------------------------
    const getArrow = useCallback((icon, className, onClick) => {
        const originalElement = (
            <span className={`${componentCls}__link`}>
                {itemRender(pageNo, ARROW_OPTIONS[icon], <Icon type={icon} />)}
            </span>
        )
        return (
            <li className={className} tabIndex={0} onClick={onClick}>
                {itemRender(pageNo, ARROW_OPTIONS[icon], originalElement)}
            </li>
        )
    }, [componentCls, itemRender, pageNo]);

    const getEllipsis = useCallback((icon, title, step) => {
        const onClick = () => setPageNo(n => Math.min(Math.max(minPageNo, n + step), maxPageNo));
        return (
            <li key={icon} className={`${componentCls}__item is-shrink`} tabIndex={0} onClick={onClick}>
                <span title={title} className={`${componentCls}__link`}>
                    <Icon className={`${componentCls}__rapid`} type={icon} />
                    <span className={`${componentCls}__ellipsis`}>
                        •••
                    </span>
                </span>
            </li>
        )
    }, [componentCls, maxPageNo]);

    // ---------------------------------- event ----------------------------------
    const onPrevClick = useCallback(() => {
        if(pageNo <= minPageNo || prevDisabled)
            return;

        setPageNo(n => --n);
    }, [pageNo, prevDisabled]);

    const onNextClick = useCallback(() => {
        if(pageNo >= maxPageNo || nextDisabled)
            return;

        setPageNo(n => ++n);
    }, [pageNo, maxPageNo, nextDisabled]);

    const onQuickJumperPressEnter = useCallback(value => {
        setJumpValue('');
        if(isInteger(parseFloat(value))) {
            setPageNo(Math.max(Math.min(parseInt(value), maxPageNo), minPageNo));
        }
    }, [maxPageNo]);

    // Limit input rule: integer or empty str
    const onSimpleInputChange = useCallback(e => {
        const value = e.target.value;
        if(Number.isNaN(Number(value))) return;
        if(value.includes('.')) return;

        setSimpleValue(value);
    }, []);

    const onSimplePressEnter = useCallback(value => {
        if(value === '') {
            setSimpleValue(pageNo);
            return;
        }
        const nextPageNo = Math.max(Math.min(parseInt(value || pageNo), maxPageNo), minPageNo);
        if(nextPageNo === pageNo) {
            setSimpleValue(pageNo);
            return;
        }
        setPageNo(nextPageNo);
    }, [maxPageNo, pageNo]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderEllipsisLeft = useMemo(() => getEllipsis('double-left', '前进5页', -5), [getEllipsis]);

    const renderEllipsisRight = useMemo(() => getEllipsis('double-right', '后退5页', 5), [getEllipsis]);

    const renderSizeChanger = useMemo(() => {
        if(!showSizeChanger || simple) return null;

        return (
            <div className={`${componentCls}__size-changer`}>
                <Select value={pageSize} onChange={size => setPageSize(size)} disabled={disabled}>
                    {pageSizeOptions.map(option => {
                        return <Option key={option} value={option} label={`${option} 条/页`}>{option} 条/页</Option>;
                    })}
                </Select>
            </div>
        )
    }, [simple, showSizeChanger, componentCls, pageSize, disabled, pageSizeOptions]);

    const renderQuickJumper = useMemo(() => {
        if(!showQuickJumper || simple) return null;

        return (
            <div className={`${componentCls}__quick-jumper`}>
                跳至
                <Input
                    className={`${componentCls}__quick-input`}
                    value={jumpValue}
                    onChange={e => setJumpValue(e.target.value)}
                    onPressEnter={onQuickJumperPressEnter}
                    disabled={disabled}
                />
                页
            </div>
        )
    }, [simple, showQuickJumper, componentCls, disabled, jumpValue, onQuickJumperPressEnter]);

    // ---------------------------------- render chunk ----------------------------------
    const renderTotal = useMemo(() => {
        if(showTotal === noop) return null;

        return (
            <li className={`${componentCls}__total`}>
                {showTotal(total, [(pageNo - 1) * pageSize + 1, pageNo * pageSize])}
            </li>
        )
    }, [componentCls, showTotal, pageNo, pageSize]);

    const renderPrev = useMemo(
        () => getArrow('left', prevClassNames, onPrevClick),
        [getArrow, prevClassNames, onPrevClick]
    );

    const renderNext = useMemo(
        () => getArrow('right', nextClassNames, onNextClick),
        [getArrow, nextClassNames, onNextClick]
    );

    const renderSimplePager = useMemo(() => {
        if(!simple) return null;

        return (
            <li className={`${componentCls}__simple-pager`}>
                <Input
                    className={`${componentCls}__simple-input`}
                    value={`${simpleValue}`}
                    onChange={onSimpleInputChange}
                    onPressEnter={onSimplePressEnter}
                    size={'small'}
                    disabled={disabled}
                />
                <span className={`${componentCls}__slash`}>/</span>
                {maxPageNo}
            </li>
        )
    }, [simple, componentCls, maxPageNo, simpleValue, disabled, onSimplePressEnter]);

    const renderPageNums = useMemo(() => {
        if(simple) return null;

        const items = pageNumbers.map(num => {
            const isActive = num === pageNo;
            const itemClassNames = mergeStr({
                [`${componentCls}__item`]: true,
                'is-active': isActive,
            });

            if(isMore && !isWithin(num, pageNo, pageNumbers.length)) return null;

            return (
                <li key={num} className={itemClassNames} tabIndex={0} onClick={() => setPageNo(num)}>
                    <span className={`${componentCls}__link`}>
                        {itemRender(pageNo, 'page', num)}
                    </span>
                </li>
            );
        });

        // append ellipsis-left
        if(isMore && pageNo - SCOPE - minPageNo > 1) {
            items.splice(1, 0, renderEllipsisLeft);
        }

        // append ellipsis-right
        if(isMore && maxPageNo - (pageNo + SCOPE) > 1) {
            items.splice(-1, 0, renderEllipsisRight);
        }

        return items;
    }, [simple, maxPageNo, componentCls, pageNo, isMore, renderEllipsisLeft, renderEllipsisRight]);

    const renderOptions = useMemo(() => {
        if(!renderSizeChanger && !renderQuickJumper) return null;

        return (
            <li className={`${componentCls}__options`}>
                {renderSizeChanger}
                {renderQuickJumper}
            </li>
        )
    }, [componentCls, renderSizeChanger, renderQuickJumper]);

    // ---------------------------------- render ----------------------------------
    // if(!total) return null;

    return (
        <ul className={classNames} {...others}>
            {renderTotal}
            {renderPrev}
            {renderSimplePager}
            {renderPageNums}
            {renderNext}
            {renderOptions}
        </ul>
    );
}

Pagination.propTypes = PaginationProps;
Pagination.defaultProps = PaginationDefaultProps;

export default Pagination;