import { save, load } from './localStorageUtils'

export function login() {
  save('logged', true);
}

export function logout() {
  save('logged', true);
  alert('Opa!');
}

export function isLogged() {
  return load('logged');
}