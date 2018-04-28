
/**
 * @method elemEach
 * @desc  遍历元素列表
 * @param {NodeList} nodes
 * @param {callback} callback 每一项元素的回调函数
 * @param {Number} callback.i 当前元素的索引
 * @param {Element} callback.nodes 当前元素
 **/


const  elemEach = function(nodes, callback) {
    let length = nodes.length;
    for (let i = 0; i < length; i++) {
        callback && callback(i, nodes[i]);
    }
};

export default elemEach;