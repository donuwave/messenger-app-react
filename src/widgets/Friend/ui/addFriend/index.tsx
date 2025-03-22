import React, { FC } from 'react';
import { BaseButton } from '@shared/ui';

import { SContainer, SText } from './addFriend.styled';
import { IAddFriend } from './model/IAddFriend';

export const AddFriend: FC<IAddFriend> = ({
  addFriendHandler,
  viewAddFriendService,
  isSendFriend,
}) => {
  return (
    <SContainer>
      {!viewAddFriendService && !isSendFriend && (
        <BaseButton onClick={addFriendHandler} height="30px">
          Добавить в друзья
        </BaseButton>
      )}
      {(viewAddFriendService || isSendFriend) && <SText>Вы отправлии приглашение в друзья</SText>}
    </SContainer>
  );
};
