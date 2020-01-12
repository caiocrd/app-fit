export function save(key, value) {
  localStorage.setItem(key, value);
}

export function load(key) {
  return localStorage.getItem(key);
}

export function clear(key){
  localStorage.removeItem(key);
}