const Event = () => {
  // 클릭 이벤트 핸들러
  const handleClick = (event) => {
    console.log("버튼이 클릭되었습니다.");
    // alert("버튼이 클릭되었습니다.");
    console.log(event); // 이벤트 객체
    console.log(event.target); // 이벤트 돔 요소 출력
    console.log(event.type); // 이벤트 타입
  };

  // 마우스 오버 이벤트 핸들러
  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = "lightgray";
  };

  const handleChange = (event) => {
    document.querySelector(".text-value").innerText = event.target.value;
  };

  return (
    <div>
      {/* 클릭 이벤트 */}
      <h1>클릭 이벤트</h1>
      <button onClick={handleClick}>버튼</button>

      {/* 마우스 오버 이벤트 */}
      <h1>마우스 오버 이벤트</h1>
      <div onMouseOver={handleMouseOver}>마우스 오버 시 배경색 변화</div>

      <h1>입력 이벤트</h1>
      <input onChange={handleChange} type="text" placeholder="placeholder" />
      <div className="text-value"></div>
    </div>
  );
};

export default Event;
