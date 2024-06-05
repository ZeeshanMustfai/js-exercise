// Promise.all()
p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
});
p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
});
p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
});
p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 4000);
});
p5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("fifth is rejected"), 4000);});
  
Promise.all([p1, p2, p3, p4, p5])
    .then((values) => {
      console.log(values);
    })
    .catch((reject) => {
      console.log(reject);
    });