import './App.css';
import NavBarLogin from "../src/Components/NavBarLogin";
import CreateAcccount from "../src/Components/CreateAccount";
import Profile from "../src/Components/Profile";

function App() {
  return (
    <div className="App">
      <NavBarLogin/>
      <CreateAcccount />
    </div>
  );
}

export default App;
