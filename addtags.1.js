function addtags(words, str) {
    let arr = parser(str);
    let ans = tagger(words, arr);
    ans = ans.replace("\n", ", ");
    return ans;
}