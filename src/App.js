import './App.css';
import Header from './Header';
import {Routes,Route} from "react-router-dom"
import Commonpage from './Commonpage';
import Service from './Service';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/home' element={<Commonpage mainhead="Grow your business with"  btn="Get Started" img1="https://media.istockphoto.com/photos/woman-working-on-laptop-at-desk-laptop-mockup-picture-id1308589738?k=20&m=1308589738&s=612x612&w=0&h=mkyQFAju6vM7ManPcjmblqh6RDg08d3Z2rURhInHUq8="/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/about' element={<Commonpage mainhead="Welcome to About Page" btn="Contact here" img1="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_960_720.jpg"/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route  element={<Error/>}></Route>
    </Routes>
    </>
  )
  }
export default App;
