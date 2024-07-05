import { HashRouter } from "react-router-dom"
import { MyApp } from "./MyApp"
function App() {
  return (
    <>
      <HashRouter>
        <MyApp/>
      </HashRouter>
    </>
  );
}

export default App;
