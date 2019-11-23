import addDomEventListener from 'add-dom-event-listener';
import { noop } from 'utils/common/base';

let isDragging = false;

export default function(element, options) {
    const { start = noop, drag = noop, end = noop } = options;
    const dataFlow = Object.create(null); // The data warehouse flows during the drag-and-drop process
    let mousemoveListener = null, mouseupListener = null;

    const moveFn = function(event) {
        drag(event, dataFlow);
    };
    const upFn = function(event) {
        mousemoveListener && mousemoveListener.remove();
        mouseupListener && mouseupListener.remove();
        document.onselectstart = null;
        document.ondragstart = null;

        isDragging = false;

        end(event, dataFlow);
    };
    return addDomEventListener(element, 'mousedown', function (event) {
        if (isDragging) return;

        if(start(event, dataFlow) !== false) {
            document.onselectstart = function() { return false; };
            document.ondragstart = function() { return false; };

            mousemoveListener = addDomEventListener(document, 'mousemove', moveFn);
            mouseupListener = addDomEventListener(document, 'mouseup', upFn);
            isDragging = true;
        }

    }, false);
}