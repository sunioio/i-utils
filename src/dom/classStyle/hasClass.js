/**
 *
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} element
 * @param {String} className
 * @return {Boolean}
 */


export default function hasClass(element, className) {
    if (!element || !className) return false;
    if (className.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (element.classList) {
        return element.classList.contains(className);
    } else {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }
};