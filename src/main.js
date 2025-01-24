import './style.css'
import { App } from "./todos/app";
import { todostore }  from "./store/todo.store";

todostore.initStore();

App('#app');