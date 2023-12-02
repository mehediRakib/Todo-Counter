
import CounterPages from "./pages/counterPages.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Todopage from "./pages/todopage.jsx";
const App = () => {
  return (
   <BrowserRouter>
       <Routes>
           <Route path="/" element={<CounterPages/>}/>
           <Route path="/todo" element={<Todopage/>}/>
       </Routes>
   </BrowserRouter>
  );
};

export default App;