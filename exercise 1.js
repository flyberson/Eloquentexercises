function exercise1 () {

    var what;
    what = "#";
    for (var i = 0; i < 7; i++) {

        console.log(what);
        what += "#";

    }
}

function exercise2(){
    var int=1;
    for (var i = 0; i < 100; i++) {
        if(int%5==0 && int%3==0){
            console.log("fizzbuzz");
        }
        else if (int%3==0){
            console.log("fizz");

        }
        else if(int%5==0){
            console.log("buzz")
        }
        else {
            console.log(int);

        }
        int++;

    }
}

function exercise3(){
    var size=8;
    var width=size;
    var height=size;
    var string=null;
    for (var i = 0; i < height; i++) {
        string=""
        if (i%2==0){
            for (var j = 0; j < width; j++) {

                string += " #";

            }
        }
        else {
            for (var j = 0; j < width; j++) {

                string += "# ";

            }

        }

        console.log(string);
        string=null;


    }
}

function exercise4(){
    console.log(min(0,10));
    console.log(min(0,-10));


}

function min(first, second){
    var min = Math.min(first,second);
    return min;
}

function exercise5(){
console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(-1));


}

function isEven(number){
    number=Math.abs(number);
    if (number==0){
        return true;
    }
    if(number==1){
        return false;
    }
    if(isEven(number-2)){
        return true;
    }
    else{
        return false;
    }
}

function exercise6(){
    console.log(countB("BubBle"));
    console.log(countChar("BagsBBlso","l"));
}

function countB(string){
    var count=countChar(string,"B");
    return count;

}

function countChar(string,char){
    count=0;
    for (var i = 0; i < string.length; i++) {
        var obj = string[i];
        if(obj==char){
            count++;

        }

    }

    return count;

}


function exercise7(){
console.log(range(1,10));
    console.log(range(10,1));
    console.log(range(10,-1));
    console.log(sumArray(range(1,10)));
console.log(range(1,10,2));
    console.log(range(10,-1,2));
}

function range(start,end,step){
    var array=[];
    if(step===undefined){
        step=1;
    }
    if(end<start){

        for (var i = start; i >= end; i-=step) {
            array.push(i);

        }
    }
    else {

        for (var i = start; i <= end; i+=step ) {
            array.push(i);

        }
    }

    return array;
}

function sumArray(array){
    var obj=0;
    for (var i = 0; i < array.length; i++) {
        obj += array[i];

    }
    return obj;
}

function exercise8(){
    var testarray = ["first","second","third","fourth"]
console.log(reverseArray( testarray));
    var testarray = ["first","second","third","fourth"]
    console.log(reverseArrayinplace( testarray));
}

function reverseArray(array){
    secondarray = [];
    for (var i = array.length-1; i >= 0; i--) {
        var obj = array[i];
        secondarray.push(obj);

    }
    return secondarray;
}

function reverseArrayinplace(array){

    for (var i = 1; i<array.length ; i++) {

      array.unshift(array[i]);
        array.splice(i+1,1);




    }
    return array;
}

function exercise9(){
console.log(arraytoList(["2","1","3"]))
}
function arraytoList(array){
    headarray=[];
    listarray=[];


    for (var i = 0; i < array.length; i++) {
        array2=[];

        var obj = array[i];
        array2.push(obj);


        listarray.push(array2);
        headarray.push(listarray);
        listarray=array2;

    }
    return headarray;
}
