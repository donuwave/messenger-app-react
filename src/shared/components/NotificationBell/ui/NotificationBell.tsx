import React, { useEffect } from 'react';
import { Bell } from '@shared/assets';
import { Dropdown } from 'antd';
import { useAppSelector, useAppDispatch } from '@shared/hooks';
import {
  notificationCountSelectors,
  notificationHaseMoreSelectors,
  notificationLimitSelectors,
  notificationLoadingSelectors,
  notificationPageSelectors,
  notificationSelectors,
  addPage,
  getAllNotificationCount,
  getAllNotification,
  deleteAllNotifications,
  INotifyItem,
} from '@entities/notification';
import { selectorProfile } from '@entities/profile';
import { BaseList, Badge } from '@shared/components';

import { NotifyItem } from './NotifyItem/NotifyItem';
import { SContent, SList, SNotificationBellStyled } from './notificationBell.styles';
import Header from './Header/Header';

export const NotificationBell = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectorProfile);
  const notification = useAppSelector(notificationSelectors);
  const countNotification = useAppSelector(notificationCountSelectors);
  const page = useAppSelector(notificationPageSelectors);
  const loading = useAppSelector(notificationLoadingSelectors);
  const limit = useAppSelector(notificationLimitSelectors);
  const haseMore = useAppSelector(notificationHaseMoreSelectors);

  const handlerGetAllNotification = () => {
    dispatch(getAllNotification({ page: 1, limit }))
      .unwrap()
      .catch(() => {});
  };

  const handlerAllCount = () => dispatch(getAllNotificationCount());

  const handlerNextPageGetAllNotification = () => {
    dispatch(getAllNotification({ page: page + 1, limit }))
      .unwrap()
      .then(() => {
        dispatch(addPage());
      })
      .catch(() => {});
  };

  const handlerDeleteNotification = () => {
    if (user.id) {
      dispatch(deleteAllNotifications(user.id));
    }
  };

  useEffect(() => {
    if (notification.length === 0) {
      handlerGetAllNotification();
      handlerAllCount();
    }
  }, []);

  return (
    <Dropdown
      placement="bottomRight"
      dropdownRender={() => (
        <SNotificationBellStyled>
          <Header deleteAllNotification={handlerDeleteNotification} />
          <SList>
            <BaseList<INotifyItem>
              isPadding={false}
              list={notification}
              isPending={loading}
              itemContent={(item) => <NotifyItem key={item.id} {...item} />}
              isBorderBottom
              hasMore={haseMore}
              fetchNextPage={handlerNextPageGetAllNotification}
            />
          </SList>
        </SNotificationBellStyled>
      )}
    >
      <SContent>
        <Badge $isAbsolute count={countNotification} />
        <Bell />
      </SContent>
    </Dropdown>
  );
};
