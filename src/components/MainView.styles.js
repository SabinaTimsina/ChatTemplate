import styled from "@emotion/styled";

export const MainViewContainer = styled.div`
  width: 100%;
  background: #f2f2f2;
  position: relative; //footer
`;
export const FooterContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 10%;
`;

export const MsgContainer = styled.div`
  position: relative;
  height: 100px;
  border: 3px solid light pink;
  background-color: white;
  margin: 20px;
  border-radius: 6px;
`;
export const UserBox = styled.div`
  position: absolute;
  left: auto;
  width: fit-content;
  height: fit-content;
  color: white;
  background-color: #d387ab;
  background-image: linear-gradient(315deg, #d387ab 0%, #b279a7 74%);
  padding: 2px;
  border-radius: 6px;
  margin: 3px;
`;
export const DateBox = styled.div`
  position: absolute;
  right: 0;
  width: fit-content;
  height: fit-content;
  color: white;
  background-color: #d387ab;
  background-image: linear-gradient(315deg, #d387ab 0%, #b279a7 74%);
  padding: 2px;
  border-radius: 6px;
  margin: 3px;
`;
export const SubmitBtn = styled.button`
  color: white;
  background-color: #d387ab;
  background-image: linear-gradient(315deg, #d387ab 0%, #b279a7 74%);
  border: white;
  
`
