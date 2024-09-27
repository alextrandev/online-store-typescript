import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoreNavBar from './components/StoreNavBar'
import List from './components/List'

function App() {

  return (
    <>
      <StoreNavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
