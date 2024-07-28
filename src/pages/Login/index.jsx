import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Logo from '../../assets/logo/junk-food.png';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Link,
} from './styles';

export function Home() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um email válido.')
        .required('O email é obrigatório!'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres.')
        .required('Digite uma senha.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem vindo(a)',
        error: 'Email ou senha incorretos',
      },
    );

    console.log(response);
  };
  return (
    <Container>
      <LeftContainer>
        <h2>BurgerSpot</h2>
        <img src={Logo} alt="Logo-burguer" />
        <p>Hambúrgueres do tamanho da sua fome!</p>
      </LeftContainer>
      <RightContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Login</Title>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <div className="Notification">{errors?.email?.message}</div>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <div className="Notification">{errors?.password?.message}</div>
          </InputContainer>
          <Link>Esqueci minha senha!</Link>

          <Button type="submit">ENTRAR</Button>
          <Link>Não possui conta ? Clique aqui!</Link>
        </Form>
      </RightContainer>
    </Container>
  );
}
