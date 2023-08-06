import { useState } from "react";
import FormButton from '../../../components/form/FormButton'
import {PlusCircleOutlined } from  '@ant-design/icons'
import ModalComp from "../../../components/form/ModalComp";
import { postData } from "../../../apis";
function AddTodoItem({customSort,setSortedData,titleValue,descriptionValue,priorityValue}) {

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
      <ModalComp  title="Add Todo Item" modal2Open={modal2Open} setModal2Open={setModal2Open} clickHanddler={clickHanddler} setSortedData={setSortedData} 
       customSort={customSort}
       ApiInstance={postData}
       />
    </>
  )
}

export default AddTodoItem
