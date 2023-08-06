import ModalComp from "../form/ModalComp"
import { updateData } from "../../apis"
function EditModal({modal2Open,setSortedData,customSort,setModal2Open}) {
 function clickHanddler() {
    setModal2Open(false)
 }
 const data = JSON.parse(localStorage.getItem('data'))
  return (
    <div>
         <ModalComp  title="Add Todo Item" modal2Open={modal2Open} setModal2Open={setModal2Open} clickHanddler={clickHanddler} setSortedData={setSortedData} 
       customSort={customSort}
       titleValue={JSON.parse(localStorage.getItem('data')).title}
       descriptionValue={JSON.parse(localStorage.getItem('data')).description}
       priorityValue={JSON.parse(localStorage.getItem('data')).priority}
       ApiInstance={updateData}
       required={false}
       />
 
    </div>
  )
}

export default EditModal
