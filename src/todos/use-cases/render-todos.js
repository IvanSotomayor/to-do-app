import { createTodoHTML } from "./create-todo-html";
import { Todo } from "../models/todo.model";

export const renderTodos = (elementId, todos = []) => {
    const element = document.querySelector(elementId);
    todos.forEach(todo => {
        element.append( createTodoHTML(todo));
    });
}