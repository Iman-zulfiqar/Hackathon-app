import { Select } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const data = [
     
    {
      label: 'Jack',
      value: 'jack',
    },
    {
      label: 'Lucy',
      value: 'lucy',
    },
    {
      label: 'yiminghe',
      value: 'Yiminghe',
    },
  
]
function FormSelect({defualtvalue='luky',width='200px',onchange={handleChange},options=data}) {
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
