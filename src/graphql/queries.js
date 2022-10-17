/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCards = /* GraphQL */ `
  query GetCards($id: ID!) {
    getCards(id: $id) {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        order
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      text
      complete
      card
      priority
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        complete
        card
        priority
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
