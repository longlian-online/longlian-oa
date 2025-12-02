import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const UserPlain = t.Object(
  {
    id: t.String(),
    group_id: t.String(),
    nickname: t.String(),
    username: t.String(),
    password: t.String(),
    email: t.String(),
    avatar_resource_id: t.String(),
    created_at: t.Date(),
    passed_at: __nullable__(t.Date()),
    deleted_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const UserRelations = t.Object({}, { additionalProperties: false });

export const UserPlainInputCreate = t.Object(
  {
    nickname: t.String(),
    username: t.String(),
    password: t.String(),
    email: t.Optional(t.String()),
    created_at: t.Optional(t.Date()),
    passed_at: t.Optional(__nullable__(t.Date())),
    deleted_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const UserPlainInputUpdate = t.Object(
  {
    nickname: t.Optional(t.String()),
    username: t.Optional(t.String()),
    password: t.Optional(t.String()),
    email: t.Optional(t.String()),
    created_at: t.Optional(t.Date()),
    passed_at: t.Optional(__nullable__(t.Date())),
    deleted_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const UserRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const UserRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const UserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          group_id: t.String(),
          nickname: t.String(),
          username: t.String(),
          password: t.String(),
          email: t.String(),
          avatar_resource_id: t.String(),
          created_at: t.Date(),
          passed_at: t.Date(),
          deleted_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "User" },
  ),
);

export const UserWhereUnique = t.Recursive(
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
              nickname: t.String(),
              username: t.String(),
              password: t.String(),
              email: t.String(),
              avatar_resource_id: t.String(),
              created_at: t.Date(),
              passed_at: t.Date(),
              deleted_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "User" },
);

export const UserSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      group_id: t.Boolean(),
      nickname: t.Boolean(),
      username: t.Boolean(),
      password: t.Boolean(),
      email: t.Boolean(),
      avatar_resource_id: t.Boolean(),
      created_at: t.Boolean(),
      passed_at: t.Boolean(),
      deleted_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UserInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const UserOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      group_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      nickname: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      username: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      password: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      avatar_resource_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      passed_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      deleted_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const User = t.Composite([UserPlain, UserRelations], {
  additionalProperties: false,
});

export const UserInputCreate = t.Composite(
  [UserPlainInputCreate, UserRelationsInputCreate],
  { additionalProperties: false },
);

export const UserInputUpdate = t.Composite(
  [UserPlainInputUpdate, UserRelationsInputUpdate],
  { additionalProperties: false },
);
