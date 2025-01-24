import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra de la muerte')
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state)
    console.log('InitStore');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {
    switch (filter){
        case Filters.All:
            return [...state.todos];
        
            case Filters.Completed:
                return state.todos.filter(todo => todo.done);

                case Filters.Pending:
                    return state.todos.filter(todo => !todo.done);

        default:
            throw new Error("Option is not valid");
    }
}

const addTodo = ( description ) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
}

const toggleTodo = (todoID) => {
    state.todos = state.todos.map( todo => {
        if( todo.id === todoID){
            todo.done = !todo.done;
        }
        return todo;
    })
}

const deleteTodo = (todoID) => {
    state.todos = state.todos.filter(todo => todo.id !== todoID);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodos
}