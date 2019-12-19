export function save(key, value) {
  localStorage.setItem(key, value);
}

export function load(key) {
  localStorage.getItem(key);
}