import axios from "axios";

export default {
    // get todos from the /api/todos route on our express server
    getTodos: () => {
        return axios.get("/api/todos")
    },
    // Create a todo by making a POST request to /ap/todo on the Express server
    createNewTodo: (newToDo) => {
        return axios.post("/api/todo", newToDo);
    }
}