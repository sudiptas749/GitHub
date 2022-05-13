const obj1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let rollno=[1,2,3,4,5];
        resolve(rollno);
        reject('error while executing the program')
    }, 4000);
});

const getProfile=(indexdata)=>{
return new Promise((resolve,reject)=>{
    setTimeout((indexdata)=>{
        let Profile={
            name:'ajay',
            age:30
        }
        resolve(`roll no is' ${indexdata}, my name is  ${Profile.name}
        and my age is ${Profile.age}`);
    }, 4000, indexdata)
})
}

async function getInfo(){
 const profileData=await obj1;
 console.log(profileData)
}

getInfo();
