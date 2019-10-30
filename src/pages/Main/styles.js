import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1; /* Ocupe toda a largura */
    border: 1px solid #eee; /* borda de 1px */
    padding: 10px 15px; /* 10px top e bottom e 15px right left */
    border-radius: 4px; /* arredondamento das bordas */
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none; /* Remove as bolinhas da lista */
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; /* Alinhamento vertical */

    /* Coloca a borda cinza entre os li's */
    /* & - pega todos os li's */
    /* + li - e pega todos li's que sejam seguidos por um li anterior */
    /* Ou seja, aplica estilização em todos os itens, menos no primeiro */
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none; /* Tira o underline */
    }
  }
`;
