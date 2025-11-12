import { Enum } from 'enum-plus';
import { t } from 'elysia';

// 预定义任务
const PredefinedTask = Enum({
  Create: {
    label: '创建',
    validator: t.Object({ a: t.String() }),
  },
  Translate: {
    label: '翻译',
    validator: t.Object({}),
  },
});

export function getAllTaskType() {
  return PredefinedTask.raw();
}
