import React, { memo, Children, useState, useCallback, useMemo, createContext, useRef } from 'react';
import { useContextConf, useClassName, useController, useDidUpdate, useSyncOnce } from 'hooks';
import { SelectProps, SelectDefaultProps } from './interface';
import Input from '../input';
import Trigger from '../trigger';
import Icon from '../icon';
import Tag from '../tag';
import Option from './option';
import Group from './group';
import { RenderWrapper } from '../../common';
import { mergeStr, isEmpty, isArray } from 'utils/common/base';
import { validateChildrenType, validateType } from 'utils/common/react-util';

const emptyOption = {
    value: '',
    label: '',
};
const emptyArr = [];

/**
 * Get selected options
 * @param children
 * @param selectedValues
 * @returns {[]}
 */
const getSelectedOptions = (children, selectedValues) => {
    const selectedArr = [], _selectedValues = [...selectedValues];
    for(let i = 0, len = children.length; i < len; i++) {
        const { value, label } = children[i].props;
        const index = _selectedValues.indexOf(value);

        if(index !== -1) {
            selectedArr.push({
                value,
                label,
                order: index,
            });
            _selectedValues.splice(index, 1);
        }
        if(!_selectedValues.length)
            break;
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
    const isClearable = clearable && !isEmpty(selectedValue) && selectedValue !== '';
    const tagsRef = useRef(null);
    const [inputStyle, setInputStyle] = useState();
    const _placeholder = multiple && selectedValue.length ? '' : placeholder;

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
            const selectedOption = options.find(child => child.props.value === selectedValue);
            return selectedOption ?
                {
                    value: selectedOption.props.value,
                    label: selectedOption.props.label,
                }
                :
                emptyOption;
        }
    }, [multiple, children, selectedValue]);

    // When multi-select, the input height needs to be adjusted
    useDidUpdate(() => {
        if(!multiple || collapseTags) return;

        setInputStyle({
            height: selectedValue.length ? `${tagsRef.current.offsetHeight + 4}px` : '',
        });
    }, [selectedValue]);

    // ---------------------------------- event ----------------------------------
    const onCreate = useCallback(data => {
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

        setInnerValue('');
        clear(e);
    }, [clear]);

    const onSelect = useCallback((value, toSelect = true) => {
        if(multiple) {
            if(!toSelect) {
                // remove
                selectedValue.splice(selectedValue.indexOf(value), 1);
                setSelectedValue([...selectedValue]);
            }else {
                // add
                setSelectedValue([...selectedValue, value]);
            }
        }else {
            setSelectedValue(value);
            !multiple && setIsVisible(false);
        }
    }, [multiple, selectedValue]);

    const onClose = useCallback((e, value) => {
        e.stopPropagation();

        onSelect(value, false);
    }, [onSelect]);

    // ---------------------------------- context.provider ----------------------------------
    const provider = {
        selectedValue,
        multiple,
        onSelect,
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

    const renderDropdown = (
        <SelectContext.Provider value={provider}>
            <div className={`${componentCls}-dropdown__wrap`}>
                <ul className={`${componentCls}-dropdown__list`}>
                    {children}
                </ul>
            </div>
            <div className="popper__arrow" style={{left: '35px'}} />
            {/*<div className={`${componentCls}-dropdown__empty`}>
                无匹配内容
            </div>*/}
        </SelectContext.Provider>
    );

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
                                onClose={e => onClose(e, selectedOptions[0].value)}
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
                        onClose={e => onClose(e, option.value)}
                    >
                        {option.label}
                    </Tag>)}
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
            <div className={inputClassNames}>
                {renderTags}
                <Input
                    value={multiple ? '' : selectedOptions.label}
                    inputStyle={inputStyle}
                    placeholder={_placeholder}
                    disabled={disabled}
                    suffix={renderSuffix}
                    readOnly />
            </div>
        </Trigger>
    );
}

Select.propTypes = SelectProps;
Select.defaultProps = SelectDefaultProps;

export default memo(Select);
