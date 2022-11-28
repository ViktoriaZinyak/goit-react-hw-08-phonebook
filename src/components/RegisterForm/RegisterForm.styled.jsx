import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 320px;
  align-items: center;
  border: 1px solid #d97e22;
`;

export const Label = styled.label`
  display: block;
  position: relative;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  background-color: #ec6f15;
  color: #fff;
  border: none;
  height: 30px;
  &:hover {
    background-color: #ff3c00;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 5px;
  width: 300px;
  margin-top: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(225, 107, 34);
`;
