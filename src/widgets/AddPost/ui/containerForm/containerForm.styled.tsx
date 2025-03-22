import styled, { css } from 'styled-components';
import { Upload } from 'antd';

interface IPositionProps {
  $position: boolean;
  $isDraggable?: boolean;
}

interface SDragFieldProps {
  isFocus: boolean;
}

export const SContainer = styled.div<IPositionProps>`
  display: grid;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: ${({ theme }) => theme.radius.base};
  padding: 15px;
  margin: 0 auto 15px 0;
  min-height: ${({ $isDraggable }) => $isDraggable && `150px`};
  width: 100%;

  ${({ $position }) =>
    $position &&
    css`
      & > * {
        margin-bottom: 10px;
      }
    `};

  ${({ $position }) =>
    !$position &&
    css`
      display: flex;
      align-items: center;
    `};
`;

export const DragInput = styled(Upload)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  cursor: pointer;
  z-index: 3;
`;

export const SContainerIcons = styled.div<IPositionProps>`
  display: flex;
  align-items: center;
  gap: 15px;

  ${({ $position }) =>
    !$position &&
    css`
      position: absolute;
      right: 20px;
    `}

  ${({ $position, theme, $isDraggable }) =>
    $position &&
    css`
      padding: 10px 15px;
      border-top: 1px solid ${theme.colors.secondaryText};
      margin: 0 -15px -15px -15px;
      justify-content: space-between;
      opacity: ${$isDraggable ? '0' : '1'};
    `};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: end;

    ${({ $position }) =>
      !$position &&
      css`
        display: none;
      `}
  }
`;

export const SDragField = styled.div<SDragFieldProps>`
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.active};

  border: 2px ${({ theme }) => theme.colors.active} dashed;

  ${({ theme, isFocus }) =>
    !isFocus &&
    css`
      color: ${theme.colors.text};
      border: 2px ${theme.colors.text} dashed;
      opacity: 0.7;
    `}

  border-radius: 10px;
`;

export const SSubmit = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
