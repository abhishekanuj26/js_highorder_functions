let arr=[1,2,3,4,5];
//implementing map function
function map(arr,mapFunction){
    let res=[];
    for(let i=0;i<arr.length;i++){
        const output=mapFunction(arr[i],i,arr);
        res.push(output);
    }
    return res;
}
let squareArr=map(arr,function(num){
    return num*num;
})
console.log(squareArr);
//implementing filter function
function filter(arr,filterFunction){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(filterFunction(arr[i],i,arr)===true){
            res.push(arr[i]);
        }
    }
    return res;
}
let greaterThanTwo = filter(arr,function(num){
    if(num>2)
    return true;
})
console.log(greaterThanTwo);
//implementing reduce function
function reduce(reducer,intitial_value,arr){
    let value=intitial_value;
    for(let i=0;i<arr.length;i++){
        value=reducer(value,arr[i]);
    }
    return value;
};
function reducer(intitial_value,current_value){
    return intitial_value+current_value;
};
const sumOfArray=reduce(reducer,0,arr);
console.log(sumOfArray);
