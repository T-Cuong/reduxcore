export const addTodo = (data) => {
    return {
        type:'todoList/addTodo',//doan text mo ta hanh dong  
        payload: data//truyen thong tin nguoi dung nhap tren phia UI
    }
}