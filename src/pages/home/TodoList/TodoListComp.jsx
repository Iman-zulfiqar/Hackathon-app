
import ListItem from "../../../components/list/ListItem";
import MenuDropdown from "../../../components/list/MenuDropdown";

function TodoListComp({ListData}) {

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

  return (
    <div className="w-[80%] bg-[#d3d3d3] rounded-2xl mx-auto gap-x-4 flex flex-wrap p-8 shadow-md gap-y-2" style={{height:'70vh'}}>
       {ListData.length !=0 ? ListData.map((item, index)=>{
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
       }): <p>No data found please try with exact case...</p>}
       </div>
  )
}

export default TodoListComp
