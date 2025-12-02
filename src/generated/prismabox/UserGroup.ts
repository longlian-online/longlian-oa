import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const UserGroupPlain = t.Object(
  {
    id: t.String(),
    group_id: t.String(),
    user_id: t.String(),
    role: t.Union(
      [
        t.Literal("Guest"),
        t.Literal("Member"),
        t.Literal("Admin"),
        t.Literal("Owner"),
      ],
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const UserGroupRelations = t.Object({}, { additionalProperties: false });

export const UserGroupPlainInputCreate = t.Object(
  {
    role: t.Union(
      [
        t.Literal("Guest"),
        t.Literal("Member"),
        t.Literal("Admin"),
        t.Literal("Owner"),
      ],
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const UserGroupPlainInputUpdate = t.Object(
  {
    role: t.Optional(
      t.Union(
        [
          t.Literal("Guest"),
          t.Literal("Member"),
          t.Literal("Admin"),
          t.Literal("Owner"),
        ],
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const UserGroupRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const UserGroupRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const UserGroupWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          group_id: t.String(),
          user_id: t.String(),
          role: t.Union(
            [
              t.Literal("Guest"),
              t.Literal("Member"),
              t.Literal("Admin"),
              t.Literal("Owner"),
            ],
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    { $id: "UserGroup" },
  ),
);

export const UserGroupWhereUnique = t.Recursive(
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
              user_id: t.String(),
              role: t.Union(
                [
                  t.Literal("Guest"),
                  t.Literal("Member"),
                  t.Literal("Admin"),
                  t.Literal("Owner"),
                ],
                { additionalProperties: false },
              ),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "UserGroup" },
);

export const UserGroupSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      group_id: t.Boolean(),
      user_id: t.Boolean(),
      role: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UserGroupInclude = t.Partial(
  t.Object(
    { role: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const UserGroupOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      group_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const UserGroup = t.Composite([UserGroupPlain, UserGroupRelations], {
  additionalProperties: false,
});

export const UserGroupInputCreate = t.Composite(
  [UserGroupPlainInputCreate, UserGroupRelationsInputCreate],
  { additionalProperties: false },
);

export const UserGroupInputUpdate = t.Composite(
  [UserGroupPlainInputUpdate, UserGroupRelationsInputUpdate],
  { additionalProperties: false },
);
