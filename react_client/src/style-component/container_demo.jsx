import styled from "styled-components";
/**
 *  容器组件
 */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 200px);
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
  background-color: #f8f9fa;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Grid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
//动态容器
const DynamicContainer = styled.div`
width:${props => props.width || '100%'};
background-color: ${props =>props.bgColor || '#f8f9fa'};
padding: 20px;
`;

export default function ContainerDemo() {
  return (
    <div>
      <div>/* 容器组件演示 */</div>
      <Container>
        <h1>内容居中</h1>
        <p>
          This is a simple container component styled with styled-components.
        </p>
      </Container>

      <Grid>
        <div
          style={{
            backgroundColor: "#e9ecef",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          Grid Item 1
        </div>
        <div
          style={{
            backgroundColor: "#e9ecef",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          Grid Item 2
        </div>
        <div
          style={{
            backgroundColor: "#e9ecef",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          Grid Item 3
        </div>
        <div
          style={{
            backgroundColor: "#e9ecef",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          Grid Item 4
        </div>
        <div
          style={{
            backgroundColor: "#e9ecef",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          Grid Item 5
        </div>
      </Grid>
      <DynamicContainer width="40%" bgColor="#407ccaff">
        <h2>动态容器</h2>
        <p>这是一个动态宽度和背景色的容器。</p>
      </DynamicContainer>
    </div>
  );
}
