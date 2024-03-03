const str ='khdg jhndsg hjfgion dgok';

function capitalize(){
    const newStr = str.split(' ').map((word)=>(
        word.charAt(0).toUpperCase() + word.slice(1)
    ))
    return newStr.join(' ')
}

console.log(capitalize())