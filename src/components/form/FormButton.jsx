import React, { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';

function FormButton({icon=<PoweroffOutlined/>,
isIcon=true,bgcolor='#ffffff',
text='submit',
textcolor='#262626',
borderstyles='1px solid grey',
size='large',
clickHanddler}) {
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 6000);
    };
  return (
   
        
        <Button
           style={
            {  
                background:bgcolor,
                color:textcolor,
                border:borderstyles,
                display:'flex',
                alignItems:'center',
               
            }
           }
          icon={isIcon ? icon : false}
          size={size}
          loading={loadings[1]}
          onClick={() =>{ clickHanddler()}}
        >
          {text}
        </Button>
      
  );   
}

export default FormButton

