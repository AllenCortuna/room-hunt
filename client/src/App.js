import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./css/index.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from './theme.js';
import Home from './component/Home';

// <Route path="/login" element={<Login />} />
const App = () => {
  return (
     <ThemeProvider theme={theme}>
       <CssBaseline/>
       <Router>
         <Routes>
           <Route path="/" element={<Home/>}/>
         </Routes>
       </Router>
     </ThemeProvider>


  );
}



export default App;


