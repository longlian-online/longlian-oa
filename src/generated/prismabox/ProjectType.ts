import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ProjectType = t.Union([t.Literal("Set"), t.Literal("Single")], {
  additionalProperties: false,
});
