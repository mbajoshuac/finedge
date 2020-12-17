import './App.css';
import NavBarLogin from "../src/Components/NavBarLogin";
import CreateAcccount from "../src/Components/CreateAccount";
import VerifyEmail from '../src/Components/VerifyEmail/VerifyEmail'


function App() {
  return (
    <iv className="App">
      <NavBarLogin/>
      {/* <CreateAcccount /> */}
      <VerifyEmail/>
      
    </iv>
  );
}

export default App;
