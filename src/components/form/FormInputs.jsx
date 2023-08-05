// import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd'

function FormInputs({size='large',placeholder='Enter Something',prefix=<UserOutlined/> }) {
  return (
    <div>
     <Input size={size} placeholder={placeholder} prefix={prefix} />
    </div>
  )
}

export default FormInputs
