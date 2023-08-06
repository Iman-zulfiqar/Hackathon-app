import { useState, useEffect } from "react";
import ListItem from "../../../components/list/ListItem";
import MenuDropdown from "../../../components/list/MenuDropdown";
function TodoListComp({searchValue}) {

  const [sortedData, setSortedData]=useState([]);
  function customSort (task1, task2) 
     {
      return priorities[task1.priority] - priorities[task2.priority];
  }
let  priorities = 
{
  'urgent' : 1, 
  'critical' : 0,
  'normal' : 2,

}
const [filteredData,setfilteredData]= useState([]);
useEffect(()=>{
 if (searchValue != '') {
 const data= sortedData.filter((item)=>{
    return  item.title.includes(searchValue) || item.description.includes(searchValue)
  })
  setfilteredData(data);
  }
},[searchValue])
  const items = [
   {
     label: <a href="https://www.antgroup.com">Delete</a>,
     key: '0',
   },
   {    type: 'divider',
   },
   {
     label: <a href="https://www.aliyun.com">Edit</a>,
     key: '2',
   },
   
 ];
   const getData=()=>{
     fetch('data.json'
     ,{
       headers : { 
         'Content-Type': 'application/json',
         'Accept': 'application/json'
        }
     }
     )
       .then(function(response){
         return response.json();
       })
       .then(function(myJson) {
         setSortedData(myJson.sort(customSort))
       });
   }
   const ListData = (filteredData.length != 0 && searchValue != '') ? filteredData : sortedData
   useEffect(()=>{
     getData()
   },[])
  return (
    <div className="w-[80%] bg-[#d3d3d3] rounded-2xl mx-auto gap-x-4 flex flex-wrap p-8 shadow-md gap-y-2" style={{height:'70vh'}}>
       { ListData.map((item, index)=>{
        return  <ListItem key={index} title={item.title}
        extra= {<MenuDropdown options={{items}} />}
        width='300px' 
        titleFontSize='12px'
        contentFontSize='10px'
        content={item.description}
        bgcolor={(()=>{
          if(item.priority =="critical"){
          return   '#e60000'
          }else if (item.priority == 'normal'){
                  return '#008000'
          }
          else {
            return '#ffff62'
          }
        })()}></ListItem>
       })}
       </div>
  )
}

export default TodoListComp
