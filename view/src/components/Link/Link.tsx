import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink).attrs({
  className: 'ui-link-root',
})`
  color: var(--primary);
  text-decoration: none;
  transition:
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: var(--primary-hover);
  }
`;

export default Link;
