import raf from './raf';

/**
 * 滚动到指定位置
 * @param element
 * @param to
 * @param duration
 */
export const scrollTo = (element, to, duration) => {
    // jump to target if duration zero
    if (duration <= 0) {
        raf(() => {
            element.scrollTop = to;
        });
        return;
    }
    const difference = to - element.scrollTop;
    const perTick = (difference / duration) * 10;

    raf(() => {
        element.scrollTop += perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    });
};