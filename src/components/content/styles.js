import styled from "styled-components";

export const Aside = styled.aside`
  @media screen and (max-width: 798px) {
    width: 104%;
    max-width: 104%;
    box-sizing: border-box;
  }
  border: 1px solid black;
  width: 80%;
  .btn-action {
    display: flex;
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;
  }
`;

export const Conteiner = styled.div`
  display: flex;
  @media screen and (max-width: 698px) {
    flex-direction: column;
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  .tr-action {
    max-width: 100px;
    overflow: hidden;
  }
  @media screen and (max-width: 798px) {
    width: 100%;
    box-sizing: border-box;
  }
  tbody tr:nth-child(even) {
    background-color: #f1f2f2;
  }
  thead {
    background-color: #04aa6d;
  }
  .buttons {
    display: flex;
    button {
      background-color: #f1f2f2;
      border: 1px solid #010101;
      border-radius: 4px;
      margin: 0 2px;
      width: 30px;
    }
  }
`;

export const DataPicker = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  border: 1px solid black;
  padding: 5px;
  @media screen and (max-width: 698px) {
    width: 100%;
  }
  .btn-submit {
    background-color: #04aa6d;
    color: #fff;
    border-radius: 5px;
    font-size: 17px;
    font-family: "Source Sans Pro", sans-serif;
    padding: 6px 18px;
    cursor: pointer;
    margin: 30px 0;
  }
`;

export const SelectDay = styled.div`
  margin: 20px 0 20px 0;
  input {
    margin: 10px 0 10px 0;
    width: 97%;
    height: 30px;
  }
`;

export const Time = styled.div`
  margin: 20px 0 20px 0;
  div {
    display: flex;
    align-items: center;
  }
  div select {
    margin: 10px 0 10px 0;
    width: 100%;
    height: 30px;
  }
`;

export const Action = styled.div`
  textarea {
    margin: 10px 0 10px 0;
    width: 97%;
  }
`;
