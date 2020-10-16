import { Home, Profile, Contact } from '../pages';

const routes = [
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routes;