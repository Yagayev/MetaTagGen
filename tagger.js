
//params: words - string array; tamplates - array of strings and numbers
//return: one string, all the strings in teplates, where every number x in templates is replaced by 
function tagger(words, tamplates){
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

//console.log(tagger(["orange", "octopus"], [0, " is the new ", 1, ", ", "the ", 0, " ", 1] ))
//expected: "octopus is the new orange, the orange octopus"



