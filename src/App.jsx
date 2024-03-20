import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/Home/index.jsx";
import PageNotFound from "./components/PageNotFound/index.jsx";
import Page01 from "./components/page-01/index.jsx";
import Page03 from "./components/page-03/index.jsx";
import Page02 from "./components/page-02/index.jsx";
import NavBar from "./components/AppBar/index.jsx";
import SubPage01 from "./components/page-02/sub-page-01/index.jsx";
import SubPage02 from "./components/page-02/sub-page-02/index.jsx";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="page01" element={<Page01/>}/>
                <Route path="page01/:id" element={<Page01/>}/>
                <Route path="page02" element={<Page02/>}>
                    <Route path="sub-01" element={<SubPage01 />}/>
                    <Route path="sub-02" element={<SubPage02 />}/>
                </Route>
                <Route path="page03" element={<Page03/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
