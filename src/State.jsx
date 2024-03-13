import { useState } from "react";

const State = () => {
  // 바닐라 js 사용
  // let name = "겨울";

  // const changeName = () => {
  //   // 삼항연산자 구문
  //   // 조건 ? 참일 때 : 거짓일 때
  //   name = name === "겨울" ? "가을" : "겨울";
  //   console.log(name);

  //   // h1 태그에 .innerText 이용해서 name 값을 출력
  //   // element.innerText = text
  //   document.querySelector("h1").innerText = name;
  // };

  // react
  // useState:  상태값을 저장할 수 있는 변수를 생성하는 함수
  // useState 구문
  // const [상태이름, 상태변경함수] = useState(상태의 초기값)
  const [name, setName] = useState("겨울");

  const changeName = () => {
    // setName: 상태변경함수
    // 상태변경함수(상태값)
    // 상태값을 변경하면 컴포넌트가 다시 렌더링된다.
    setName(name === "겨울" ? "가을" : "겨울");
  };

  return (
    <div>
      <p>0207</p>
      <h1>{name}</h1>
      <button onClick={changeName}>이름 바꾸기</button>
    </div>
  );
};

export default State;
