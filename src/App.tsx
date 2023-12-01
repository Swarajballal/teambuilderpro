import { ThemeProvider } from "@/components/ThemeProvider"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import Header from "@/components/Header";
import Users from "@/pages/Users";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
