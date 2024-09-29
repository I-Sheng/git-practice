//Basic method with simple callback
function doJob(job, time, cb) {
  setTimeout(() => {
    // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
// write your code here
// 以下是使用範例
const print = function (data) {
  console.log(data);
}
/* doJob('刷牙', 1000, print)
doJob('吃早餐', 4000, print)
doJob('寫功課', 5000, print)
doJob('吃午餐', 7000, print)
 */

//Advance method use promise
function jobPromise(job, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let now = new Date();
      console.log(`完成工作 ${job} at ${now.toISOString()}`);
      resolve();
    }, time); 
  });
}

jobPromise('刷牙', 1000)
  .then(() => jobPromise('吃早餐', 3000))
  .then(() => jobPromise('寫功課', 1000))
  .then(() => jobPromise('吃午餐', 2000));
