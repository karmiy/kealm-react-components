import React, { useRef, useCallback } from 'react';
import { SelectProps, SelectDefaultProps } from './interface';
import { useDidMount, useDidUpdate } from 'hooks';
import { mergeStr } from 'utils/common/base';
import { scrollTo } from 'utils/common/scroll';
import { RenderWrapper } from '../../common';

function Select(props) {
    const {
        prefixCls,
        selectedIndex,
        options,
        onSelect,
        type,
        visible,
        hideDisabledOptions,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const rootRef = useRef(null);
    const listRef = useRef(null);

    // ---------------------------------- function ----------------------------------
    const scrollToSelected = useCallback(duration => {
        const index = selectedIndex < 0 ? 0 : selectedIndex;
        const option = listRef.current.children[index];
        const to = option.offsetTop;
        scrollTo(rootRef.current, to, duration);
    }, [selectedIndex]);

    // ---------------------------------- event ----------------------------------
    const onItemClick = useCallback((option, index) => {
        if(option.disabled) return;

        if(index === selectedIndex) return;

        onSelect(option, index, type);
    }, [onSelect, type, selectedIndex]);

    // ---------------------------------- effect ----------------------------------
    useDidMount(() => {
        scrollToSelected(0);
    }, true);

    useDidUpdate(() => {
        scrollToSelected(120);
    }, [selectedIndex], true);

    useDidUpdate(() => {
        // Prevent invalid scrolling when hidden
        visible && scrollToSelected(0);
    }, [visible], true);

    // ---------------------------------- render ----------------------------------
    return (
        <div ref={rootRef} className={`${prefixCls}__select km-scroll-hidden`}>
            <ul ref={listRef} className={`${prefixCls}__list`}>
                {
                    options.map((option, index) => {
                        const className = mergeStr({
                            [`${prefixCls}__item`]: true,
                            'is-selected': index === selectedIndex,
                            'is-disabled': option.disabled,
                        });

                        if(hideDisabledOptions) {
                            return (
                                <RenderWrapper key={option.key} visible={!option.disabled}>
                                    <li  className={className} onClick={() => onItemClick(option, index)}>{option.label}</li>
                                </RenderWrapper>
                            );
                        }
                        return <li key={option.key} className={className} onClick={() => onItemClick(option, index)}>{option.label}</li>
                    })
                }
            </ul>
        </div>
    );
}

Select.propTypes = SelectProps;
Select.defaultProps = SelectDefaultProps;

export default Select;