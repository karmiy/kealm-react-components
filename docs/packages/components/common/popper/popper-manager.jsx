import React, { Component, Children, createRef } from 'react';
import ReactDOM from 'react-dom';
import { validateType } from 'utils/common/react-util';
import Popper from './popper';
import Reference from './reference';

class PopperManager extends Component {
    popperRef = createRef();
    reference = createRef();

    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this.popperRef.current));
    }
    render() {
        return Children.map(this.props.children, child => {
            if(validateType(child, Popper)) {
                return React.cloneElement(child, {
                    ref: this.popperRef,
                });
            }
            if(validateType(child, Reference)) {
                return React.cloneElement(child, {
                    ref: this.reference,
                });
            }
            return null;
        });
    }
}

export default PopperManager;