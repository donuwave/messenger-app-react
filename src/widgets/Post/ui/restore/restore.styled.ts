import styled from 'styled-components';
import { BaseButton } from '@shared/ui';

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SRestore = styled(BaseButton).attrs({
  variant: 'secondary',
})``;

export const SDelete = styled(BaseButton).attrs({
  variant: 'secondary',
})`
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.blue};
`;
