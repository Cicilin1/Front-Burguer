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
} from './styles';

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório!'),
      email: yup
        .string()
        .email('Digite um email válido.')
        .required('O email é obrigatório!'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres.')
        .required('Digite uma senha.'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais!')
        .required(),
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
      api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Cadastro concluído!',
        error: 'Ops, algo deu errado! Tente novamente!',
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
          <Title>Criar conta</Title>
          <InputContainer>
            <label>Name</label>
            <input type="text" {...register('name')} />
            <div className="Notification">{errors?.name?.message}</div>
          </InputContainer>

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

          <InputContainer>
            <label>Confirmar senha</label>
            <input type="password" {...register('confirmPassword')} />
            <div className="Notification">
              {errors?.confirmPassword?.message}
            </div>
          </InputContainer>

          <Button type="submit">CONFIRMAR CADASTRO</Button>
        </Form>
      </RightContainer>
    </Container>
  );
}
