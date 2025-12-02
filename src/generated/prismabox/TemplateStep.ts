import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const TemplateStepPlain = t.Object(
  {
    id: t.String(),
    group_id: t.String(),
    task_template_id: t.String(),
    predesigned_task_key: t.String(),
    mode: t.Union([t.Literal("Serial"), t.Literal("Concurrence")], {
      additionalProperties: false,
    }),
    parent_step_id: __nullable__(t.String()),
    no: t.Integer(),
    created_at: t.Date(),
  },
  { additionalProperties: false },
);

export const TemplateStepRelations = t.Object(
  {
    task_template: t.Object(
      {
        id: t.String(),
        name: t.String(),
        desc: t.String(),
        group_id: t.String(),
        created_at: t.Date(),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const TemplateStepPlainInputCreate = t.Object(
  {
    predesigned_task_key: t.String(),
    mode: t.Optional(
      t.Union([t.Literal("Serial"), t.Literal("Concurrence")], {
        additionalProperties: false,
      }),
    ),
    no: t.Integer(),
    created_at: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const TemplateStepPlainInputUpdate = t.Object(
  {
    predesigned_task_key: t.Optional(t.String()),
    mode: t.Optional(
      t.Union([t.Literal("Serial"), t.Literal("Concurrence")], {
        additionalProperties: false,
      }),
    ),
    no: t.Optional(t.Integer()),
    created_at: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const TemplateStepRelationsInputCreate = t.Object(
  {
    task_template: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const TemplateStepRelationsInputUpdate = t.Partial(
  t.Object(
    {
      task_template: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    },
    { additionalProperties: false },
  ),
);

export const TemplateStepWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          group_id: t.String(),
          task_template_id: t.String(),
          predesigned_task_key: t.String(),
          mode: t.Union([t.Literal("Serial"), t.Literal("Concurrence")], {
            additionalProperties: false,
          }),
          parent_step_id: t.String(),
          no: t.Integer(),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "TemplateStep" },
  ),
);

export const TemplateStepWhereUnique = t.Recursive(
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
              group_id: t.String(),
              task_template_id: t.String(),
              predesigned_task_key: t.String(),
              mode: t.Union([t.Literal("Serial"), t.Literal("Concurrence")], {
                additionalProperties: false,
              }),
              parent_step_id: t.String(),
              no: t.Integer(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "TemplateStep" },
);

export const TemplateStepSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      group_id: t.Boolean(),
      task_template_id: t.Boolean(),
      predesigned_task_key: t.Boolean(),
      mode: t.Boolean(),
      parent_step_id: t.Boolean(),
      task_template: t.Boolean(),
      no: t.Boolean(),
      created_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const TemplateStepInclude = t.Partial(
  t.Object(
    { mode: t.Boolean(), task_template: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const TemplateStepOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      group_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      task_template_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      predesigned_task_key: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      parent_step_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const TemplateStep = t.Composite(
  [TemplateStepPlain, TemplateStepRelations],
  { additionalProperties: false },
);

export const TemplateStepInputCreate = t.Composite(
  [TemplateStepPlainInputCreate, TemplateStepRelationsInputCreate],
  { additionalProperties: false },
);

export const TemplateStepInputUpdate = t.Composite(
  [TemplateStepPlainInputUpdate, TemplateStepRelationsInputUpdate],
  { additionalProperties: false },
);
