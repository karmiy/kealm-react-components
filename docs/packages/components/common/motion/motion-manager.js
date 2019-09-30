import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cssAnimate, { isCssAnimationSupported } from 'utils/css-animation';
import animUtil from './utils/animate';

const transitionMap = {
    enter: 'transitionEnter',
    appear: 'transitionAppear',
    leave: 'transitionLeave',
};

export default class MotionManager extends React.Component {
    static propTypes = {
        children: PropTypes.any,
        animation: PropTypes.any,
        transitionName: PropTypes.any,
    }

    componentWillUnmount() {
        this.stop();
    }

    componentWillEnter(done) {
        if (animUtil.isEnterSupported(this.props)) {
            this.transition('enter', done);
        } else {
            done();
        }
    }

    componentWillAppear(done) {
        if (animUtil.isAppearSupported(this.props)) {
            this.transition('appear', done);
        } else {
            done();
        }
    }

    componentWillLeave(done) {
        if (animUtil.isLeaveSupported(this.props)) {
            this.transition('leave', done);
        } else {
            // always sync, do not interupt with react component life cycle
            // update hidden -> animate hidden ->
            // didUpdate -> animate leave -> unmount (if animate is none)
            done();
        }
    }

    transition(animationType, finishCallback) {
        const node = ReactDOM.findDOMNode(this);
        const props = this.props;
        const transitionName = props.transitionName;
        const nameIsObj = typeof transitionName === 'object';
        this.stop();
        const end = () => {
            this.stopper = null;
            finishCallback();
        };
        if ((isCssAnimationSupported || !props.animation[animationType]) &&
            transitionName && props[transitionMap[animationType]]) {
            const name = nameIsObj ? transitionName[animationType] : `${transitionName}-${animationType}`;
            let activeName = `${name}-active`;
            if (nameIsObj && transitionName[`${animationType}Active`]) {
                activeName = transitionName[`${animationType}Active`];
            }
            let toName = `${name}-to`;
            if (nameIsObj && transitionName[`${animationType}To`]) {
                toName = transitionName[`${animationType}To`];
            }
            this.stopper = cssAnimate(node, {
                name,
                active: activeName,
                to: toName,
            }, end);
        } else {
            this.stopper = props.animation[animationType](node, end);
        }
    }

    stop() {
        const stopper = this.stopper;
        if (stopper) {
            this.stopper = null;
            stopper.stop();
        }
    }

    render() {
        return this.props.children;
    }
}
