
import profileImage from './img/mirouch.jpg';
import './App.css';
function App() {
  return (
    <div className="App">
     <h1>My react application</h1>
     <h2>Author: mirzz loves you all </h2>
     <img  className='image1' src={profileImage} alt='profile image'/>
     <h>i am happy now that i can deploy free ! </h>
    </div>
  );
}

export default App;
