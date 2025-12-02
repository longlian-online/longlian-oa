import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ResourcePlain = t.Object(
  { id: t.String(), bucket: t.String(), region: t.String(), key: t.String() },
  { additionalProperties: false },
);

export const ResourceRelations = t.Object({}, { additionalProperties: false });

export const ResourcePlainInputCreate = t.Object(
  { bucket: t.String(), region: t.String(), key: t.String() },
  { additionalProperties: false },
);

export const ResourcePlainInputUpdate = t.Object(
  {
    bucket: t.Optional(t.String()),
    region: t.Optional(t.String()),
    key: t.Optional(t.String()),
  },
  { additionalProperties: false },
);

export const ResourceRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const ResourceRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const ResourceWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          bucket: t.String(),
          region: t.String(),
          key: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Resource" },
  ),
);

export const ResourceWhereUnique = t.Recursive(
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
              bucket: t.String(),
              region: t.String(),
              key: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Resource" },
);

export const ResourceSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      bucket: t.Boolean(),
      region: t.Boolean(),
      key: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ResourceInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const ResourceOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      bucket: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      region: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      key: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Resource = t.Composite([ResourcePlain, ResourceRelations], {
  additionalProperties: false,
});

export const ResourceInputCreate = t.Composite(
  [ResourcePlainInputCreate, ResourceRelationsInputCreate],
  { additionalProperties: false },
);

export const ResourceInputUpdate = t.Composite(
  [ResourcePlainInputUpdate, ResourceRelationsInputUpdate],
  { additionalProperties: false },
);
