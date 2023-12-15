import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import InputArea from './components/InputArea';
import Footer from './components/Footer';

function App() {
  const [style, setStyle] = useState({background:"white", color:"black"})
  const setMode=(e)=>{
    if(e){
      setStyle(
        {
          background:"black",
          color:"white"
        }
      )
    }
    else{
      setStyle(
        {
          background:"white",
          color:"black"
        }
      )
    }
  }
  return (
    <div className="App">
      <Navbar setMode={setMode} style={style}></Navbar>
      <InputArea style={style}></InputArea>
      <Footer></Footer>
    </div>
  );
}

export default App;
