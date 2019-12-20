import { save, load } from './localStorageUtils'

export function login() {
  save('logged', true);
  document.location.href = "";
}

export function logout() {
  save('logged', false);
  document.location.href = "";
}

export function isLogged() {
  return load('logged');
}