import styled from 'styled-components';
import { MovieWrapper } from '../../Components/Movies/MoviesList/Movie/styles';

const StyledFallbackImg = styled.img`
  border-radius: 7px;
  position: relative;
  display: block;
  height: 200px;
  width: 150px;
  opacity: 0.9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${MovieWrapper}:hover & {
    transition: 200ms ease-in-out;
    opacity: 1;
  }
`;

export default StyledFallbackImg;
