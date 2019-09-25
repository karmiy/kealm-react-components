import React, { useMemo } from 'react';
import { CardGridProps, CardGridDefaultProps } from './interface';
import { useContextConf, useClassName } from 'hooks';

function Grid(props) {
    const {
        className,
        style,
        children,
        hoverable,
        ...others
    } = props;
    const { componentCls } = useContextConf(`card-grid`);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}`]: true,
        [`${componentCls}-hoverable`]: hoverable,
        [className]: className,
    }, [className, componentCls, hoverable]);


    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} style={style} {...others}>
            {children}
        </div>
    );
}

Grid.propTypes = CardGridProps;
Grid.defaultProps = CardGridDefaultProps;

export default Grid;