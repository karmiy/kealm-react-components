import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Transition, CSSTransition } from 'react-transition-group';
import { CollapseProps, CollapseDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';

function Collapse(props) {
    const [show, setShow] = useState(true);
    const { componentCls } = useContextConf('collapse');
    const {
        children,
        className,
        ...others
    } = props;

    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
    });
    React.Children.map(children, (child, index) => {
        //console.log(child);
    })

    return (
        <div role='tablist' className={classNames}>
            {children}
        </div>
    )
}

Collapse.propTypes = CollapseProps;
Collapse.defaultProps = CollapseDefaultProps;

export default Collapse