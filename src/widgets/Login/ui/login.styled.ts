import styled from 'styled-components';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { BaseButton } from '@shared/ui';

// TODO: переделать

export const SFormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  padding-right: 20px;
`;

export const SForm = styled.div`
  flex: 1;
`;

export const SLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const SInputForm = styled(Form.Item)`
  .ant-form-item-label > label {
    color: ${({ theme }) => theme.colors.text};
  }
  .ant-form-item-explain-success {
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const SLink = styled(Link)`
  color: ${({ theme }) => theme.colors.link};
`;

export const STitle = styled.h1`
  color: ${({ theme }) => theme.colors.active};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const SSubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;

  text-align: center;
  padding-bottom: 20px;
`;

export const SLinkWrap = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

export const SBaseButton = styled(BaseButton)`
  margin: 10px 0 5px 0;
`;
