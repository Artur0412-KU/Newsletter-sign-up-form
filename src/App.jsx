import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Form from './components/Form'
import SucessForm from './components/SucessForm'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Form />} />
        <Route path="/success" element={<SucessForm />} />
      </Routes>
    </Router>
  )
}

export default App
