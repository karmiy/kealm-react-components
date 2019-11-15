import React from 'react';
import PropTypes from 'prop-types';
import { CommonProps, CommonDefaultProps } from '../trigger/interface';
import { omit } from 'utils/common/object';
import Icon from '../icon';

import { noop } from 'utils/common/base';
const filterMethod = (value, label, inputValue) => label.includes(inputValue);

const VALUE_TYPE = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object, PropTypes.array]);
const VALUE_TYPE_OPTION = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

/* select-props */
export const SelectProps = {
    ...omit(CommonProps, ['trigger']),
    children: PropTypes.node,
    selectorClassName: PropTypes.string,
    selectorStyle: PropTypes.object,
    defaultValue: VALUE_TYPE,
    value: VALUE_TYPE,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    clearable: PropTypes.bool,
    onClear: PropTypes.func,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    collapseTags: PropTypes.bool,
    emptyFilterContent: PropTypes.node,
    emptyContent: PropTypes.node,
    filterable: PropTypes.bool,
    filterMethod: PropTypes.func,
    loading: PropTypes.bool,
    loadingContent: PropTypes.node,
    remote: PropTypes.bool,
    onRemote: PropTypes.func,
    labelInValue: PropTypes.bool,
    maxRows: PropTypes.number,
    virtualScroll: PropTypes.bool,
}

export const SelectDefaultProps = {
    ...omit(CommonDefaultProps, ['trigger']),
    placement: 'bottom-start',
    showArrow: false,
    transitionName: 'km-zoom-top',
    onChange: noop,
    placeholder: '请选择',
    clearable: false,
    onClear: noop,
    disabled: false,
    multiple: false,
    collapseTags: false,
    emptyFilterContent: '无匹配内容',
    emptyContent: '无数据',
    filterable: false,
    filterMethod,
    loading: false,
    loadingContent: <><Icon type={'loading'} /> 加载中</>,
    remote: false,
    onRemote: noop,
    labelInValue: false,
    maxRows: 6,
    virtualScroll: false,
}

/* option-props */
export const OptionProps = {
    className: PropTypes.string,
    value: VALUE_TYPE_OPTION.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export const OptionDefaultProps = {
    disabled: false,
}

/* group-props */
export const GroupProps = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
}

export const GroupDefaultProps = {
}