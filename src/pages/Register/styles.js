import { Link as ReactLink } from 'react-router-dom';

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
    height: 50px;

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
    justify-content: start;
    width: 100%;
    margin-top: 60px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 20px 0 10px 0;

  @media (max-width: 1268px) {
    margin: 10px 0 10px 0;
  }
`;

export const Form = styled.form`
  background: #eeedeb;
  height: auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  border-radius: 7px;
  font-size: 14px;

  p {
    font-size: 13px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 350px;
    padding: 0;
    padding: 0.5rem 0;
  }

  @media (max-width: 410px) {
    width: 90%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0 5px;

  input {
    width: 220px;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
  }

  .Notification {
    margin: 10px 0;
    font-size: 11px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
    width: 220px;
  }
`;

export const LinkReact = styled(ReactLink)`
  text-decoration: none;
  color: #fff;
  color: grey;
  font-weight: 500;

  &:hover {
    color: #000;
  }
`;
