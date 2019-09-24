import React, { useMemo, useCallback, useRef } from 'react';
import Icon from '../icon';
import Button from '../button';
import { SearchProps, SearchDefaultProps } from "./interface";
import { useContextConf, useClassName, useInputEvents } from 'hooks';
import { isBoolean } from 'utils/common';
import KeyCode from 'utils/keyCode';

function Search(props) {
    const { componentCls } = useContextConf('input');
    const {
        className,
        placeholder,
        disabled,
        defaultValue,
        value,
        size,
        enterButton,
        onSearch,
        ...others
    } = props;

    const { inputEvents, ...domProps } = useInputEvents(others);
    const { onChange, onKeyDown, ...otherEvents } = inputEvents;

    // ---------------------------------- logic code ----------------------------------
    const searchRef = useRef(null);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        'is-disabled': disabled,
        [`${componentCls}--suffix`] : !enterButton,
        [`${componentCls}-group`] : enterButton,
        [`${componentCls}-group--append`] : enterButton,
        [`${componentCls}--search`] : enterButton,
        [`${componentCls}--${size}`] : size,
        [className]: className
    }, [className, componentCls, disabled, size, enterButton]);

    const _inputClassNames = useClassName({
        [`${componentCls}__inner`]: true,
    }, [componentCls]);

    // ---------------------------------- event ----------------------------------
    const onKeydownTrigger = useCallback((e) => {
        if(e.keyCode === KeyCode.ENTER) {
            onSearch(e.target.value, e);
        }
        onKeyDown && onKeyDown(e);
    }, [onSearch]);

    const onSearchTrigger = useCallback((e) => {
        onSearch(searchRef.current.value, e);
    }, [onSearch]);

    // ---------------------------------- render chunk ----------------------------------
    const renderSuffix = useMemo(() => {
        if(enterButton) return null;
        return (
            <span className={`${componentCls}__suffix`}>
                <span className={`${componentCls}__suffix-inner`}>
                    <Icon className={`${componentCls}__icon`} type={'search'} />
                </span>
            </span>
        )
    }, [componentCls, enterButton]);

    const renderAppend = useMemo(() => {
        if(!enterButton) return null;

        return (
            <div className={`${componentCls}-group__append`} onClick={onSearchTrigger}>
                {isBoolean(enterButton)
                    ?
                    <Button type={'primary'} icon='search' />
                    :
                    enterButton
                }
            </div>
        )
    }, [componentCls, enterButton, onSearch])

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...domProps}>
            <input
                ref={searchRef}
                type="text"
                className={_inputClassNames}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                onKeyDown={onKeydownTrigger}
                {...otherEvents}
            />
            {renderSuffix}
            {renderAppend}
        </div>
    )
}

Search.propTypes = SearchProps;
Search.defaultProps = SearchDefaultProps;

export default Search;