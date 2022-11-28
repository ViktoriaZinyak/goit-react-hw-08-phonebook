import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 700;
  color: #232c31;
  &.active {
    color: #e07223;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #d1a03f;
  }
`;
