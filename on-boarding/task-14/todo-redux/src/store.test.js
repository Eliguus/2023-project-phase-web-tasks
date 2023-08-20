describe('End-to-End Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a new task and display it in the task list', () => {
    const taskText = 'New Task';

    // Type a task in the input field
    cy.get('input[type="text"]').type(taskText);

    // Click the "Add Todo" button
    cy.get('button[type="submit"]').click();

    // Verify that the new task is added to the list
    cy.contains('.task-item', taskText);
  });

  it('should toggle the task filter when the filter button is clicked', () => {
    // Click the filter button to toggle the filter
    cy.get('.filterbutton').click();

    // Verify that the filter has changed to show completed tasks
    cy.contains('.filterbutton', 'Show All Tasks').should('be.visible');

    // Click the filter button again to toggle the filter back
    cy.get('.filterbutton').click();

    // Verify that the filter has changed back to show all tasks
    cy.contains('.filterbutton', 'Show Completed Tasks').should('be.visible');
  });

  it('should delete a task when the delete button is clicked', () => {
    // Add a new task
    const taskText = 'Task to Delete';
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Find the newly added task and click the delete button
    cy.contains('.task-item', taskText)
      .find('.delete-button')
      .click();

    // Verify that the task is deleted and not visible in the task list
    cy.contains('.task-item', taskText).should('not.exist');
  });

  it('should toggle the completed status of a task when the checkbox is clicked', () => {
    // Add a new task
    const taskText = 'Task to Toggle';
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Find the newly added task and click the checkbox
    cy.contains('.task-item', taskText)
      .find('input[type="checkbox"]')
      .click();

    // Verify that the task's completed status is toggled
    cy.contains('.task-item.completed', taskText).should('be.visible');
  });

  it('should edit a task when the edit button is clicked', () => {
    // Add a new task
    const initialTaskText = 'Task to Edit';
    const updatedTaskText = 'Updated Task';
    cy.get('input[type="text"]').type(initialTaskText);
    cy.get('button[type="submit"]').click();

    // Find the newly added task and click the edit button
    cy.contains('.task-item', initialTaskText)
      .find('.edit-button')
      .click();

    // Update the task text in the input field and submit the form
    cy.get('input[type="text"]').clear().type(updatedTaskText);
    cy.get('button[type="submit"]').click();

    // Verify that the task text is updated in the task list
    cy.contains('.task-item', updatedTaskText).should('be.visible');
  });
});