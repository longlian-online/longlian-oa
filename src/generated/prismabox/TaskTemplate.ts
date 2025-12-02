import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const TaskTemplatePlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    desc: t.String(),
    group_id: t.String(),
    created_at: t.Date(),
  },
  { additionalProperties: false },
);

export const TaskTemplateRelations = t.Object(
  {
    template_steps: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const TaskTemplatePlainInputCreate = t.Object(
  { name: t.String(), desc: t.String(), created_at: t.Optional(t.Date()) },
  { additionalProperties: false },
);

export const TaskTemplatePlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    desc: t.Optional(t.String()),
    created_at: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const TaskTemplateRelationsInputCreate = t.Object(
  {
    template_steps: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const TaskTemplateRelationsInputUpdate = t.Partial(
  t.Object(
    {
      template_steps: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const TaskTemplateWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          desc: t.String(),
          group_id: t.String(),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "TaskTemplate" },
  ),
);

export const TaskTemplateWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), name: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ name: t.String() })],
          { additionalProperties: false },
        ),
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
              name: t.String(),
              desc: t.String(),
              group_id: t.String(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "TaskTemplate" },
);

export const TaskTemplateSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      desc: t.Boolean(),
      group_id: t.Boolean(),
      template_steps: t.Boolean(),
      created_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const TaskTemplateInclude = t.Partial(
  t.Object(
    { template_steps: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const TaskTemplateOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      desc: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      group_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const TaskTemplate = t.Composite(
  [TaskTemplatePlain, TaskTemplateRelations],
  { additionalProperties: false },
);

export const TaskTemplateInputCreate = t.Composite(
  [TaskTemplatePlainInputCreate, TaskTemplateRelationsInputCreate],
  { additionalProperties: false },
);

export const TaskTemplateInputUpdate = t.Composite(
  [TaskTemplatePlainInputUpdate, TaskTemplateRelationsInputUpdate],
  { additionalProperties: false },
);
