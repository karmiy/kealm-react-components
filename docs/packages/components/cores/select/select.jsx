import React, { useCallback, useMemo } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { SelectProps, SelectDefaultProps } from './interface';
import Input from '../input';
import Trigger from '../trigger';
import Icon from '../icon';
import { mergeStr } from 'utils/common/base';
import { transChildren } from 'utils/common/react-util';

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
    const [isVisible, visibleChange] = useController(defaultVisible, visible, onVisibleChange);
    const _children = transChildren(children);

    // ---------------------------------- event ----------------------------------
    const onCreate = useCallback(data => {
        // Limit min-width
        const { popper, reference } = data.instance;
        popper.style.minWidth = `${reference.offsetWidth}px`;

        _onCreate(data);
    }, [_onCreate]);

    // ---------------------------------- render chunk ----------------------------------

    const renderSuffix = useMemo(() => {
        const suffixClassName = mergeStr({
            [`${componentCls}__caret`]: true,
            'is-reverse': isVisible,
        })

        return <Icon type={'up'} className={suffixClassName} />;
    }, [componentCls, isVisible]);

    const renderDropdown = (
        <>
            <div className={`${componentCls}-dropdown__wrap`}>
                <ul className={`${componentCls}-dropdown__list`}>
                    {children}
                </ul>
            </div>
            <div className="popper__arrow" style={{left: '35px'}} />
        </>
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
            onVisibleChange={visibleChange}
            onCreate={onCreate}
            {...others}
        >
            <div className={componentCls}>
                <Input placeholder={'请选择'} suffix={renderSuffix} readOnly />
            </div>
        </Trigger>
    );
}

Select.propTypes = SelectProps;
Select.defaultProps = SelectDefaultProps;

export default Select;
