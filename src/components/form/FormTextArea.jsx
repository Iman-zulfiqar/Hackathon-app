// import React from 'react'
import { Input } from 'antd';
const { TextArea } = Input;
const onChange = (e) => {
  console.log('Change:', e.target.value);
};

function FormTextArea({showCount=true,maxLength=100, textAreaheight='120px', marginBottom='24',placeholder='Enter some text',onchange={onChange}}) {
  return (
    <div>
       <TextArea
      showCount={showCount}
      maxLength={maxLength}
      style={{
        height: textAreaheight,
        marginBottom: marginBottom,
      }}
      onChange={onchange}
      placeholder={placeholder}
    />
    
    </div>
  )
}

export default FormTextArea;
