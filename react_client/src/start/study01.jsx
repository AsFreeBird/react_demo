
import './study01.css'
import { useState } from "react";
// import { useReducer } from 'react'; //对象中更新单个变量
//const reducer = (state, action) => {
//   switch (action.type) {
//     case 'setScore':
//       return { ...state, score: action.payload };
//     default:
//       return state;
//   }
// };
// const [state, dispatch] = useReducer(reducer, {
//   name: 'Alice',
//   age: 18,
//   score: 100
// });

function Mybutton() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    };

    return (
        <button className='my_button' onClick={handleClick}>Click {count} items</button>
    )
}

export function Multi() {
    return (
        <dev>
            <h1>
                welcome to my app
            </h1>
            <Mybutton />
        </dev>
    )
}
export default Mybutton