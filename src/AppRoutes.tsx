import { Routes, Route, Navigate } from "react-router-dom";
import Layouts from "../src/layouts/Layouts"
import HomePage from "./pages/HomePage";

const AppRouter = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Layouts><HomePage/></Layouts>}/>
            <Route path="*" element={<Navigate to={"/"}/>}/>
        </Routes>
        </>
    )
}

export default AppRouter;