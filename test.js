const arr = [
    {name:"Jhon", gender:"Male"},
    {name:"Mary", gender:"Female"},
    {name:"Rose", gender:"Female"},
    {name:"Marcose", gender:"Male"},
]

function removeObject(arr){ 
    const array = arr.filter((item)=>{
        return item.gender === 'Male'
    })
    return array;
}

console.log(removeObject(arr))