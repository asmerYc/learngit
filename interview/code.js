// 声明和初始化数组
const array = Array(5).fill('');
console.log(array);
//初始化二维数组
const matrix = Array(5).fill(0).map(() => Array(5).fill(0) )
console.log(matrix , 'matrix')

//2.找出最大值、最小值
const array2 = [5,4,7,8,9,2];
// 2.1:求和
const sum = array2.reduce((acc,cur) => acc + cur)
console.log(sum, 'sum');
// 求最大最小值
const min = array2.reduce((acc,cur) => acc > cur ? acc : cur );
const min1 = array2.sort()
console.log(min)
// 按照长度顺序排数组项目
const strArr = ['a1','a22','a', 'a456',];
console.log(strArr.sort((a,b) => a.length - b.length));

// 4.从数组中过滤假值
const array4 = [3,0,6,7,'',undefined,null,false,true];
console.log(array4.filter(Boolean));

// 5.删除重复的值
const array5 = [1,2,2,3,1,6,5,5,4,7,7,8,9];
function removeDuplicate(arr){
    for(let i = 0; i< arr.length;i++) {
        console.log(arr[i], '一')
        for(let j =i+1;j<arr.length;j++) {
            console.log(arr[j], '两')
            if(arr[i] === arr[j]) {
                arr.splice(j,1);
                ++j;
            }
        }
    }
    return arr;
}

function removeDuplicate1(arr){
    const res= [];
    for(let i = 0; i< arr.length;i++){
        if(res.indexOf(arr[i]) == -1) {
            res.push(arr[i])
        }
    }
    return res.sort((a,b) => a-b);
}

function removeDuplicate2(arr) {
    return arr.filter((item,index,array) => array.indexOf(item) === index);
}
console.log(removeDuplicate(array5));
console.log(removeDuplicate1(array5));
console.log(removeDuplicate2(array5));

// 6.数组转树结构
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
            getChildren(data,newItem.children,item.id);
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