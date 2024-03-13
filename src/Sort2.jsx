import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faHamburger } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";

const Sort2 = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <MenuList id="gnb" isToggled={isToggled}>
      <button
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <FontAwesomeIcon icon={isToggled ? faClose : faHamburger} />
        <span className="blind">전체메뉴 보기</span>
      </button>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
        <li>메뉴4</li>
        <li>메뉴5</li>
        <li>메뉴6</li>
      </ul>
    </MenuList>
  );
};

const MenuList = styled.div`
  ul {
    /* display: ${(props) => (props.isToggled ? "0" : "-100%")}; */
    display: ${(props) => (props.isToggled ? "block" : "none")};
    max-width: 100px;
    padding: 20px;
    border-radius: 20px;
    background: #eee;
    border: 1px solid #aaa;
  }
`;

export default Sort2;
