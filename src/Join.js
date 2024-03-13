import { useState } from "react";

const Join = () => {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");

  // const onChangeName = (e) => {
  //   console.log("변경된 이름 : " + e.target.value);
  //   setName(e.target.value);
  //   console.log({ name });
  // };
  // const onChangeGender = (e) => {
  //   console.log("변경된 성별 : " + e.target.value);
  //   setGender(e.target.value);
  //   console.log({ gender });
  // };
  const [user, setUser] = useState({
    neme: "",
    gender: "",
    age: "",
    intro: "",
  });

  const handleOnChange = (e) => {
    console.log(e.target.name, e.target.value);

    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>sign up</h1>
      <form>
        <div>
          <label htmlFor="name">이름</label>
          <input
            onChange={handleOnChange}
            type="text"
            id="name"
            name="name"
            value={user.name}
            placeholder="이름을 입력하세요"
          ></input>
        </div>
        <div>
          <label htmlFor="gender">성별</label>
          <select
            id="gender"
            name="gender"
            value={user.gender}
            onChange={handleOnChange}
          >
            <option value="남성">남성</option>
            <option value="여성">여성</option>
          </select>
        </div>
        <div>
          <label htmlFor="age">나이</label>
          <input
            onChange={handleOnChange}
            type="text"
            id="age"
            name="age"
            value={user.age}
          ></input>
        </div>
        <div>
          <label htmlFor="intro">자기소개</label>
          <input
            onChange={handleOnChange}
            type="text"
            id="intro"
            name="intro"
            value={user.intro}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Join;
