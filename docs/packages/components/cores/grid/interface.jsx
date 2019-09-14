import PropTypes from 'prop-types';

const T_Str_Num = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const T_Str_Num_Obj = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]);

const commonProps = {
    className: PropTypes.string,
}

const commonDefaultProps = {
}

/* row-props */
export const RowProps = {
    gutter: T_Str_Num,
    type: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
    ...commonProps,
}

export const RowDefaultProps = {
    ...commonDefaultProps,
}

/* col-props */
export const ColProps = {
    span: T_Str_Num,
    offset: T_Str_Num,
    pull: T_Str_Num,
    push: T_Str_Num,
    order: T_Str_Num,
    xs: T_Str_Num_Obj,
    sm: T_Str_Num_Obj,
    md: T_Str_Num_Obj,
    lg: T_Str_Num_Obj,
    xl: T_Str_Num_Obj,
    ...commonProps,
}

export const ColDefaultProps = {
    ...commonDefaultProps,
}