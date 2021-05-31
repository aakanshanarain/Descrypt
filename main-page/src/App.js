import React, {Component, useState} from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap"; 
import { Layout, Container, BoxUpload, ImagePreview} from './style';
import x from './x.svg'; 


function App() {
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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">DESCRYPT-LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="container-fluid">
    <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#myCheatsheets">My Cheatsheets</NavDropdown.Item>
        <NavDropdown.Item href="#sharedWithMe">Shared with me</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#signOut">Sign Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar> 


   
   <Layout> 
    <Container> 
      <h3> Upload files here</h3>
      <p> Preview</p>
  
    <BoxUpload>
    <div className="file-upload">
    { 
        !isUploaded ? ( 
        <> 
          <label htmlFor="upload-input"> 
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX///8AAABhYWF0dHRdXV0GBgZra2tXV1dUVFRZWVlRUVGMjIxKSkp4eHhvb28vLy9mZmaGhoaAgIBISEhDQ0M+Pj44ODgtLS0nJycgICAZGRkUFBSSqXidAAADIElEQVR4nO2c21IbMRBEkXGwjTEOuV/+/z9TU1spJ4ZdRvJquiX1+QH61Bn8AtbdnRCZHNEDanNIB/SEuuxSSjv0iJocktFxxV2a6LbiIf2l04oXwU4Vd+lfOjzUQ/qf7iru0jWdVbwu2F3F1wU7q/hWwa4qvl2wo4pzBbupuCTYheL8iXZyqMsFO6j4XsHmK75fsPGKe5dgwxU9J9p0RW9BY48eW4K/YKOHmifYoGLOiU40dqi5BZurmF+wsYolBZuqWFawoYqlBZupWF6wkYq3FGyi4q2C9Iq3negE9aHeXtAgrrhGQYO24joFDdKKj6sJklZc60QnCCuuWdCgq7huQYOs4vqCZIprn+jEI1rrQo2CBs3vYp2CBknFWgUNior1ChoEFWsWNOAV6xY0wBVrFzSgFSMEoYr1T3QCdqgxBQ1QxaiCBqRiXEEDUDGyoBFeMbagEVwxuqARWhEhGFoRIxioiBIMO9T4D5kLIRVxBY2AisiCRvWK2IJG5YrogkbViviCRsWKHIIVFVkEqynyCFZSZPiQuVDh4+YJ7XTF09qCx/3Wy6Z89nnj/il75NMFH4oNX4Crcyg3/ISe7kSGMuRHhvOc0NOdyFCG/MhwZMN79HQnMpQhP+WGz+jpTmQoQ35kOLLhA3q6ExnKkB8ZzvMRPd2JDGXIjwxlyI8MRzbcoKc7kaEM+ZGhDPmRoQz5KTfcoqc7keHIhq28CV1uSPWs0AIynAf+kImTckOC12hcyHBkw9W/CFMJGY5s+Bk93YkM5/mCnu5EhiMbfkVPdyLDkQ2/oac7kaEM+Sk3PKOnO5HhyIbf0dOdyHCeH+jpTmQ4suFP9HQnMhzZ8Bd6uhMZjmz4Gz3dSbHgAIYpcubiK4mY/3vZLk3K/+Pq4st5mG/RPSxNyv+XOBkCkGEmMgQgw0xkCECGmcgQgAwzkSEAGWYiQwAyzESGAGSYiQwByDATGQKINMS8wvkcaHg+3cdzOgcaEiJDGfIjQxnyI0MZ8iNDGfIjQxnyI0MZ8iNDGfIjQxnyI8MRDRe/vkFI/pdcjttNS2yP2YaiGf4AXepT4PdIWY0AAAAASUVORK5CYII=' draggable ={'false'} alt ="resize-img-upload-icon" style={{width: 50, height:50}}></img>  
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
