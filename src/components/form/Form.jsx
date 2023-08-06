import {  Form, Input } from 'antd';
import FormSelect from './FormSelect';
import FormButton from './FormButton';
import {useState} from 'react'
import './style.css'
import { postData } from '../../apis';
const { TextArea } = Input;

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function FormComp({clickHanddler,setSortedData,customSort}) {
    const [item,setItem]= useState({
        title:'',
        description:'',
        priority:''
    });
    function priorityHanddler(e) {
        setItem((prev)=>({
            ...prev,
            priority:e
   
           })  
           )
    }
    const onFinish = () => {
      postData({clickHanddler,item,setSortedData,customSort})

      };
  return (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    layout="vertical"
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Title"
      name="Title"
      rules={[
        {
          required: true,
          message: 'required',
        },
      ]}
      style={{overflow:'visible'}}
    >
      <Input onChange={(e)=>{
        setItem((prev)=>({
            ...prev,
            title:e.target.value
   
           })  
           )
      }} />
    </Form.Item>

    <Form.Item
      label="Description"
      name="description"
      rules={[
        {
          required: true,
          message: 'required',
        },
      ]}
      style={{overflow:'visible'}}
    >
      <TextArea rows={4} onChange={(e)=>{
        setItem((prev)=>({
         ...prev,
         description:e.target.value

        })  
        )
      }}/>
    </Form.Item>
     
     
    <Form.Item
      label="Priority"
      name="priority"
    >
      <FormSelect onchange={priorityHanddler} />
    </Form.Item>

    <FormButton 
      
       isIcon={false}
       bgcolor='#003b9a'
       text='Submit'
       type='submit'
       textcolor='white'
       borderstyles='1px solid grey'
       
      />
   
  </Form>

  )
}

export default FormComp
