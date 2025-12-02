import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const TaskTemplateExcutionMode = t.Union(
  [t.Literal("Serial"), t.Literal("Concurrence")],
  { additionalProperties: false },
);
