import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  padding: 4px;


  input {
    background-color: #d9db42;
    border: 1px solid #ccc;
    border-radius: 12px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }

  button {
    background-color: #999ed8;
    padding: 8px 16px;
    margin: 0 8px;
    border-radius: 12px;
    box-shadow: 8px 12px 3px rgba(0, 0, 255, 0.2);

    &:hover {
      background-color: #2c5282;
      box-shadow: 6px 12px 12px rgba(0, 255, 0, 0.4);
    }

    span {
      font-weight: bold;
      color: #ffff;
      -webkit-text-stroke-width: .5px;
      -webkit-text-stroke-color: #111;
    }
  }
`;
