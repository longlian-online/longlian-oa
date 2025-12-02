import { Enum } from 'enum-plus';

export const AppModeEnum = Enum({
  Lite: {
    label: '轻量模式',
  },
  Full: {
    label: '全量模式',
  },
});
