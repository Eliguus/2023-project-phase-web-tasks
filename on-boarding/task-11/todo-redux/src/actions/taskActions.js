import { v4 as uuid } from 'uuid';

export const addTask = (title) => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: uuid(),
      title,
      completed: false,
    },
  };
};

export const updateTask = (taskId, updatedTask) => {
  return {
    type: 'tasks/updateTask',
    payload: {
      taskId,
      updatedTask,
    },
  };
};

export const removeTask = (taskId) => {
  return {
    type: 'tasks/removeTask',
    payload: taskId,
  };
};

export const setFilter = (filter) => {
  return {
    type: 'tasks/setFilter',
    payload: filter,
  };
};

export const startEditingTask = (taskId) => {
  return {
    type: 'tasks/startEditingTask',
    payload: taskId,
  };
};

export const cancelEditingTask = () => {
  return {
    type: 'tasks/cancelEditingTask',
  };
};

export const saveEditedTask = (taskId, updatedTitle) => {
  return {
    type: 'tasks/saveEditedTask',
    payload: {
      taskId,
      updatedTitle,
    },
  };
};