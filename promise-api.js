//promises create already resolve
const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));
//promises create already rejected
const q = Promise.reject(new Error("reason for rejection..."));
q.catch((error) => console.log(error));
