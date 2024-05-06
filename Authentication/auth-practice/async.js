// use promise
function walkDog(){
    return new Promise(
(resolve,reject)=>{
    setTimeout(()=>{
        
        const walkdog=true;
        if (walkdog){

        resolve("You walk the dog");

}else{
    reject("You did not walk the dog")
}
        } ,1500)
} );
}

function cleanKitchen(){
    return new Promise(
(resolve,reject)=>{
 

    setTimeout(()=>{
        const cleankitchen=false;
        if(cleankitchen){
            resolve("You clean the kitchen");
        }else{
            reject("You did not clean the kitchen")
        }
        
        } ,1500)
} );
}

function takeoutTrash(){
    return new Promise(
(resolve,reject)=>{
    setTimeout(   ()=>{
        resolve("You take out the trash");
        } ,1500)
} );
}
walkDog().then(value=>{console.log(value);return cleanKitchen()})
.then(value=> {console.log(value);return takeoutTrash()})
.then(value=>{console.log(value); console.log("You rape trump")})
.catch(error=> {console.error();console.log(error)})
// walkDog()

// async/await

async function doChores(){
    try{    const walkDogResult=await walkDog();
        console.log(walkDogResult, "yes async");
        const cleanKitchenResult=await cleanKitchen();
        console.log(cleanKitchenResult, "yes async");
        const takeoutTrashnResult=await takeoutTrash();
        console.log(takeoutTrashnResult, "yes async");
        console.log("You beat Trump");}
        catch(error){console.log(error)}

}
doChores()