import React, { memo, Children, useState, useCallback, useMemo, createContext, useRef } from 'react';
import { useContextConf, useClassName, useController, useDidUpdate } from 'hooks';
import { SelectProps, SelectDefaultProps } from './interface';
import Input from '../input';
import Trigger from '../trigger';
import Icon from '../icon';
import Tag from '../tag';
import { RenderWrapper } from '../../common';
import { mergeStr, isEmpty, isArray } from 'utils/common/base';

const emptyOption = {
    props: {
        value: '',
        children: '',
    },
};
const emytyArr = [];

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
        ...others
    } = props;

    // ---------------------------------- logic code ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange);
    const [selectedValue, setSelectedValue, setInnerValue] = useController(defaultValue, value, onChange, multiple ? emytyArr : '');
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
        if(multiple) {
            return Children.toArray(children).filter(child => selectedValue.includes(child.props.value));
        }else {
            const selectedOption = Children.toArray(children).find(child => child.props.value === selectedValue);
            return selectedOption || emptyOption;
        }
    }, [multiple, children, selectedValue]);

    useDidUpdate(() => {
        if(!multiple) return;

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
    }, [clear])

    // ---------------------------------- context.provider ----------------------------------
    const provider = {
        selectedValue,
        multiple,
        onSelect: (value, toSelect = true) => {
            if(multiple) {
                if(!toSelect) {
                    selectedValue.splice(selectedValue.indexOf(value), 1);
                    setSelectedValue([...selectedValue]);
                }else {
                    setSelectedValue([...selectedValue, value]);
                }
            }else {
                setSelectedValue(value);
                !multiple && setIsVisible(false);
            }
        },
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
        </SelectContext.Provider>
    )

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
                {
                    multiple &&
                    <div ref={tagsRef} className={`${componentCls}__tags`}>
                        {selectedOptions.map(option =>
                            <Tag key={option.props.value} size={'small'} type={'info'} closable>{option.props.children}</Tag>)}
                    </div>
                }
                <Input
                    value={multiple ? '' : selectedOptions.props.children}
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
