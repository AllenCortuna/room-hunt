import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/index.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from './theme.js';
import Login from './component/login/Login';
import Navbar from "./component/Navbar";
import Feature from "./component/Feature";
import Home from "./component/Home";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />}/>
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}



export default App;
