import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import AddPost from "./components/pages/AddPost";
import EditPost from "./components/pages/EditPost";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import SinglePost from "./components/pages/SinglePost";


function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path= "/post/:id" element= { <SinglePost/> }/>
        <Route path= "/post/add" element = { <AddPost/> }/>
        <Route path= "/post/edit/:id" element = { <EditPost/> }/>
        <Route path="/about" element = { <About/> } />
        <Route path="*" element = { <NotFound/> } />
      </Routes>
    </Container>
  );
}

export default App;
