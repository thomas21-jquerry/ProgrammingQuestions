// ***
// ****
// *****
// ****
// ***


let pattern1 = (row, col)=>{
    let r = 2*(col-row)+1
    for(let i = 0;i<r;i++){
        let pat = "";
        let c = row+i<col? row+i: col-(row+i-col)
        for(let j = 0;j<c;j++){
            pat+="*"
        }
        console.log(pat)
    }
}



let pattern = (a,b)=>{

}

pattern1(2,6)