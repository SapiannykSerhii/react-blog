import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import AddPost from "./components/pages/AddPost";
import Categories from "./components/pages/Categories";
import EditPost from "./components/pages/EditPost";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import SinglePost from "./components/pages/SinglePost";
import Footer from "./components/views/Footer";
import Header from "./components/views/Header";



function App() {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path= "/post/:id" element= { <SinglePost/> }/>
        <Route path= "/post/add" element = { <AddPost/> }/>
        <Route path= "/post/edit/:id" element = { <EditPost/> }/>
        <Route path="/about" element = { <About/> } />
        <Route path="*" element = { <NotFound/> } />
        <Route path="/categories" element = { <Categories/> } />
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
