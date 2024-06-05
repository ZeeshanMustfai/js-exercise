// Promise.any()
p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("one"), 5000);
});
p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("two"), 2000);
});
p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("three"), 3000);
});
p4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("four"), 4000);
});
p5 = new Promise((resolve, reject) => {
    setTimeout(() => reject("fifth is rejected"), 4000);});
  
Promise.any([p1, p2, p3, p4, p5])
    .then((values) => {
      console.log(values);
    })
    .catch((reject) => {
      console.log(reject);
    });