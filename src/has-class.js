/**
 *
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} el
 * @param {String} cls
 * @return {Boolean}
 */
export default  (el, cls) => {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
};