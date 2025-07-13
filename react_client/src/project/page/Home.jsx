import { NavLink, Routes } from "react-router-dom";
import "../css/app.css"

export default function Home() {
    return (
        <div  >
            <table className="table table-striped table-bordered text-center">
                <thead>
                    <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>联系</th>
                    <th>操作</th>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>大鹏</td>
                        <td>18</td>
                        <td>18000000000</td>
                        <NavLink to="/detail"><td>详情</td></NavLink>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}