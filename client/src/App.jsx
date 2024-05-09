import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <Routes>

        <Routes path="/hpmepage" element={<Home />} />
        
        
        
        </Routes>
        
        </div>
  )
}

export default App