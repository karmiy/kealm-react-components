import React, { useRef, useCallback } from 'react';
import { SelectProps, SelectDefaultProps } from './interface';
import { useDidMount, useDidUpdate } from 'hooks';
import { mergeStr } from 'utils/common/base';
import { scrollTo } from 'utils/common/scroll';

function Select(props) {
    const {
        prefix,
        selectedIndex,
        options,
        onSelect: select,
        type,
        visible,
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
    const onSelect = useCallback((option, index, type) => {
        if(option.disabled) return;

        select(option, index, type);
    }, [select]);

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
        <div ref={rootRef} className={`${prefix}__select km-scroll-hidden`}>
            <ul ref={listRef} className={`${prefix}__list`}>
                {
                    options.map((option, index) => {
                        const className = mergeStr({
                            [`${prefix}__item`]: true,
                            'is-selected': index === selectedIndex,
                        })
                        return <li key={option.key} className={className} onClick={() => onSelect(option, index, type)}>{option.value}</li>
                    })
                }
            </ul>
        </div>
    );
}

Select.propTypes = SelectProps;
Select.defaultProps = SelectDefaultProps;

export default Select;