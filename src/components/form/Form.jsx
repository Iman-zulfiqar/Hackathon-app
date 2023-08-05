import {  Form, Input } from 'antd';
import FormSelect from './FormSelect';
import FormButton from './FormButton';
import './style.css'
const { TextArea } = Input;
const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
function FormComp() {
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
      <Input />
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
      <TextArea rows={4} />
    </Form.Item>
     
     
    <Form.Item
      label="Priority"
      name="Priority"
    >
      <FormSelect  />
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
