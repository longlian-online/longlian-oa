import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ResourceType = t.Union(
  [t.Literal("Avatar"), t.Literal("Cover"), t.Literal("StepContent")],
  { additionalProperties: false },
);
