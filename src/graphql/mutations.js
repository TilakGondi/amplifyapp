/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAmplifyApp = /* GraphQL */ `
  mutation CreateAmplifyApp(
    $input: CreateAmplifyAppInput!
    $condition: ModelAmplifyAppConditionInput
  ) {
    createAmplifyApp(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateAmplifyApp = /* GraphQL */ `
  mutation UpdateAmplifyApp(
    $input: UpdateAmplifyAppInput!
    $condition: ModelAmplifyAppConditionInput
  ) {
    updateAmplifyApp(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteAmplifyApp = /* GraphQL */ `
  mutation DeleteAmplifyApp(
    $input: DeleteAmplifyAppInput!
    $condition: ModelAmplifyAppConditionInput
  ) {
    deleteAmplifyApp(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
