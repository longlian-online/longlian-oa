import { t } from 'elysia';
import { AppModeEnum } from '../enum/app';

const envSchema = t.Object({
  APP_MODE: t.Enum(AppModeEnum.keys),
  CACHE_REDIS_URL: t.Optional().String({ format: 'uri' }),
});

type envType = typeof envSchema.static;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends envType {}
  }
}

export {};
