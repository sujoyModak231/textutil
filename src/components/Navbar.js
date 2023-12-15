import React,{useState} from 'react'

export default function Navbar(props) {
    const [btnText, setBtnText] = useState("Dark Mode")
    const [toggle, setToggle] = useState(true)
    const toggleEffect =()=>{
        if(toggle===true){
        setBtnText("Light Mode")
        setToggle(false)
        props.setMode(toggle)
    }
    else{
        setBtnText("Dark Mode")
        setToggle(true) 
        props.setMode(toggle)
    }
    }
  return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <i className='fa fa-home'></i> TextUtils 
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
       
      </ul>
      <form className="d-flex">
  
  <button className="btn btn-outline-success" style={props.style} type="submit" onClick={toggleEffect}>
     {btnText}
  </button>
</form>
    </div>
  </div>
</nav>
  )
}
