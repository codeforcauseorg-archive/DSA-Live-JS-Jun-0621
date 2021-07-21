function subSeq(orgStr, subStr){
    if(orgStr===""){
        console.log(subStr);
        return;
    }

    let ch = orgStr[0];
    let modStr = orgStr.substring(1);
    subSeq(modStr, subStr+ch);
    subSeq(modStr, subStr);
}


subSeq("abc", "");