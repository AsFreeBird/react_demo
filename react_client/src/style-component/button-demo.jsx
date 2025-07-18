import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-color: #007bff;
  border-radius: 5px;
  background-color: #cc4c88ff;
  &:hover {
    background-color: #0056b3; /* 悬停时颜色更深 */
  }

  &:active {
    background-color: #004085; /* 点击按下时颜色更深 */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* 聚焦时加阴影 */
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    opacity: 0.6; /* 禁用时半透明 */
  }
`;

const Button1 = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
`;

const Button2 = styled(Button1)`
background-color: #28a745;
  &:hover {
    background-color: #218838; /* 悬停时颜色更深 */
  }
`
export default function ButtonDemo() {
  return (
    <div>
      <div>/* 按钮组件演示 */</div>
      <Button>按钮</Button>
      <Button1>按钮</Button1>
      <Button2>按钮</Button2>
    </div>
  );
}
