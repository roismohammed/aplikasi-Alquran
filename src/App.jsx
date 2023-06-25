import '@tabler/core/dist/css/tabler.css'
import '@tabler/core/dist/js/tabler.js'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import Detail from './pages/HalamanTampilan/Detail'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/detail/:nomor' element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
