export const fakeLogin = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber < 3) {
    return new Promise((resolve, reject) => setTimeout(() => { reject('Something went wrong with the Signup. Please try again.')}, 1000));
  } else {
    return new Promise(resolve => setTimeout(() => { resolve() }, 1000));
  } 
};
// Promise.reject(new Error('fail')).then(resolved, rejected);