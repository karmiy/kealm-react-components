import React, { useMemo, createContext } from 'react';
import { RowProps, RowDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';

export const GridContext = createContext();

function Row(props) {
    const { componentCls } = useContextConf('row');

    const {
        children,
        className,
        style,
        gutter,
        type,
        justify,
        align,
        ...others
    } = props;

    // Col spacing
    const gap = useMemo(() => {
        return gutter ? parseFloat(gutter) / 2 : 0;
    }, [gutter])

    // ---------------------------------- class ----------------------------------
    // root-className
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${type}`]: type,
        [`is-justify-${justify}`]: justify,
        [`is-align-${align}`]: align,
        [className]: className,
    }, [className, type, justify, align]);

    // ---------------------------------- style ----------------------------------
    const styles = useMemo(() => {
        return {
            marginLeft: gap ? `-${gap}px` : null,
            marginRight: gap ? `-${gap}px` : null,
            ...style,
        }
    }, [style, gap]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} style={styles} {...others}>
            <GridContext.Provider value={gap}>
                {children}
            </GridContext.Provider>
        </div>
    )
}
Row.propTypes = RowProps;
Row.defaultProps = RowDefaultProps;

export default Row;