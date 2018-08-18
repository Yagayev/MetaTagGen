
//params: a string that contains "&<number>" in it
//return: array of strings and numbers; everey "&<number>" is the number in the array, and the rest goes to strings between them 
function parser(str)
{
    let re = /((\$\d)|([^\$\d]*))/g;
    let arr = str.match(re);
    var ans = [];

    for(i in arr){
        if(arr[i].charAt(0)=='$'){
            ans[i]=parseInt(arr[i].substring(1,), 10);
        }
        else{
            ans[i]=arr[i];
        }

    }

    return ans;

}

// let str = "$1 is the new $1\n the $1 $1"
// let arr = parser(str);
// console.log(arr);

