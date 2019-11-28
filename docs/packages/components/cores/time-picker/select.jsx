import React from 'react';
import { SelectProps, SelectDefaultProps } from './interface';

function Select(props) {
    const {
        prefix,
        value,
        onChange,
        disabled,
        options,
    } = props;

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefix}__select km-scroll-hidden`}>
            <ul className={`${prefix}__list`}>
                {
                    options.map((option) => {
                        return <li key={option} className={`${prefix}__item`}>{`${option}`.padStart(2, '0')}</li>
                    })
                }
            </ul>
        </div>
    );
}

Select.propTypes = SelectProps;
Select.defaultProps = SelectDefaultProps;

export default Select;