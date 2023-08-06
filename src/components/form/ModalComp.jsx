import {  Modal } from 'antd';
import FormComp from './Form';

function ModalComp({title,clickHanddler,modal2Open,setModal2Open,customSort,setSortedData,titleValue,descriptionValue,priorityValue,ApiInstance,required}) {
  return (
    <>
         <Modal
        title={title}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
       <FormComp 
       clickHanddler={clickHanddler} 
       setSortedData={setSortedData} 
       customSort={customSort}
       titleValue={titleValue}
       descriptionValue={descriptionValue}
       priorityValue={priorityValue}
       ApiInstance={ApiInstance}
       required={required}
       />
      </Modal>
    </>
  )
}

export default ModalComp
