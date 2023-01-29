// 6.数组转树结构
// 6.1 使用递归
const arr6 = [
    { id: 2, title: '中国', parent_id: 0 },
    { id: 3, title: '广东省', parent_id: 2 },
    { id: 4, title: '广州市', parent_id: 3 },
    { id: 5, title: '天河区', parent_id: 4 },
    { id: 6, title: '湖南省', parent_id: 2 },
    { id: 1, title: '俄罗斯', parent_id: 0 }
  ]

/**
 * 递归查找添加children
 * @param {数组数据} data 
 * @param {存放返回结果} res
 * @param {父id} pid 
 */
  function getChildren(data, res, pid) {
    for(let item of data) {
        if(item.parent_id === pid) {
            const newItem = {children:[], ...item};
            res.push(newItem);
            getChildren(data,newItem.children,item.id)
        }
    }
  }

  /**
 * 转化方法
 * @param {数组数据} data 
 * @param {父id} pid 
 * @returns 
 */
function arrayToTree(data, pid) {
    let res = []
    getChildren(data, res, pid)
    return res
}

console.log(arrayToTree(arr6, 0));

// 6.2 使用循环
/**
 * 数组结构转为树结构
 * @param {*} data 数组数据
 * @returns 
 */
function arrayToTree(data) {
    const result = []
    const obj = data.reduce((pre, cur) => {
      pre[cur.id] = cur
      return pre
    }, {})
    for (let item of data) {
      if (item.parent_id === 0) {
        result.push(item)
        continue
      }
      if (item.parent_id in obj) {
        const parent = obj[item.parent_id];
        parent.children = parent.children || [];
        parent.children.push(item);
      }
    }
    return result
  }