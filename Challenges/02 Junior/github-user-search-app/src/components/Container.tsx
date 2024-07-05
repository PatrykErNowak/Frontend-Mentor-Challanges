import styled from 'styled-components';
import { boxShadow } from '../styles/Utilities';

const Container = styled.div<{ $mode?: 'light' | 'dark' }>`
  background-color: var(--main-container-color);
  border-radius: 1.5rem;

  ${(props) => (props.$mode === 'light' ? boxShadow : '')}
`;

export default Container;
