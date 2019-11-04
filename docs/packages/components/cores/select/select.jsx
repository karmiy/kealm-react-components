import React, { memo, Children, useCallback, useMemo, createContext } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { SelectProps, SelectDefaultProps } from './interface';
import Input from '../input';
import Trigger from '../trigger';
import Icon from '../icon';
import Tag from '../tag';
import { RenderWrapper } from '../../common';
import { mergeStr, isEmpty, isArray } from 'utils/common/base';

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
        multiple,
        ...others
    } = props;

    // ---------------------------------- logic code ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange);
    const [selectedValue, setSelectedValue, setInnerValue] = useController(defaultValue, value, onChange, multiple ? [] : '');
    const isClearable = clearable && !isEmpty(selectedValue) && selectedValue !== '';

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-dropdown`]: true,
        'km-popper': true,
        [className]: className,
    }, [className, componentCls]);

    const inputClassNames = useClassName({
        [componentCls]: true,
        'is-clearable': isClearable,
    }, [componentCls, isClearable]);

    // ---------------------------------- logic code ----------------------------------
    if(multiple && !isArray(selectedValue)) {
        throw new Error('The value need to be an array when select component multiple');
    }

    const selectedLabel = useMemo(() => {
        const selectedOption = Children.toArray(children).find(child => child.props.value === selectedValue);
        return selectedOption ? selectedOption.props.children : '';
    }, [children, selectedValue]);

    // ---------------------------------- event ----------------------------------
    const onCreate = useCallback(data => {
        // Limit min-width
        const { popper, reference } = data.instance;
        popper.style.minWidth = `${reference.offsetWidth}px`;

        _onCreate(data);
    }, [_onCreate]);

    const onClear = useCallback(e => {
        e.stopPropagation();

        setInnerValue('');
        clear(e);
    }, [clear])

    // ---------------------------------- context.provider ----------------------------------
    const provider = {
        selectedValue,
        onSelect: (value) => {
            setSelectedValue(value);
            setIsVisible(false);
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
                <RenderWrapper visible={multiple} unmountOnExit>
                    <div className={`${componentCls}__tags`} style={{width: '100%', maxWidth: '208px'}}>
                        <Tag size={'small'} type={'info'} closable>Karmiy</Tag>
                        <Tag size={'small'} type={'info'} closable>Karmiy</Tag>
                        {/*<Tag size={'small'} type={'info'} closable>Karmiy</Tag>
                        <Tag size={'small'} type={'info'} closable>Karmiy</Tag>
                        <Tag size={'small'} type={'info'} closable>Karmiy</Tag>
                        <Tag size={'small'} type={'info'} closable>Karmiy</Tag>*/}
                    </div>
                </RenderWrapper>
                <Input value={selectedLabel} placeholder={placeholder} suffix={renderSuffix} readOnly />
            </div>
        </Trigger>
    );
}

Select.propTypes = SelectProps;
Select.defaultProps = SelectDefaultProps;

export default memo(Select);
