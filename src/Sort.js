import React, { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { PiHouseLineDuotone } from "react-icons/pi";
import { SiApple } from "react-icons/si";
import styled from "styled-components";

const Sort = () => {
  const sortArr = [
    { value: "최고의 전망", icon: <SiApple /> },
    { value: "해변 근처", icon: <LiaUmbrellaBeachSolid /> },
    { value: "한옥", icon: <PiHouseLineDuotone /> },
    { value: "농장", icon: <AiFillCar /> },
  ];

  // 초기 상태를 0으로 설정하여 첫 번째 항목이 선택된 상태로 시작
  // const [selected, setSelected] = useState(0)

  const [sel, setSel] = useState(0);

  return (
    <SortStyled>
      <ul>
        {sortArr.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setSel(index);
            }}
            className={sel === index ? "active" : ""}
          >
            {/* // 클릭 시, selected의 상태를 변경 
                    // selected의 상태가 변경되면, 화면이 다시 렌더링되어 selected === index가 true가 되어 active 클래스가 추가된다. */}
            {item.icon}
            {item.value}
          </li>
        ))}
      </ul>
    </SortStyled>
  );
};

const SortStyled = styled.div`
  margin-bottom: 100px;
  ul {
    list-style: none;
    display: flex;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100px;
    height: 75px;
    color: #777;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  svg {
    font-size: 30px;
  }

  .active {
    border-bottom: 2px solid #000;
  }
`;

export default Sort;
