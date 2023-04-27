import { useState } from "react";
import Modal from "./components/Modal";
import TodoContainer from "./components/TodoContainer";


function App() {

  const [filter, setFilter] = useState('All')

  const [showModal, SetShowModal] = useState(false)
  const ToggleModal = () =>
  {
    SetShowModal(!showModal)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-2 lg:p-0 bg-primary">
      {showModal && <Modal ModalType='Add' ToggleModal={ToggleModal}/>}
      <div className="w-[800px] text-center">
          <h1 className="text-5xl my-4 text-white">TODO APP</h1>
          <div className="flex justify-between">
            <button onClick={ToggleModal} className='bg-quaternary text-white'>Add Todo</button>
            <select
            onChange={e=>setFilter(e.target.value)}>
              <option value='All'>All</option>
              <option value='Completed'>Completed</option>
              <option value='Incompleted'>Incompleted</option>
            </select>
          </div>
        <TodoContainer filter={filter} showModal={showModal} />
      </div>
    </div>
  );
}

export default App;
