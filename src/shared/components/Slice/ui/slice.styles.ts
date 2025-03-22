import styled from 'styled-components';

import { SContainerProps } from '../model/slice.types';

export const SContainer = styled.div<SContainerProps>`
  padding: ${({ $padding }) => ($padding ? '15px 0' : '0')};
`;

export const SViewFull = styled.div`
  color: #71aaeb;
  cursor: pointer;
`;
