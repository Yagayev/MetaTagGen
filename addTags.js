import * as parser from "parser.js";
import * as tagger from "tagger.js";



function addtags(words, str)
{
    let arr = parser.parser(str);
    let ans = tagger.tagger(words, arr);
    ans = ans.replace("\n",", ");
    return ans;

}
addtags2(123, "hello");
console.log(addtags(["orange", "octopus"], "$1 is the new $1\nthe $1 $1" ))
//expected: "octopus is the new orange, the orange octopus"