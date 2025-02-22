function feachUserData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`User Id is ${id}`);
            resolve({id:id,name:'John Doe',age:30,type:"premium"})
        },1000)
    })
}
function feachUserSetting(type){
    return new Promise((resolve,reject)=>{
        console.log(`User type is ${type} `)
        setTimeout(()=>{
            const setting = type==="premium"?{mode:"dark",notification:true,access:true}:{mode:"light",notification:false,access:true}
            resolve(setting)
        },1000)
    });
}


async function display() {
    let f1 = await feachUserData(1)
    let f2 = await feachUserSetting(f1.type)
    console.log(f2)
}

display()