
function AddTodoItem() {
  return (
    <div>
       <Modal
        title="20px to Top"
        style={{ top: 20 }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some conten
    </div>
  )
}

export default AddTodoItem
