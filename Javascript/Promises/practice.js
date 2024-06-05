function getData(dataId) {
    return new Promise((resolve,reject) =>{
        setTimeout( () =>{
            console.log('data', dataId);
            resolve("success");
        }, 2000);
    });
}

console.log('Getting Username ...')
getData('UserName').then((res) =>{
    console.log("Getting Password ... ");
    return getData("Password");
})
.then((res) => {
    console.log(res);
});