import  { useState } from 'react';
import {  Modal } from 'antd';
import FormButton from '../form/FormButton';
import { deleteData } from '../../apis';
function DeleteModalComp({open,setOpen,setSortedData,customSort}) {
   
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Are you sure you wanna delete this item?');

    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    };
    function handleCancel() {
      console.log('Clicked cancel button');
      setOpen(false);
    }
    return (
      <>
        <Modal
          title="Delete"
          open={open}
          onOk={handleOk}
          centered
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>{modalText}</p>
          <br></br>
      <div className="flex w-full gap-5 items-center">   <FormButton
         isIcon={false}
         bgcolor='#ffffff'
         text='Cancel'
         textcolor='#262626'
         borderstyles='1px solid grey'
         size='medium'
         clickHanddler={()=>{
            setOpen(!open)
         }}
         type='button'
         />
            <FormButton
         isIcon={false}
         bgcolor='#e60000'
         text='Delete'
         textcolor='#ffffff'
         borderstyles='none'
         size='medium'
         clickHanddler={()=>{
         
            deleteData({setOpen,setSortedData,customSort});
         }}
         type='button'
         /></div>
        </Modal>
      </>)
}

export default DeleteModalComp
