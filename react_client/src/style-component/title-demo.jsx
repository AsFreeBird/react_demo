import styled from "styled-components";
const Title = styled.h1.attrs(props=>({as:props.as || 'h1'}))`
    color: ${props => props.color || '#333'};
`;

export default function TitleDemo() {
  return (
    <div>
        <Title as="h1" color="#007bff">标题组件演示</Title>
        <Title as="h2" color="#007bff">标题组件演示</Title>
        <Title as="h3" color="#007bff">标题组件演示</Title>
        <Title as="h4" color="#007bff">标题组件演示</Title>
    </div>
  );
}
