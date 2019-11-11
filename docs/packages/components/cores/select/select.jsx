import React, { Children, useState, useCallback, useMemo, createContext, useRef } from 'react';
import { useContextConf, useClassName, useController, useDidUpdate, useSyncOnce } from 'hooks';
import { SelectProps, SelectDefaultProps } from './interface';
import Input from '../input';
import Trigger from '../trigger';
import Icon from '../icon';
import Tag from '../tag';
import Option from './option';
import Group from './group';
import { RenderWrapper } from '../../common';
import { mergeStr, isEmpty, isArray, isObject } from 'utils/common/base';
import { validateChildrenType, validateType } from 'utils/common/react-util';

const emptyOption = {
    value: '',
    label: '',
};
const emptyArr = [];

const emptyObj = Object.create(null);

/**
 * Find index of selected option in all options
 * @param options
 * @param selectedItem
 * @returns {number}
 */
const findSelectedIndex = (options, selectedItem) => {
    return options.findIndex(item => {
        const optionValue = isObject(item) ? item.value : item,
            selectedValue = isObject(selectedItem) ? selectedItem.value : selectedItem;
        return optionValue === selectedValue;
    });
}

/**
 * Get value of Value Props
 * @param item
 * @returns {*}
 */
const getSelectedValue = item => {
    return isObject(item) ? item.value : item;
}

/**
 * Create an option
 * @param item: object like {value: *, label: *} or value
 * @returns {{value: *, label: *}}
 */
const createOption = item => {
    return isObject(item) ? item : { value: item, label: item };
}

/**
 * Get selected options
 * @param children
 * @param selectedValues
 * @returns {array}
 */
const getSelectedOptions = (children, selectedValues) => {
    const selectedArr = [], _selectedValues = [...selectedValues];
    for(let i = 0, len = children.length; i < len; i++) {
        const { value, label } = children[i].props;
        const index = findSelectedIndex(selectedValues, value),
            _index = findSelectedIndex(_selectedValues, value);

        if(index !== -1) {
            selectedArr.push({
                value,
                label,
                order: index,
            });
            _selectedValues.splice(_index, 1);
        }
        if(!_selectedValues.length)
            break;
    }
    // Custom data, simply create a node with the same value as the label
    while(_selectedValues.length) {
        const _value = _selectedValues[0];
        const index = findSelectedIndex(selectedValues, _value);
        selectedArr.push({
            ...createOption(_value),
            order: index,
        });
        _selectedValues.splice(0, 1);
    }

    selectedArr.sort((a, b) => a.order - b.order);
    return selectedArr;
}

/**
 * Get options without group
 * @param children
 * @returns {node}
 */
const getOptionsChildren = children => {
    if(!Children.count(children)) return children;

    const casualOpt = Children.toArray(children)[0];

    if(validateType(casualOpt, Group)) {
        return Children.map(children, group => {
            return group.props.children;
        });
    }
    return children;
}

export const SelectContext = createContext();

function Select(props) {
    const { componentCls } = useContextConf('select');
    const {
        children,
        className,
        onCreate: _onCreate,
        defaultValue,
        value,
        onChange,
        defaultVisible,
        visible,
        onVisibleChange,
        placeholder,
        clearable,
        onClear: clear,
        disabled,
        multiple,
        collapseTags,
        emptyFilterContent,
        emptyContent,
        filterable,
        filterMethod,
        loading,
        loadingContent,
        remote,
        onRemote,
        labelInValue,
        ...others
    } = props;

    // ---------------------------------- logic code ----------------------------------
    // Verify children type
    useSyncOnce(() => {
        validateChildrenType(children, [Group, Option]);
    });

    // ---------------------------------- logic code ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange);
    const [selectedValue, setSelectedValue, setInnerValue] = useController(defaultValue, value, onChange, multiple ? emptyArr : '');
    const isClearable = clearable && (multiple ? !!selectedValue.length : !isEmpty(selectedValue) && selectedValue !== '');
    const selectRef = useRef(null);
    const tagsRef = useRef(null);
    const popperJsInstanceRef = useRef(null);
    const [inputStyle, setInputStyle] = useState();
    const [inputValue, setInputValue] = useState('');
    const isEditableInput = filterable || remote;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-dropdown`]: true,
        'km-popper': true,
        'is-multiple': multiple,
        [className]: className,
    }, [className, componentCls, multiple]);

    const inputClassNames = useClassName({
        [componentCls]: true,
        'is-clearable': isClearable,
    }, [componentCls, isClearable]);

    // ---------------------------------- logic code ----------------------------------
    if(multiple && !isArray(selectedValue)) {
        throw new Error('The value need to be an array when select component multiple');
    }

    // Get label of single option which is selected
    const selectedOptions = useMemo(() => {
        const options = Children.toArray(getOptionsChildren(children));
        if(multiple) {
            return getSelectedOptions(options, selectedValue);
        }else {
            const selectedOption = options.find(child => child.props.value === getSelectedValue(selectedValue));
            return selectedOption ?
                {
                    value: selectedOption.props.value,
                    label: selectedOption.props.label,
                }
                :
                createOption(selectedValue);
        }
    }, [multiple, children, selectedValue]);

    const inputDisplayValue = useMemo(() => {
        if(isEditableInput) {
            // Show inputValue when popper open
            if(isVisible) return inputValue;

            return multiple ? '' : selectedOptions.label;
        }

        return multiple ? '' : selectedOptions.label;
    }, [isEditableInput, remote, multiple, selectedOptions, isVisible, inputValue]);

    const _placeholder = useMemo(() => {
        if(isEditableInput) {
            if(isVisible) {
                if(multiple) {
                    return selectedOptions.length ?
                        `${selectedOptions[0].label} +${selectedOptions.length}`
                        :
                        placeholder;
                }else {
                    return selectedOptions.label || placeholder;
                }
            }
            return multiple && selectedValue.length ? '' : placeholder;
        }

        return multiple && selectedValue.length ? '' : placeholder;
    }, [isEditableInput, remote, multiple, selectedValue, placeholder, isVisible]);

    const filterChildrenCount = filterable ?
        Children.count(Children.toArray(getOptionsChildren(children))
            .filter(child => filterMethod(child.props.value, child.props.label, inputValue)))
        :
        Children.count(children);

    const readonly = !(isEditableInput && isVisible);

    // ---------------------------------- function ----------------------------------
    const scheduleUpdatePosition = useCallback(() => {
        if(!isVisible) return;

        const instance = popperJsInstanceRef.current;
        instance && instance.scheduleUpdate();
    }, [isVisible]);

    // ---------------------------------- effect ----------------------------------
    // When multi-select, the input height needs to be adjusted
    useDidUpdate(() => {
        if(!multiple || collapseTags) return;

        setInputStyle({
            height: selectedValue.length ? `${tagsRef.current.offsetHeight + 4}px` : '',
        });

        // Adjust the position of popper
        scheduleUpdatePosition();
    }, [selectedValue]);

    // Clear inputValue when popper open
    useDidUpdate(() => {
        if(isEditableInput && isVisible)
            setInputValue('');
    }, [isVisible]);

    // Show or hidden tags when is filterable
    useDidUpdate(() => {
        if(multiple && isEditableInput) {
            tagsRef.current.style.zIndex = isVisible ? '-1' : '';
        }
    }, [isVisible], true);

    // Component is multiple and filterable, focus input when it need to show popper
    useDidUpdate(() => {
        if(multiple && isEditableInput && isVisible) {
            selectRef.current.querySelector('input').focus();
        }
    }, [isVisible]);

    // Adjust popper position when filter children count changes or options changes
    useDidUpdate(() => {
        scheduleUpdatePosition();
    }, [children, filterChildrenCount, Children.count(children)], true);

    // ---------------------------------- event ----------------------------------
    const onCreate = useCallback(data => {
        popperJsInstanceRef.current = data.instance;
        // Limit min-width for dropdown
        const { popper, reference } = data.instance;
        popper.style.minWidth = `${reference.offsetWidth}px`;

        // Limit max-with for multiple tags
        if(multiple) {
            tagsRef.current.style.width = '100%';
            tagsRef.current.style.maxWidth = `${reference.offsetWidth - 32}px`;
        }

        _onCreate(data);
    }, [_onCreate, multiple]);

    const onClear = useCallback(e => {
        e.stopPropagation();

        setInnerValue(multiple ? emptyArr : '');
        clear(e);
    }, [clear, multiple]);

    const onSelect = useCallback((value, toSelect = true) => {
        if(multiple) {
            if(!toSelect) {
                // remove
                const removeIndex = findSelectedIndex(selectedValue, value);
                if(removeIndex === -1) return;

                selectedValue.splice(removeIndex, 1);
                setSelectedValue([...selectedValue]);
            } else {
                // add
                setSelectedValue([...selectedValue, value]);
            }
        } else {
            setSelectedValue(value);
            !multiple && setIsVisible(false);
        }
    }, [multiple, selectedValue]);

    const onClose = useCallback((e, option) => {
        e.stopPropagation();

        onSelect(labelInValue ? option : option.value, false);
    }, [onSelect, labelInValue]);

    const onInputChange = useCallback(e => {
        setInputValue(e.target.value);

        remote && onRemote(e.target.value);
    }, [remote, onRemote]);

    // ---------------------------------- context.provider ----------------------------------
    const provider = {
        selectedValue,
        multiple,
        onSelect,
        filterable,
        filterMethod,
        inputValue,
        labelInValue,
    }

    // ---------------------------------- render chunk ----------------------------------
    const renderSuffix = useMemo(() => {
        const suffixClassName = mergeStr({
            [`${componentCls}__caret`]: true,
            'is-reverse': isVisible,
        })

        return (
            <div>
                <Icon type={'up'} className={suffixClassName} />
                <RenderWrapper visible={isClearable} unmountOnExit>
                    <Icon type={'close-circle'} className={`${componentCls}__clear`} onClick={onClear} />
                </RenderWrapper>
            </div>
        );
    }, [componentCls, isVisible, isClearable, onClear]);

    const renderDropdown = (() => {
        let dropdownContent = null;
        if(loading) {
            // Loading content
            dropdownContent = (
                <div className={`${componentCls}-dropdown__empty`}>
                    {loadingContent}
                </div>
            );
        } else {
            if(Children.count(children)) {
                // Content when is filterable
                dropdownContent = (
                    filterChildrenCount ?
                        <div className={`${componentCls}-dropdown__wrap`}>
                            <ul className={`${componentCls}-dropdown__list`}>
                                {children}
                            </ul>
                        </div>
                        :
                        <div className={`${componentCls}-dropdown__empty`}>
                            {emptyFilterContent}
                        </div>
                );
            } else {
                // Empty content
                dropdownContent = (
                    <div className={`${componentCls}-dropdown__empty`}>
                        {emptyContent}
                    </div>
                );
            }
        }
        return (
            <SelectContext.Provider value={provider}>
                {dropdownContent}
                <div className="popper__arrow" style={{left: '35px'}} />
            </SelectContext.Provider>
        )
    })();

    const renderTags = useMemo(() => {
        if(!multiple) return null;

        if(collapseTags) {
            return (
                <div ref={tagsRef} className={`${componentCls}__tags`}>
                    {selectedOptions.length ?
                        <>
                            <Tag
                                size={'small'}
                                type={'info'}
                                closable
                                onClose={e => onClose(e, selectedOptions[0])}
                            >
                                {selectedOptions[0].label}
                            </Tag>
                            <Tag
                                size={'small'}
                                type={'info'}
                            >+{selectedOptions.length}</Tag>
                        </>
                        :
                        null
                    }
                </div>
            )
        }

        return (
            <div ref={tagsRef} className={`${componentCls}__tags`}>
                {selectedOptions.map(option =>
                    <Tag
                        key={option.value}
                        size={'small'}
                        type={'info'}
                        closable
                        onClose={e => onClose(e, option)}
                    >
                        {option.label}
                    </Tag>
                )}
            </div>
        )
    }, [multiple, collapseTags, componentCls, selectedOptions, onClose]);

    // ---------------------------------- render ----------------------------------
    return (
        <Trigger
            trigger={'manual'}
            disabled={disabled}
            popup={renderDropdown}
            className={classNames}
            modifiers={{
                computeStyle: {
                    gpuAcceleration: false,
                }
            }}
            visible={isVisible}
            onVisibleChange={setIsVisible}
            onCreate={onCreate}
            {...others}
        >
            <div className={inputClassNames} ref={selectRef}>
                {renderTags}
                <Input
                    value={inputDisplayValue}
                    onChange={onInputChange}
                    inputStyle={inputStyle}
                    placeholder={_placeholder}
                    disabled={disabled}
                    suffix={renderSuffix}
                    spellCheck={false}
                    readOnly={readonly} />
            </div>
        </Trigger>
    );
}

Select.propTypes = SelectProps;
Select.defaultProps = SelectDefaultProps;

export default Select;
