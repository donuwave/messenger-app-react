import { ApiProfile, IUser } from '@entities/friends';

export const userArrayConverting = (data: ApiProfile[]): IUser[] => {
  return data.map((user) => ({
    name: user.name,
    email: user.email,
    banned: user.banned,
    id: user.id,
    banReason: user.banReason,
    avatar: user.imgSubstitute || 'тут будет картинка',
    friends: user.friends,
    statusConnected: user.statusConnected,
    timeConnected: user.timeConnected,
    roles: user?.roles?.map(({ value, createdAt }) => {
      return {
        value,
        createdAt,
      };
    }),
  }));
};
