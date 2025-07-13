
import { useNavigate } from "react-router-dom"; 


export default function Detail(){
    const navigate = useNavigate();

    function updateUser(){

    }

    function deleteUser(){

    }
    
    return(
        <div>
            <button className="btn btn_default" onClick={()=>navigate("/home")}>返回</button>
            <h1 className="page-header">大鹏 
                <span className="pull-right">
                    <button className="btn btn-primary" style={{margin:10}} onClick={updateUser}>修改</button>
                    <button className="btn btn-danger" onClick={deleteUser}>删除</button>
                </span>
            </h1>
            <ul className="list-group">
                <li className="list-group-item"><span className="glyphicon glyphicon-phone">电话：18300098565</span></li>
                <li className="list-group-item"><span className="glyphicon glyphicon-envelope">邮箱：18300098565@163.com</span></li>
            </ul>

            <ul className="list-group">
                <li className="list-group-item"><span className="glyphicon glyphicon-book">文化水平：</span></li>
                <li className="list-group-item"><span className="glyphicon glyphicon-flag">毕业院校：</span></li>
                <li className="list-group-item"><span className="glyphicon glyphicon-briefcase">专业：</span></li>
                <li className="list-group-item"><span className="glyphicon glyphicon-user">个人简介：</span></li>
            </ul>
        </div>
    )
}