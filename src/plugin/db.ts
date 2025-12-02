import Elysia from 'elysia';
import { PrismaClient } from '../generated/prisma/client';
import { pagination } from 'prisma-extension-pagination';
import { getAppMode } from '../helper/env';

let prismaClient = await (async () => {
  switch (getAppMode()) {
    case 'lite': {
      const { PrismaBetterSqlite3 } = await import(
        '@prisma/adapter-better-sqlite3'
      );
      return new PrismaClient({
        adapter: new PrismaBetterSqlite3({
          url: `${process.env.DATABASE_URL}`,
        }),
      });
    }
    case 'full': {
      const { PrismaPg } = await import('@prisma/adapter-pg');
      return new PrismaClient({
        adapter: new PrismaPg({
          connectionString: `${process.env.DATABASE_URL}`,
        }),
      });
    }
    default: {
      throw new Error('ORM实例化失败,请检查相关配置!');
    }
  }
})();

const app = new Elysia().decorate(
  'db',
  prismaClient
    // 分页插件
    .$extends(pagination())
);

export default app;
