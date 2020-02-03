import { save, load, clear } from './localStorageUtils'

export function login(token) {
  save('logged', true);

  //Dummy logic for first access
  save('firstAccess', true);

  save('Bearer', token);
  document.location.href = "";
}

export function logout() {
  save('logged', false);
  clear('Bearer');
  document.location.href = "";
}

export function isLogged() {
  return load('logged') === 'true';
}
