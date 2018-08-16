

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

// let str = "$0 is the new $1\n the $0 $1"
// let arr = parser(str);
// console.log(arr);

