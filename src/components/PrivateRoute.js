import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 * если перезагрузить страницу залогиненому пользователю, то он станет незалог. Но он станет залог когда закончится рефреш. ЧТобы не выкинуло с контактов нужно дождаться когда закончится рефреш и проверить логин тру.
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
