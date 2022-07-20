import styled from 'styled-components';
import Logo from './todoComponents/Logo'
import TodayData from './todoComponents/TodayData'
import TodoInsert from './todoComponents/TodoInsert'
import TodoList  from './todoComponents/TodoList';
import EndList from './todoComponents/EndList';

const Wrapper = styled.section`
  background-color: #fff;
  border-radius: 12px;
  padding:20px 30px 50px;
  margin:20px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 4%);  
  @media screen and (max-width: 768px) {
    padding:30px;
    margin:10px;
  }
`;

function App() {
  return (
    <Wrapper>
    <Logo>할일</Logo>
    <TodayData />
    <TodoInsert />
    <TodoList />      
    <EndList />
  </Wrapper>
  );
}

export default App;
