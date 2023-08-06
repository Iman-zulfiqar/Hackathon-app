import NavbarComp from "./navbar/NavbarComp"
import {  Input } from 'antd';
import {useState} from 'react'
import TodoListComp from "./TodoList/TodoListComp";
import AddTodoItem from './TodoList/AddTodoItem'
import './style.css'
const { Search } = Input;
function TodoList() {
  const [searchValue, setSearchValue]= useState();
  const onSearch = (value) =>{ setSearchValue(value)};
  return (
   <>  <NavbarComp></NavbarComp>
    <div className="h-[90vh] flex flex-col justify-center gap-4 items-center">
       <div className="w-[80%] flex  items-center gap-3 mx-auto">
        <Search placeholder="type to search..." size="large" className="max-w-[300px] w-full bg-[#e6e6e6]  rounded-2xl self-start" onSearch={onSearch} />
        
        <AddTodoItem/>
        </div>
       <TodoListComp searchValue={searchValue} />
       
     
    </div></>
  )
}

export default TodoList;
