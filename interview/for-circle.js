let arr = [1,2,3,4,5];
function forFn(arr) {
    for(let i = 0;i<arr.length;i++) {
        console.log(arr[i], '一');
        for(let j = i+1; j < arr.length;j++) {
            console.log(arr[j], '二')
        }
    }
}
forFn(arr);