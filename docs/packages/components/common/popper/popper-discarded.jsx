import React, { Component } from 'react';
import PopperJs from 'popper.js';
import { PopperProps, PopperDefaultProps } from './interface';
import DomWrapper from '../domWrapper';

class Popper extends Component {
    popperRef = null;
    referenceRef = null;
    instance = null;

    componentDidMount() {
        this.createPopper();
    }
    createPopper() {
        if(!this.referenceRef.el || !this.popperRef.el)
            return;
        const {
            placement,
            positionFixed,
            eventsEnabled,
            removeOnDestroy,
            modifiers,
            onCreate,
            onUpdate,
        } = this.props;

        const options = {
            placement,
            positionFixed,
            eventsEnabled,
            removeOnDestroy,
            modifiers,
            onCreate,
            onUpdate,
        }

        this.instance = new PopperJs(this.referenceRef.el, this.popperRef.el, options);
    }
    render() {
        const {
            popper,
            reference
        } = this.props;

        return (
            <>
                <DomWrapper ref={r => this.popperRef = r}>{popper}</DomWrapper>
                <DomWrapper ref={r => this.referenceRef = r}>{reference}</DomWrapper>
            </>
        )
    }
}

Popper.propTypes = PopperProps;
Popper.defaultProps = PopperDefaultProps;
export default Popper;