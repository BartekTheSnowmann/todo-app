import { useState } from "react";
import Modal from "./components/Modal";
import TodoContainer from "./components/TodoContainer";
import { AnimatePresence } from "framer-motion";


function App() {

  const [filter, setFilter] = useState('All')

  const [showModal, SetShowModal] = useState(false)
  const ToggleModal = () =>
  {
    SetShowModal(!showModal)
  }

  return (
    <div className="AnimatedGradient h-screen flex items-center justify-center p-2 lg:p-0 bg-primary">
      <AnimatePresence>
      {showModal && <Modal ModalType='Add' ToggleModal={ToggleModal}/>}
      </AnimatePresence>
      <div className="w-[800px] text-center">
          <h1 className="text-5xl my-4 text-white">TODO APP</h1>
          <div className="flex justify-between">
            <button onClick={ToggleModal} className='bg-quaternary shadow-lg text-white'>Add Todo</button>
            <select className='bg-white'
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
