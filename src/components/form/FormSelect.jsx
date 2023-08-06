import { Select } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const data = [
     
    {
      label: 'Critical Task',
      value: 'Critical Task',
    },
    {
      label: 'Urgent task',
      value: 'Urgent task',
    },
    {
      label: 'Normal Task',
      value: 'Normal Task',
    },
    
  
]
function FormSelect({defualtvalue='Critical Task',width='200px',onchange={handleChange},options=data}) {
  return (
 <div> <Select
    defaultValue={defualtvalue}
    style={{
      width: width,
    }}
    onChange={onchange}
    options={options}
  />
    </div>
  )
}

export default FormSelect
