import { Enum } from 'enum-plus';
import { t } from 'elysia';

// 预定义任务
const PredefinedTaskEnum = Enum({
  Create: {
    label: '创建',
    validator: t.Object({ a: t.String() }),
  },
  Translate: {
    label: '翻译',
    validator: t.Object({}),
  },
});

export function getAllTaskTypeEnum() {
  return PredefinedTaskEnum.raw();
}
