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
    flex-direction: column;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 20px 0 30px;
`;

export const Form = styled.form`
  background: #eeedeb;
  height: auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;

  border-radius: 7px;
  font-size: 14px;

  p {
    font-size: 13 px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 5px;

  input {
    width: 220px;
    border: none;
    border-radius: 5px;
    padding: 10px 10px;
  }

  .Notification {
    margin: 5px 0;
    font-size: 11px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
    width: 220px;
  }
`;

export const Link = styled.a`
  font-size: 12px;
  color: #646464;
  transition: 0.2s;
  margin-bottom: 15px;

  &:hover {
    color: #000;
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
