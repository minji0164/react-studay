import { useState } from "react";

const Header = ({ title, cont }) => {
  // const { title, cont } = props; //구조 분해 할당 후 { title, cont } 이걸로 바로 전달 받기
  //title="헤더",  cont="헤더 내용"을 props로 전달 받음

  return (
    <>
      <h1>{title}</h1>
      <p>{cont} 컴포넌트입니다.</p>
    </>
  );
};

const Body = (props) => {
  const handleClick = (event) => {
    console.log(event.target.name);
  };
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.cont} 컴포넌트입니다.</p>
      <button name="확인" onClick={handleClick}>
        확인
      </button>
      <button name="취소" onClick={handleClick}>
        취소
      </button>
    </>
  );
};

const Arrangement = () => {
  const user = {
    name: "anna",
    age: 20,
  };

  // map함수 사용 변수(반복문)
  const arr = [1, 2, 3, 4, 5];

  //and(&&)연산자, or(||)연산자 사용 변수
  const num = 8;

  //이벤트 사용 변수
  const clickOn = () => {
    alert("버튼을 눌렀습니다.");
  };
  //----------------------------------------------
  // 상태 사용하기(useState)
  // useState 기본구문
  // const [] = useState();

  // useState 사용법
  // const [상태값, 상태를 변경하는 함수] = useState(초기값);

  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  }; // setCount에 대한 변수 재설정
  //----------------------------------------------

  return (
    <div>
      <Header title="헤더" cont="헤더 내용" />
      <Body title="바디" cont="바디 내용" />

      <h1>jsx 정리</h1>

      {/* 상태 사용하기 */}
      {/* 상태값 */}
      <p>{count}</p>
      {/* 상태를 변경하는 함수 */}
      {/* <button onClick={() => setCount(count + 1)}>1씩 증가하는 버튼</button> */}
      <button onClick={increase}>1씩 증가하는 버튼</button>

      <div>
        {/* 위의 상태를 다시 초기화 시키는 법 */}
        {/* setCount의 초기값을 0으로 설정한다. */}
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          초기화버튼
        </button>
      </div>
      <hr />

      <div>
        {/* 이벤트 사용하기 */}
        {/* 두가지방법으로사용가능 */}
        <button onClick={clickOn}>버튼</button>

        <button
          onClick={() => {
            alert("버튼을 눌렀습니다.");
          }}
        >
          버튼
        </button>
      </div>
      <hr />

      <div>
        {/* 반복문 사용하기 */}
        {arr.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <p>
        {user.name}의 나이는 {user.age}입니다.
      </p>
      <p>나는 {arr[2]}살입니다.</p>

      <p>
        {/* 삼항연산자 이용 */}
        {num}은 {num % 2 === 0 ? "짝수" : "홀수"}
      </p>
      <p>
        {/* 삼항연산자로 and연산자 사용 / 둘 다 참이어야 참 출력 */}
        {num}은 {num % 2 === 0 && num > 10 ? "짝수&10보다 큼" : "거짓"}
      </p>
      <p>
        {/* 삼항연산자로 or연산자 사용 / 둘 중에 하나만 참이어도 참 출력 */}
        {num}은 {num % 2 === 0 || num > 10 ? "짝수or10보다 큼" : "거짓"}
      </p>
    </div>
  );
};

export default Arrangement;

// 하나의 파일 안에 여러개의 컴포넌트 생성 가능
// 디폴트 값은 하나이지만,
//export const Header = () => {}; export를 쓰면 파일 밖에서도 끌어다 쓸 수 있다.
// import Arrangement, { Header } from "./Arrange"; app.js에서 이렇게 뜨게 됨
