import React, { Children, cloneElement, useCallback, useMemo, createContext } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { SelectProps, SelectDefaultProps } from './interface';
import Input from '../input';
import Trigger from '../trigger';
import Icon from '../icon';
import { mergeStr } from 'utils/common/base';

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
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-dropdown`]: true,
        'km-popper': true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- logic code ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange);
    const [selectedValue, setSelectedValue] = useController(defaultValue, value, onChange, '');

    // ---------------------------------- function ----------------------------------
    const selectedLabel = () => {
        const selectedOption = Children.toArray(children).find(child => child.props.value === selectedValue);
        return selectedOption ? selectedOption.props.children : '';
    }

    // ---------------------------------- event ----------------------------------
    const onCreate = useCallback(data => {
        // Limit min-width
        const { popper, reference } = data.instance;
        popper.style.minWidth = `${reference.offsetWidth}px`;

        _onCreate(data);
    }, [_onCreate]);

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

        return <Icon type={'up'} className={suffixClassName} />;
    }, [componentCls, isVisible]);

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
            <div className={componentCls}>
                <Input value={selectedLabel()} placeholder={'请选择'} suffix={renderSuffix} readOnly />
            </div>
        </Trigger>
    );
}

Select.propTypes = SelectProps;
Select.defaultProps = SelectDefaultProps;

export default Select;
