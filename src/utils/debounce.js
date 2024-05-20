export default function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    return new Promise((resolve, reject) => {
      timer = setTimeout(() => {
        resolve(fn(...args));
      }, delay);
    });
  };
}
