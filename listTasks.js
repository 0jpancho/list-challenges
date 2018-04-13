//Task 1
function largest(list){

    let max = 0;

    for (let a = 0; a < list.length; a++){
        if (max < list[a]){
            max = list[a];
        }
    }
    return max;
}

//Task 2
function reverse(list){

    let reverseList = [];

    for (let w = list.length-1; w >= 0; w = w-1) {
        reverseList.push(list[w]);
    }
    return reverseList;
}

//Task 3
function contains(list,e){

    for (let c = 0; c < list.length; c++){
        if(e == list[c]){
            return true;
        }
    }
    return false;
}

//Task 4
function oddElements(list){

    let newArray = [];

    for (let a = 1; a < list.length; a = a + 2){
        newArray.push(list[a]);
    }
    return newArray;

}

//Task 5
function total(list){
    let p = 0;
    for (var i = 0; i < list.length; i++) {
        p = p+list[i];
    }
    return p;
}

//Task 6
function isPalindrome(list){

    let reverseList = [];

    for (let w = list.length-1; w >= 0; w = w-1) {
        reverseList.push(list[w]);
    }

    for(let d = 0; d < list.length; d++){

        if(list[d] !== reverseList[d]){
            return false;
        }
    }
    return true

}

//Task 7
//Do second to last
function recursiveTotal(list){

    let n = list.length;
    if (n == 0) {
        return 0;
    }
    else if (n == 1)
    {
        return list[0];
    }
    else{
        let rest = [];
        for (let i = 1; i <= list.length-1; i++) {
            rest[i-1]=list[i];
        }
        console.log(rest);
        return list[0]+recursiveTotal(rest);
    }
}
//Task 8
function concatenate(listA, listB){

    let newArray = [];

    for (let c = 0; c < listA.length; c++)
    {
        newArray.push(listA[c]);
    }

    for (let b = 0; b < listB.length; b++)
    {
        newArray.push(listB[b]);
    }

    return newArray;

}

//Task 9
function weave(listA, listB){

}

//Task 10
//Attempt last
function mergeInOrder(listA, listB){

}

//Task 11
function rotate(list,k){

}

//Task 12
function fibonacci(){

}

function main(){
    let list = [1, 1, 1, 3, 3, 1, 1, 1];
    let e = 7;

    let listA = ["a", "b", "c"];
    let listB = [4, 5, 6];

    //console.log(largest(list));
    //console.log(reverse(list));
    //console.log(contains(list, e));
    //console.log(total(list));
    //console.log(oddElements(list));
    //console.log(isPalindrome(list));
    console.log(recursiveTotal(list));
    //console.log(concatenate(listA, listB));
}

main();
