import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./css/index.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from './theme.js';
import Login from './component/login/Login';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
