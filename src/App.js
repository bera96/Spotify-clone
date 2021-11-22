import Sidebar from "components/Sidebar";
import Content from "components/Content";
import Bottombar from "components/BottomBar";
function App() {
  return (
    < >
      <div className="wrapper">
        <Sidebar/>
        <Content/>
      </div>
      <Bottombar/>
    </>
  );
}

export default App;
