import { useState, useEffect } from "react";
import FormButton from '../../../components/form/FormButton'
import {PlusCircleOutlined } from  '@ant-design/icons'
import { Button, Modal } from 'antd';
function AddTodoItem() {

  const [modal2Open, setModal2Open] = useState(false);
  function clickHanddler() {
    setModal2Open(true);
  }
  return (
    <>
      <FormButton 
       icon={<PlusCircleOutlined />}
       isIcon={true}
       bgcolor='#003b9a'
       text='Add'
       textcolor='white'
       borderstyles='1px solid grey'
       clickHanddler={clickHanddler}
      />
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export default AddTodoItem
