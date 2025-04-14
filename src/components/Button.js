import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;


function Button ({children, onClick}) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;

}
export default Button;