import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const TagRelatePlain = t.Object(
  { id: t.String(), tag_id: t.String(), related_id: t.String() },
  { additionalProperties: false },
);

export const TagRelateRelations = t.Object({}, { additionalProperties: false });

export const TagRelatePlainInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const TagRelatePlainInputUpdate = t.Object(
  {},
  { additionalProperties: false },
);

export const TagRelateRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const TagRelateRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const TagRelateWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          tag_id: t.String(),
          related_id: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "TagRelate" },
  ),
);

export const TagRelateWhereUnique = t.Recursive(
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
            { id: t.String(), tag_id: t.String(), related_id: t.String() },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "TagRelate" },
);

export const TagRelateSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      tag_id: t.Boolean(),
      related_id: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const TagRelateInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const TagRelateOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tag_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      related_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const TagRelate = t.Composite([TagRelatePlain, TagRelateRelations], {
  additionalProperties: false,
});

export const TagRelateInputCreate = t.Composite(
  [TagRelatePlainInputCreate, TagRelateRelationsInputCreate],
  { additionalProperties: false },
);

export const TagRelateInputUpdate = t.Composite(
  [TagRelatePlainInputUpdate, TagRelateRelationsInputUpdate],
  { additionalProperties: false },
);
