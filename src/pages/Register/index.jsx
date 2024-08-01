import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
  LinkReact,
  InputContainer,
} from './styles';

export function Register() {
  const navigate = useNavigate();
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
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        toast.success('Conta criada com sucesso!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else if (status === 409) {
        toast.error('Email já cadastrado! Faça o login...');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Algo deu errado, tente novamente!');
    }
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

          <p>
            Já possui cadastro? <LinkReact to="/">Clique aqui</LinkReact>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
