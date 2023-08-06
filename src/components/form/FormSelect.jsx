import { Select } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const data = [
     
    {
      label: 'Critical Task',
      value: 'critical',
    },
    {
      label: 'Urgent task',
      value: 'urgent',
    },
    {
      label: 'Normal Task',
      value: 'normal',
    },
    
  
]
function FormSelect({defualtvalue='Select',width='200px',onchange={handleChange},options=data}) {
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
