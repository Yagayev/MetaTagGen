//params: a string that contains "&<number>" in it
//return: array of strings and numbers; everey "&<number>" is the number in the array, and the rest goes to strings between them 
function parser(str)
{
    let re = /((\$\d)|([^\$\d]*))/g;
    let arr = str.match(re);
    var ans = [];

    for(i in arr){
        if(arr[i].charAt(0)=='$'){
            ans[i]=parseInt(arr[i].substring(1,), 10)-1;
        }
        else{
            ans[i]=arr[i];
        }

    }

    return ans;

}


//params: words - string array; tamplates - array of strings and numbers
//return: one string, all the strings in teplates, where every number x in templates is replaced by 
function tagger(words, tamplates)
{
    ans = "";
    for(i in tamplates){
        let t = tamplates[i];
        if(typeof(t)=="number"&&t<words.length){
            ans = ans + words[t];
        }
        else{
            ans = ans + t;
        }
    }

    return ans;
}

function stringToArr(str){
    return str.split(/,|\n/g);
}

function addtags(wordsInput, str)
{
    let arr = parser(str);
    let words = stringToArr(wordsInput);
    let ans = tagger(words, arr);
    ans = ans.replace("\n",", ");
    return ans;

}




// console.log(addtags(["orange", "octopus"], "$1 is the new $1\nthe $1 $1" ))
//expected: "octopus is the new orange, the orange octopus"

function appendStr(arr)
{
    ans = "";
    for(i in arr){
        ans+="\n"+arr[i];
    }
    return ans;
}

let templates = [
    " בתים ב$1",
    " למכירה ב$",
    " בתים ב$1",
    " נחלות ב$1",
    " משק חקלאי ב$1",
    " משקים חקלאיים ב$1",
    " נדלן ב$1",
    " תיווך ב$1",
    " קוטג ב$1",
    " וילה ב$1",
    " בית עם בריכה ב$1",
    " קוטג עם בריכה ב$1",
    " וילה עם בריכה ב$1",
    " בית עם גינה ב$1",
    " קוטג עם גינה ב$1",
    " וילה עם גינה ב$1",
    " משק עזר ב$1",

]
// let words = [
//     "שדה ורבורג"
// ]
let words = "שדה ורבורג, גן שורק\nשלום"

console.log(addtags(words, templates.toString()));
