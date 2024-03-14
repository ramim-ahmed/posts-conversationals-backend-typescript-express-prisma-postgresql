import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { PostRoutes } from '../modules/post/post.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/posts',
    route: PostRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export const applicationRoutes = router;
