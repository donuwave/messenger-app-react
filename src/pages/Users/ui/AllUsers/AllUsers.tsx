import React, { FC } from 'react';
import { ObserverList } from '@shared/components';
import { TbListSearch } from 'react-icons/tb';
import { Friend } from '@widgets/Friend';
import { BaseButton } from '@shared/ui';

import { SContainerUsers, SText, STitle } from '../user.styles';
import { IAllUsers } from '../../model/allUsers.types';

const AllUsers: FC<IAllUsers> = ({ users, loading, haseMore, handlerNextPage }) => {
  return (
    <div>
      {!!users.length && (
        <SContainerUsers>
          <STitle>
            <SText>Другие пользователи</SText>
            <BaseButton
              color="primary"
              leftIcon={<TbListSearch size={15} />}
              variant="secondary"
              bgTransparent
            >
              Расширенный поиск
            </BaseButton>
          </STitle>
          <div>
            <ObserverList
              list={users}
              itemContent={(user) => <Friend key={user.id} user={user} type="notFriend" />}
              isPending={loading}
              hasMore={haseMore}
              fetchNextPage={handlerNextPage}
              skeleton={() => <div>Загрузка...</div>}
              notFoundMessage="Пользователей не найдено"
            />
          </div>
        </SContainerUsers>
      )}
    </div>
  );
};

export default AllUsers;
