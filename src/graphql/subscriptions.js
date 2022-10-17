/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCards = /* GraphQL */ `
  subscription OnCreateCards {
    onCreateCards {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCards = /* GraphQL */ `
  subscription OnUpdateCards {
    onUpdateCards {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCards = /* GraphQL */ `
  subscription OnDeleteCards {
    onDeleteCards {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($owner: String) {
    onCreateTask(owner: $owner) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($owner: String) {
    onUpdateTask(owner: $owner) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($owner: String) {
    onDeleteTask(owner: $owner) {
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
