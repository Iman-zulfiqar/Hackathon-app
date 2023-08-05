
import NavbarComp from "./navbar/NavbarComp"
import { Button, Input } from 'antd';
import TodoListComp from "./TodoList/TodoListComp";
import FormButton from "../../components/form/formButton";
import {PlusCircleOutlined } from  '@ant-design/icons'
import './style.css'
const { Search } = Input;
const onSearch = (value) => console.log(value);

function TodoList() {
  return (
   <>  <NavbarComp></NavbarComp>
    <div className="h-[90vh] flex flex-col justify-center gap-4 items-center">
       <div className="w-[80%] flex  items-center gap-3 mx-auto">
        <Search placeholder="type to search..." size="large" className="max-w-[300px] w-full bg-[#e6e6e6]  rounded-2xl self-start" onSearch={onSearch} />
        <FormButton
        icon={<PlusCircleOutlined />}
        isIcon={true}
        bgcolor='#003b9a'
        text='Add'
        textcolor='white'
        borderstyles='1px solid grey'
        />
        </div>
       <TodoListComp/>
       
     
    </div></>
  )
}

export default TodoList;
