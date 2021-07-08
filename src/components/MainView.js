import React from "react";
import * as s from "./MainView.styles";

const MainView = () => {
  return (
    <s.MainViewContainer>
      {/* 1st row */}
      <s.MsgContainer>
        <s.UserBox>
          Username
        </s.UserBox>
        <s.DateBox>
        {new Date().toLocaleString("en-US", { month: "short", day : '2-digit' })}
        </s.DateBox>
      </s.MsgContainer>
      {/* 2nd row */}
      <s.MsgContainer>
        <s.UserBox>
          Username
        </s.UserBox>
        <s.DateBox>
        {new Date().toLocaleString("en-US", { month: "short", day : '2-digit' })}
        </s.DateBox>
      </s.MsgContainer>
      {/* 3rd row */}
      <s.MsgContainer>
        <s.UserBox>
          Username
        </s.UserBox>
        <s.DateBox>
        {new Date().toLocaleString("en-US", { month: "short", day : '2-digit' })}
        </s.DateBox>
      </s.MsgContainer>
      <s.FooterContainer>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Type a message"
            aria-label="Type a message"
            aria-describedby="button-addon2"
          />
          <s.SubmitBtn
            type="button"
            id="button-addon2"
          >
            Button
            </s.SubmitBtn>
        </div>
      </s.FooterContainer>
    </s.MainViewContainer>
  );
};

export default MainView;
