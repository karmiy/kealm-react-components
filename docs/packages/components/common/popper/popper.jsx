import React, { Component } from 'react';
import DomWrapper from '../domWrapper';
import PopperJs from 'popper.js';

class Popper extends Component {
    popperRef = null;
    reference = null;
    instance = null;

    componentDidMount() {
        if(!this.reference.el || !this.popperRef.el)
            return;
        this.instance = new PopperJs(this.reference.el, this.popperRef.el, this.props.options || {});
    }
    render() {
        const {
            popper,
            reference
        } = this.props;

        return (
            <>
                <DomWrapper ref={r => this.popperRef = r}>{popper}</DomWrapper>
                <DomWrapper ref={r => this.reference = r}>{reference}</DomWrapper>
            </>
        )
    }
}

export default Popper;