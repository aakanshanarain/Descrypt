import React, {useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid'; 
import Modal from './comps/Modal'; 
import './index.css'; 


function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
    <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#myCheatsheets">My Cheatsheets</a>
  <a href="#savedCheatsheets">Saved Cheatsheets</a>
  <a href="#logout">Logout</a>
    </div>
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
