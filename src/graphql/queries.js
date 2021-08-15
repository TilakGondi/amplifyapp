/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAmplifyApp = /* GraphQL */ `
  query GetAmplifyApp($id: ID!) {
    getAmplifyApp(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listAmplifyApps = /* GraphQL */ `
  query ListAmplifyApps(
    $filter: ModelAmplifyAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmplifyApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
