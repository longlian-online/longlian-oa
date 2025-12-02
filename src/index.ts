import { Elysia } from 'elysia';
import openapi from '@elysiajs/openapi';
import user from './controller/user';

const app = new Elysia()
  .use(openapi())
  .use(user)
  .get('/', () => 'Hello Elysia')
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
