import Layout from "./Layout";
import Sort from "./Sort";
import Comments from "./Comments";
import Product from "./Product";
import Event from "./Event";
import State from "./State";
import Setnumber from "./Setnumber";
import Sort2 from "./Sort2";
import UsersList from "./api/UsersList";
import Arrangement from "./Arrange";
import Join from "./Join";

export default function App() {
  return (
    <>
      <hr />
      <Join />
      <hr />
      <Arrangement />
      <hr />
      <UsersList />
      <hr />
      <Sort2 />
      <hr />
      <Setnumber />
      <hr />
      <State />
      <hr />
      <Event />
      <hr />
      <Product />
      <hr />
      <Sort />
      <hr />
      <Comments />

      {/* 부모 컴포넌트 */}
      <Cat name="가을" age="2" />
      {/* {name: '가을', age: 2} 객체가 Cat 컴포넌트로 전달된다. */}
      <Cat name="겨울" age="3" />
      <Cat name="봄" age="4" />

      <Layout />
    </>
  );
}

// 자식 컴포넌트
const Cat = ({ name, age }) => {
  // const props = {name: '가을', age: 2}
  // const { name, age } = props;
  return (
    <>
      <div>
        {name}이는 {age}살입니다.
      </div>
    </>
  );
};

// export default App;
