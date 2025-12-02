import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const GroupPlain = t.Object(
  {
    id: t.String(),
    avatar_resource_id: t.String(),
    name: t.String(),
    owner_id: t.String(),
  },
  { additionalProperties: false },
);

export const GroupRelations = t.Object({}, { additionalProperties: false });

export const GroupPlainInputCreate = t.Object(
  { name: t.String() },
  { additionalProperties: false },
);

export const GroupPlainInputUpdate = t.Object(
  { name: t.Optional(t.String()) },
  { additionalProperties: false },
);

export const GroupRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const GroupRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const GroupWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          avatar_resource_id: t.String(),
          name: t.String(),
          owner_id: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Group" },
  ),
);

export const GroupWhereUnique = t.Recursive(
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
              avatar_resource_id: t.String(),
              name: t.String(),
              owner_id: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Group" },
);

export const GroupSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      avatar_resource_id: t.Boolean(),
      name: t.Boolean(),
      owner_id: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const GroupInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const GroupOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      avatar_resource_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      owner_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Group = t.Composite([GroupPlain, GroupRelations], {
  additionalProperties: false,
});

export const GroupInputCreate = t.Composite(
  [GroupPlainInputCreate, GroupRelationsInputCreate],
  { additionalProperties: false },
);

export const GroupInputUpdate = t.Composite(
  [GroupPlainInputUpdate, GroupRelationsInputUpdate],
  { additionalProperties: false },
);
