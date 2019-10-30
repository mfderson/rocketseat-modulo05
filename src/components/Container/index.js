import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto; /* margin 80px top e bottom e automatica right e left */

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row; /* Itens dispostos em linha */
    align-items: center; /* Itens acima centralizados verticalmente */
  }
`;

export default Container;
