import './App.css';
import Header from "./Components/Header/Header.js";
import SideBar from "./Components/Sidebad/SideBar.js";
import FilterComponent from './Components/FilterSection/FilterContent.js';
import ChatSection from './Components/ChatSection/ChatSection.js';

function App() {
  return (
    <div className="App">
          <Header />
          <div className="allcontent" >

            <SideBar />
          <div className="content">
             <FilterComponent />
             <ChatSection />
          </div>
          </div>
    </div>
  );
}

export default App;
