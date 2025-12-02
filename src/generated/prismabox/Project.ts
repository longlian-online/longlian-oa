import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ProjectPlain = t.Object(
  {
    id: t.String(),
    group_id: t.String(),
    priority: t.Integer(),
    title: t.String(),
    description: t.String(),
    author: t.String(),
    director_id: t.String(),
    created_at: t.Date(),
    passed_at: __nullable__(t.Date()),
    deleted_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const ProjectRelations = t.Object({}, { additionalProperties: false });

export const ProjectPlainInputCreate = t.Object(
  {
    priority: t.Integer(),
    title: t.String(),
    description: t.Optional(t.String()),
    author: t.Optional(t.String()),
    created_at: t.Optional(t.Date()),
    passed_at: t.Optional(__nullable__(t.Date())),
    deleted_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const ProjectPlainInputUpdate = t.Object(
  {
    priority: t.Optional(t.Integer()),
    title: t.Optional(t.String()),
    description: t.Optional(t.String()),
    author: t.Optional(t.String()),
    created_at: t.Optional(t.Date()),
    passed_at: t.Optional(__nullable__(t.Date())),
    deleted_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const ProjectRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const ProjectRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const ProjectWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          group_id: t.String(),
          priority: t.Integer(),
          title: t.String(),
          description: t.String(),
          author: t.String(),
          director_id: t.String(),
          created_at: t.Date(),
          passed_at: t.Date(),
          deleted_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Project" },
  ),
);

export const ProjectWhereUnique = t.Recursive(
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
              priority: t.Integer(),
              title: t.String(),
              description: t.String(),
              author: t.String(),
              director_id: t.String(),
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
  { $id: "Project" },
);

export const ProjectSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      group_id: t.Boolean(),
      priority: t.Boolean(),
      title: t.Boolean(),
      description: t.Boolean(),
      author: t.Boolean(),
      director_id: t.Boolean(),
      created_at: t.Boolean(),
      passed_at: t.Boolean(),
      deleted_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ProjectInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const ProjectOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      group_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      priority: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      author: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      director_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Project = t.Composite([ProjectPlain, ProjectRelations], {
  additionalProperties: false,
});

export const ProjectInputCreate = t.Composite(
  [ProjectPlainInputCreate, ProjectRelationsInputCreate],
  { additionalProperties: false },
);

export const ProjectInputUpdate = t.Composite(
  [ProjectPlainInputUpdate, ProjectRelationsInputUpdate],
  { additionalProperties: false },
);
