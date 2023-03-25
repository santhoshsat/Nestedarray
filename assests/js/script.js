var arr1=[1,2,3]
var arr2=[0,1,2,3,4,5]

var min_arr1
var max_arr1
var min_arr2
var max_arr2

var nestedarray=(arr1,arr2)=>{
    //finding min value  and max value in array1
    min_arr1=Math.min(...arr1)
    max_arr1=Math.max(...arr1)

    //finding min value and max value in array2
    min_arr2=Math.min(...arr2)
    max_arr2=Math.max(...arr2)

    //calling isnested fn()
    isnested(min_arr1,min_arr2,max_arr1,max_arr2)
}

//checking condition
var isnested=(min__arr1,min__arr2,max__arr1,max__arr2)=>{
    if ((min__arr1 > min__arr2) && (max__arr1 < max__arr2)) {
        console.log("true")
    } else {
        console.log("false")
    }
}

//calling function
nestedarray(arr1,arr2)

nestedarray([1, 2, 3, 4], [0, 6])
nestedarray([3, 1], [4, 0])
nestedarray([9, 9, 8], [8, 9])
nestedarray([1, 2, 3, 4], [2, 3])
