import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const TagType = t.Union(
  [t.Literal("TaskTemplate"), t.Literal("Project")],
  { additionalProperties: false },
);
