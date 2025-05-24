import './App.css'
import { Navbar } from './components/Navbar'
import MainPage from './pages/mainPage/index'

function App() {

  return (
    <>
      <Navbar />
      {/* <div id='navbar-spacer' /> */}
      {/* do routing if adding multiple pages */}
      <MainPage />
    </>
  )
}

export default App;