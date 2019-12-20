import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogged } from '../utils/auth'

export default function RouteWrapper({ component, isPrivate, ...rest }) {
  const signed = isLogged() === 'true';

  /**
   * Redirect user to login page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !signed) {
    return <Redirect to="/login" />;
  }
  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  if (!isPrivate && signed) {
    return <Redirect to="/" />;
  }
  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return <Route {...rest} component={component} />;
}