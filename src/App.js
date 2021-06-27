import { useState } from "react";
import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Components/SideBarComponent/Sidebar";
import Main from "./Components/Main/Main";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="App">
      <header>
        <GiHamburgerMenu onClick={() => setShowSidebar(!showSidebar)} />
      </header>
      <Sidebar show={showSidebar} />
      <Main />
    </div>
  );
}

export default App;
