import NavbarComp from "./navbar/NavbarComp"
import {  Input } from 'antd';
import {useState,useEffect} from 'react'
import TodoListComp from "./TodoList/TodoListComp";
import AddTodoItem from './TodoList/AddTodoItem'
import { getData } from "../../apis";
import './style.css'
const { Search } = Input;
function TodoList() {
  const [searchValue, setSearchValue]= useState();
  const [sortedData, setSortedData]=useState([]);
  const [filteredData,setfilteredData]= useState([]);
  const onSearch = (value) =>{ setSearchValue(value)};
  let  priorities = 
  {
    'urgent' : 1, 
    'critical' : 0,
    'normal' : 2,
  
  }
  const ListData = (searchValue ) ? filteredData : sortedData
  function customSort (task1, task2) 
     {
      return priorities[task1.priority] - priorities[task2.priority];
  }
useEffect(()=>{
 if (searchValue != '') {
 const data= sortedData.filter((item)=>{
    return  item.title.includes(searchValue) || item.description.includes(searchValue)
  })
  setfilteredData(data);
  }
},[searchValue])
 
   useEffect(()=>{
     getData({setSortedData,customSort})
   },[])
  return (
   <>  <NavbarComp></NavbarComp>
    <div className="h-[90vh] flex flex-col justify-center gap-4 items-center">
       <div className="w-[80%] flex  items-center gap-3 mx-auto">
        <Search placeholder="type to search..." size="large" className="max-w-[300px] w-full bg-[#e6e6e6]  rounded-2xl self-start" onSearch={onSearch} />
        
        <AddTodoItem setSortedData={setSortedData} customSort={customSort} />
        </div>
       <TodoListComp ListData={ListData} setSortedData={setSortedData} customSort={customSort} />
       
     
    </div></>
  )
}

export default TodoList;
