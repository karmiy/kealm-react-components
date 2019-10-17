import addDomEventListener from 'add-dom-event-listener';
import { getTranslate, setTranslate } from '../common/dom';

const noop = () => {};

/**
 * Adaptive scrolling effect
 * @param container: includes two buttons and scroll-wrap
 * @param scroll_wrap
 * @param prev_tab: need absolute position
 * @param next_tab: need absolute position
 * @param options
 */
function scrollAdaptation(options = {}) {
    const {
        container,
        scroll_wrap,
        prev_tab,
        next_tab,
        statusResponse = noop, // show: true  hidden: false
        disabledResponse = noop, // return [true, false]
        speed = 70,
        direction = 'horizontal',
        onScroll = noop,
        onTabClick = noop,
        onPrevClick = noop,
        onNextClick = noop,
        onLimit = noop,
    } = options;

    const isHoriz = direction === 'horizontal';
    const _direct = isHoriz ? ['Left', 'Right'] : ['Top', 'Button'],
        _attr = isHoriz ? 'Width' : 'Height';

    const inner_wrap = scroll_wrap.children[0];

    const scope = {
        get max() {
            return 0;
        },
        get min() {
            return scroll_wrap[`client${_attr}`] - inner_wrap[`offset${_attr}`];
        },
        get hasScroll() {
            return inner_wrap[`offset${_attr}`] - container[`client${_attr}`] > 0;
        },
    }

    const initTabsEvent = () => {
        [prev_tab, next_tab].forEach((item, index) => {
            item.index = index;
            item.sibling = index === 0 ? next_tab : prev_tab;
            addDomEventListener(item, 'click', function () {
                if(disabledResponse()[this.index]) return;

                this.index === 0 && onPrevClick();
                this.index === 1 && onNextClick();
                onTabClick();

                const _value = this.index === 0 ?
                    Math.min(getTranslate(inner_wrap)[isHoriz ? 'x' : 'y'] + speed, scope.max)
                    :
                    Math.max(getTranslate(inner_wrap)[isHoriz ? 'x' : 'y'] - speed, scope.min);

                setTranslate(inner_wrap, {
                    x: isHoriz ? _value : 0,
                    y: !isHoriz ? _value : 0,
                });

                _value === scope.max && onLimit('prev');
                _value === scope.min && onLimit('next');
            }, false);
        })
    }

    const initContainerEvent = () => {
        addDomEventListener(container, 'click', function() {
            if(scope.hasScroll && !statusResponse()) {
                onScroll(true);
                setTranslate(inner_wrap, {x: 0, y: 0});
            }else if(!scope.hasScroll && statusResponse()) {
                onScroll(false);
                setTranslate(inner_wrap, {x: 0, y: 0});
            }
        }, false);
    }

    if(scope.hasScroll) {
        onScroll(true);
    }

    initTabsEvent();
    initContainerEvent();
}

export default scrollAdaptation;