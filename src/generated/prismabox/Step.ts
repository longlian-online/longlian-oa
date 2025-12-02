import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const StepPlain = t.Object(
  {
    id: t.String(),
    template_step_id: t.String(),
    task_id: t.String(),
    group_id: t.String(),
    director_id: __nullable__(t.String()),
    created_at: t.Date(),
  },
  { additionalProperties: false },
);

export const StepRelations = t.Object({}, { additionalProperties: false });

export const StepPlainInputCreate = t.Object(
  { created_at: t.Optional(t.Date()) },
  { additionalProperties: false },
);

export const StepPlainInputUpdate = t.Object(
  { created_at: t.Optional(t.Date()) },
  { additionalProperties: false },
);

export const StepRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const StepRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const StepWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          template_step_id: t.String(),
          task_id: t.String(),
          group_id: t.String(),
          director_id: t.String(),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Step" },
  ),
);

export const StepWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.String(),
              template_step_id: t.String(),
              task_id: t.String(),
              group_id: t.String(),
              director_id: t.String(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Step" },
);

export const StepSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      template_step_id: t.Boolean(),
      task_id: t.Boolean(),
      group_id: t.Boolean(),
      director_id: t.Boolean(),
      created_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const StepInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const StepOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      template_step_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      task_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      group_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      director_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Step = t.Composite([StepPlain, StepRelations], {
  additionalProperties: false,
});

export const StepInputCreate = t.Composite(
  [StepPlainInputCreate, StepRelationsInputCreate],
  { additionalProperties: false },
);

export const StepInputUpdate = t.Composite(
  [StepPlainInputUpdate, StepRelationsInputUpdate],
  { additionalProperties: false },
);
