import Elysia from 'elysia';
import dbPlugin from '../plugin/db';

const app = new Elysia({ prefix: '/user' })
  .use(dbPlugin)
  .get('/', () => 'Hello Elysia');

export default app;
