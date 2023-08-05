function NavbarComp() {
  return (
    <div className="w-[100vw] bg-[#003b9a] h-[10vh] flex justify-between p-4 px-6 overflow-hidden items-center shadow-lg">
      <h1 className="text-white" style={{fontSize:'calc(18px + 1vw)'}}>My Todo List</h1>
      <a href="#" className="text-white underline" style={{fontSize:'calc(12px + .5vw)'}}> Customize App</a>
    </div>
  )
}

export default NavbarComp
