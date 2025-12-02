import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const GroupRole = t.Union(
  [
    t.Literal("Guest"),
    t.Literal("Member"),
    t.Literal("Admin"),
    t.Literal("Owner"),
  ],
  { additionalProperties: false },
);
