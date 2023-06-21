import '@tabler/core/dist/css/tabler.css'
import '@tabler/core/dist/js/tabler.js'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>} />
      </Routes>
    </>
  )
}

export default App
