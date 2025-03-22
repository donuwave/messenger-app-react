import styled, { css } from 'styled-components';
import { Button } from 'antd';

import { BaseButtonProps } from '../model/baseButton.types';

export const SButton = styled(Button)<BaseButtonProps>`
  ${({ $isLeftIcon }) =>
    $isLeftIcon &&
    css`
      display: flex;
      align-items: center;
      gap: 5px;
      max-height: 30px;
    `};

  background: ${({ theme, $bgTransparent }) =>
    $bgTransparent ? 'transparent' : theme.colors.blue};
  color: ${({ theme, color }) => (color ? theme.colors.link : theme.colors.active)};
  border: none;
  border-radius: ${({ radius }) => (radius ? `${radius}px` : '')};
  max-height: ${({ height }) => height};

  &:hover {
    color: ${({ theme }) => theme.colors.active} !important;
    opacity: 0.7;
  }
  &:focus {
    color: ${({ theme }) => theme.colors.active} !important;
  }

  ${({ variant, height }) =>
    variant === 'primary'
      ? css`
          width: 100%;
          height: ${height || '45px'};
        `
      : css`
          min-width: 50px;
          width: max-content;
          height: max-content;
        `}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.colors.active} !important;
      background: ${theme.colors.text} !important;
    `}
`;
