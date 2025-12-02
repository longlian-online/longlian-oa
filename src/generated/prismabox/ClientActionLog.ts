import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ClientActionLogPlain = t.Object(
  {
    id: t.String(),
    action: t.Integer(),
    created_at: t.Date(),
    request_params: t.Any(),
    user_id: t.String(),
  },
  { additionalProperties: false },
);

export const ClientActionLogRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const ClientActionLogPlainInputCreate = t.Object(
  {
    action: t.Integer(),
    created_at: t.Optional(t.Date()),
    request_params: t.Any(),
  },
  { additionalProperties: false },
);

export const ClientActionLogPlainInputUpdate = t.Object(
  {
    action: t.Optional(t.Integer()),
    created_at: t.Optional(t.Date()),
    request_params: t.Optional(t.Any()),
  },
  { additionalProperties: false },
);

export const ClientActionLogRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const ClientActionLogRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const ClientActionLogWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          action: t.Integer(),
          created_at: t.Date(),
          request_params: t.Any(),
          user_id: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "ClientActionLog" },
  ),
);

export const ClientActionLogWhereUnique = t.Recursive(
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
              action: t.Integer(),
              created_at: t.Date(),
              request_params: t.Any(),
              user_id: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "ClientActionLog" },
);

export const ClientActionLogSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      action: t.Boolean(),
      created_at: t.Boolean(),
      request_params: t.Boolean(),
      user_id: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ClientActionLogInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const ClientActionLogOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      action: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      request_params: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const ClientActionLog = t.Composite(
  [ClientActionLogPlain, ClientActionLogRelations],
  { additionalProperties: false },
);

export const ClientActionLogInputCreate = t.Composite(
  [ClientActionLogPlainInputCreate, ClientActionLogRelationsInputCreate],
  { additionalProperties: false },
);

export const ClientActionLogInputUpdate = t.Composite(
  [ClientActionLogPlainInputUpdate, ClientActionLogRelationsInputUpdate],
  { additionalProperties: false },
);
