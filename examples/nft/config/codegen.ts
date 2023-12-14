import { CodegenConfig } from '@graphql-codegen/cli';
import { STARGAZE_GRAPHQL_ENDPOINT } from '.';

const config: CodegenConfig = {
  schema: STARGAZE_GRAPHQL_ENDPOINT,
  documents: './config/documents.ts',
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './gql/': {
      preset: 'client',
    },
  },
};

export default config;
