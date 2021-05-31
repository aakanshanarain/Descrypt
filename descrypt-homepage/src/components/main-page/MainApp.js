import React, {Component, useState} from 'react';
import './App.css';
//import {Navbar, Nav, NavDropdown} from 'react-bootstrap'; 
import { Layout, Container, BoxUpload, ImagePreview, Navbar} from './style';
import x from './x.svg'; 
import folder from './folder.png'
import './style.css';


function App(handleLogout) {
  const [image, setImage] = useState('')
  const [isUploaded, setIsUploaded] = useState(false)
  function handleImageChange(e) { 
      if (e.target.files && e.target.files[0]) {
        let reader = new FileReader() 
  
        reader.onload = function(e) { 
          setImage(e.target.result) 
          setIsUploaded(true)
        }
        reader.readAsDataURL(e.target.files[0])
      }
  }
  
    return (
    <div className="App">
    
    <div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#myCheatsheets">My Cheatsheets</a>
  <div class="right">
  {/* <button onClick={handleLogout}> Logout </button> */}
  <a href="#logout"> Logout </a>
  </div> 
</div>
       

   <Layout> 
    <Container> 
      <h3> Upload files here</h3>
      <br>

      </br> 
  
    <BoxUpload>
    <div className="file-upload">
    { 
        !isUploaded ? ( 
        <> 
          <label htmlFor="upload-input"> 
      <img src='https://iconarchive.com/download/i99322/dtafalonso/yosemite-flat/Folder.ico'
      draggable ={'false'} alt ="resize-img-upload-icon" style={{width: 90, height:120, alignItems: 'center'}}></img>  
      <p style ={{ color: '#444'}}> Click to upload file </p>
      </label>
      <input 
      id="upload-input" 
      type="file" 
      accept=".jpg, .pdf, .jpeg, .png"
        onChange={handleImageChange}
      /> 
      </>
        ) : ( 
          <ImagePreview>
          <img className="x" 
          src={x} 
          alt="CloseIcon"
          onClick={() => {
          setIsUploaded(false)
          setImage(null)}} />
           <img id ="uploaded-image"
            src={image} 
            alt="uploaded-image"
            draggable={false}
            />
          </ImagePreview>
        )

    }
      
      </div>
    </BoxUpload> 
  
    </Container> 
   </Layout> 
   
   
    </div>
    
  

  );
}


export default App;
