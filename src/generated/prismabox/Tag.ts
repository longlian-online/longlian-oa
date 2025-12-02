import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const TagPlain = t.Object(
  {
    id: t.String(),
    group_id: t.String(),
    label: t.String(),
    type: t.Union([t.Literal("TaskTemplate"), t.Literal("Project")], {
      additionalProperties: false,
    }),
    created_at: t.Date(),
  },
  { additionalProperties: false },
);

export const TagRelations = t.Object({}, { additionalProperties: false });

export const TagPlainInputCreate = t.Object(
  {
    label: t.String(),
    type: t.Union([t.Literal("TaskTemplate"), t.Literal("Project")], {
      additionalProperties: false,
    }),
    created_at: t.Date(),
  },
  { additionalProperties: false },
);

export const TagPlainInputUpdate = t.Object(
  {
    label: t.Optional(t.String()),
    type: t.Optional(
      t.Union([t.Literal("TaskTemplate"), t.Literal("Project")], {
        additionalProperties: false,
      }),
    ),
    created_at: t.Optional(t.Date()),
  },
  { additionalProperties: false },
);

export const TagRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const TagRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const TagWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          group_id: t.String(),
          label: t.String(),
          type: t.Union([t.Literal("TaskTemplate"), t.Literal("Project")], {
            additionalProperties: false,
          }),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Tag" },
  ),
);

export const TagWhereUnique = t.Recursive(
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
              label: t.String(),
              type: t.Union([t.Literal("TaskTemplate"), t.Literal("Project")], {
                additionalProperties: false,
              }),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Tag" },
);

export const TagSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      group_id: t.Boolean(),
      label: t.Boolean(),
      type: t.Boolean(),
      created_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const TagInclude = t.Partial(
  t.Object(
    { type: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const TagOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      group_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      label: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Tag = t.Composite([TagPlain, TagRelations], {
  additionalProperties: false,
});

export const TagInputCreate = t.Composite(
  [TagPlainInputCreate, TagRelationsInputCreate],
  { additionalProperties: false },
);

export const TagInputUpdate = t.Composite(
  [TagPlainInputUpdate, TagRelationsInputUpdate],
  { additionalProperties: false },
);
