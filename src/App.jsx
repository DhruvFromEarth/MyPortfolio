import './App.css'
import { Navbar } from './components/Navbar'
import MainPage from './pages/mainPage/index'

function App() {

  return (
    <>
    {/* do routing if adding multiple pages */}
      <img src="./red-swirl.png" alt="" id="bg-image" />
      <Navbar />
      {/* <div id='navbar-spacer' /> */}
      <MainPage />
    </>
  )
}

export default App;