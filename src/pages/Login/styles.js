import styled from 'styled-components';

import ImgBackground from '../../assets/backgroundBlack.jpg';

export const Container = styled.div`
  display: flex;
  height: 100%;

  background-image: url(${ImgBackground});
  background-repeat: repeat;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: #1a1a1b;

  h2 {
    font-size: 25px;
    color: #ffff;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  img {
    margin: 20px 0;
    height: 150px;
  }

  p {
    font-size: 17px;
    color: #ffff;
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    height: 70px;

    h2 {
      font-size: 15px;
      order: 2;
    }

    img {
      height: 40px;
      order: 1;
      margin-right: 10px;
    }

    p {
      display: none;
    }
  }
`;

export const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 10px 0 30px;
`;

export const Form = styled.form`
  background: #f1f1f1;
  height: auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;

  border-radius: 7px;
  font-size: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: 60%;
    padding: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 5px;

  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;

export const Button = styled.button`
  margin: 20px 0;
  padding: 5px 0;
  width: 150px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;

  background: #ffbe00;
  transition: 0.3s;

  &:hover {
    background: #ea9c1b;
  }
`;

export const Link = styled.a`
  font-size: 12px;
  color: #646464;
  transition: 0.2s;

  &:hover {
    color: #000;
  }
`;
