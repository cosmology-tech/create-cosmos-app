import { CodegenConfig } from '@graphql-codegen/cli';
import { stargazeGraphQLEndpoint } from './defaults';

const config: CodegenConfig = {
  schema: stargazeGraphQLEndpoint,
  documents: './config/documents.ts',
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './gql/': {
      preset: 'client',
    },
  },
};

export default config;
