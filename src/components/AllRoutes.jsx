import Home from "../pages/Home";
import {Routes, Route} from 'react-router-dom';
import Methods from "./Methods";

export default function AllRoutes() {
    return <Routes>
        <Route path='/Portfolio' element={<Methods />}/>
    </Routes>
}