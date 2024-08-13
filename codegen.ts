import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/api/graphql/schema.graphql",
  documents: ["src/api/graphql/queries"],
  generates: {
    "./src/api/graphql/generated/client/": {
      preset: "client-preset",
    },
    "./src/api/graphql/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
