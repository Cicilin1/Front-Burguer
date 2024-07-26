import Logo from '../../assets/logo/junk-food.png';
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Button,
  Link,
} from './styles';

export function Home() {
  return (
    <Container>
      <LeftContainer>
        <h2>BurgerSpot</h2>
        <img src={Logo} alt="Logo-burguer" />
        <p>Hambúrgueres do tamanho da sua fome!</p>
      </LeftContainer>
      <RightContainer>
        <Form>
          <Title>Login</Title>
          <InputContainer>
            <label>Email</label>
            <input type="email" />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" />
          </InputContainer>
          <Link>Esqueci minha senha!</Link>

          <Button>ENTRAR</Button>
          <Link>Não possui conta ? Clique aqui!</Link>
        </Form>
      </RightContainer>
    </Container>
  );
}
