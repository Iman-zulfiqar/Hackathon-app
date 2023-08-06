import { useState } from "react";
import FormButton from '../../../components/form/FormButton'
import {PlusCircleOutlined } from  '@ant-design/icons'
import {  Modal } from 'antd';

import FormComp from "../../../components/form/Form";
function AddTodoItem({customSort,setSortedData}) {

  const [modal2Open, setModal2Open] = useState(false);
  function clickHanddler() {
    setModal2Open(!modal2Open);
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
        title="Add Todo Item"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
       <FormComp clickHanddler={clickHanddler} setSortedData={setSortedData} customSort={customSort}/>
      </Modal>
    </>
  )
}

export default AddTodoItem
