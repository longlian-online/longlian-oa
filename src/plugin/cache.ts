import { createKeyv as createSqliteKeyv } from '@keyv/sqlite';
import { getAppMode } from '../helper/env';
import { createKeyv as createRedisKeyv } from '@keyv/redis';
import Elysia from 'elysia';

const cache = (() => {
  switch (getAppMode()) {
    case 'lite':
      return createSqliteKeyv('sqlite://cache.sqlite');
    case 'full':
      return createRedisKeyv(Bun.env.CACHE_REDIS_URL);
    default:
      throw new Error('缓存初始化失败,请检查相关配置!');
  }
})();

const app = new Elysia().decorate('cache', cache);

export default app;
