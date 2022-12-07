export const addTodo = (data) => {
    return {
        type:'todoList/addTodo',//doan text mo ta hanh dong  
        payload: data//truyen thong tin nguoi dung nhap tren phia UI
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId, 
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text//du lieu nguoi dung go
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filter/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priorities) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: priorities,
    }
}