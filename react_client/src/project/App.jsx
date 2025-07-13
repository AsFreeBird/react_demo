import { Routes, NavLink ,Route,Navigate} from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import AddChild from "./page/AddChild"; 
import "./css/app.css"
import Detail from "./page/Detail";
export default function App() {
    return (
        <div id="app" className="container" >
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button"
                            className="navbar-toggle collapse"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false"
                            aria-controls="navbar"
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-brand">学生管理系统</div>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <NavLink to="/home" className="navigation" >主页</NavLink>
                            <NavLink to="/about" className="navigation" >关于我们</NavLink>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <NavLink to="/add" className="navigation" >添加学生</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="content">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/addChild" element={<AddChild />}/> 
                    <Route path="/detail" element={<Detail />}/> 
                    <Route path="/" element={<Navigate replace to="/home"/>} />   
                </Routes>
                
            </div>
        </div>
    )
}