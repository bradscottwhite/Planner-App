/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCards = /* GraphQL */ `
  mutation CreateCards(
    $input: CreateCardsInput!
    $condition: ModelCardsConditionInput
  ) {
    createCards(input: $input, condition: $condition) {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;
export const updateCards = /* GraphQL */ `
  mutation UpdateCards(
    $input: UpdateCardsInput!
    $condition: ModelCardsConditionInput
  ) {
    updateCards(input: $input, condition: $condition) {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;
export const deleteCards = /* GraphQL */ `
  mutation DeleteCards(
    $input: DeleteCardsInput!
    $condition: ModelCardsConditionInput
  ) {
    deleteCards(input: $input, condition: $condition) {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
