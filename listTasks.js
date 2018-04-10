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

}

//Task 3
function contains(list,e){

    for (let c = 0; c < list.length; c++){
        if(e == list[c]){
            return true;
        }
    }

}

//Task 4
function oddElements(list){

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

}

//Task 7
//Do second to last
function recursiveTotal(list){

}
//Task 8
function concatenate(listA, listB){

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
    let list = [1, 2, 3, 4, 5, 6, 7, 8];
    let e = 35;

    console.log(largest(list));
    console.log(contains(list, e));
    console.log(total(list));
}

main();
