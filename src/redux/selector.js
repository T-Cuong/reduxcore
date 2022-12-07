//noi chua rieng useSelector function
import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities ;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, priorities) => {
        return todoList.filter((todo) => {
            if(status ==='All') {
                return  priorities.length 
                ? todo.name.includes(searchText) && priorities.includes(todo.priority) 
                : todo.name.includes(searchText);//khi priorities  = 0 (dk sai) thi chay doan code phia sau:  
            }
            return (
            todo.name.includes(searchText) && 
            (status === 'Completed'
             ? todo.completed
             : !todo.completed)
            )
        })
    }
)
