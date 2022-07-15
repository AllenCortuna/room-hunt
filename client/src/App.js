 
 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    // </ThemeProvider>
  );
};
export default App;
