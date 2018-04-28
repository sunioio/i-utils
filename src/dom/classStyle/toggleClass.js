import hasClass from "./hasClass";
import removeClass from "./removeClass";
import addClass from "./addClass";

const toggleClass = function(elem, cls) {
    if (!elem || !cls) return;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (elem.classList) {
        elem.classList.toggle(cls);
    } else {
        let fn = hasClass(elem, cls)? removeClass : addClass;
        fn(elem,cls)
    }
};

export default toggleClass;