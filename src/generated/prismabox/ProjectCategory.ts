import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ProjectCategory = t.Union(
  [t.Literal("Manga"), t.Literal("Novel")],
  { additionalProperties: false },
);
