import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '@shared/hooks';
import { MainPost, Slice } from '@shared/components';
import { PhotoEditor } from '@features/PhotoEditor';
import { UploadFile } from 'antd';
import { getProfile } from '@entities/profile';
import { IUser } from '@entities/friends';
import { Carousel, Like, Modal } from '@shared/ui';

import { IPreviewPhotoProps } from '../model/previewPhoto.types';
import {
  Descriptions,
  SContainer,
  SContainerInfo,
  SContainerProfile,
  SContent,
  SEdit,
  SFooter,
  SInfoPic,
  SLeft,
  SRight,
} from './previewPhoto.styles';

export const PreviewPhoto: FC<IPreviewPhotoProps> = ({
  description,
  currentIndex,
  photos,
  open,
  onClose,
  updatePhoto,
}) => {
  const [userPhoto, setUserPhoto] = useState<IUser>();
  const [isLike, setIsLike] = useState(false);

  const [isEditorPhoto, setIsEditorPhoto] = useState(false);

  const dispatch = useAppDispatch();

  const handlerGetProfile = () => {
    dispatch(getProfile())
      .unwrap()
      .then((fetchedUser) => {
        setUserPhoto(fetchedUser);
      });
  };

  const handleLikeClick = () => {
    setIsLike((prev) => !prev);
  };

  const canselEdit = () => setIsEditorPhoto(false);

  const handlerEditionImage = (image: UploadFile) => {
    if (!image) return;

    updatePhoto(image.uid, image);
    setIsEditorPhoto(false);
  };

  useEffect(() => {
    handlerGetProfile();
  }, []);

  return (
    <Modal
      top="20px"
      isFooter={false}
      width="max-content"
      onClose={onClose}
      open={open}
      padding="0 0 0 0"
    >
      <SContainer>
        {isEditorPhoto && (
          <PhotoEditor
            canselEdit={canselEdit}
            onEditionImage={handlerEditionImage}
            image={photos[currentIndex - 1]}
          />
        )}
        {!isEditorPhoto && (
          <SContent>
            <SLeft>
              <Carousel speed={0} fixedMinHeight={800} dots={false} infinite photoList={photos} />
            </SLeft>
            <SRight>
              <SContainerProfile>
                {userPhoto && (
                  <MainPost
                    status={userPhoto.statusConnected}
                    time="прямо сейчас"
                    name={userPhoto.name}
                    avatar={userPhoto.avatar}
                    id={userPhoto.id}
                  />
                )}
              </SContainerProfile>
              <SContainerInfo>
                <Like onClick={handleLikeClick} isLike={isLike}>
                  0
                </Like>
              </SContainerInfo>
              <Descriptions>
                <Slice content={description} />
              </Descriptions>
            </SRight>
          </SContent>
        )}
        <SFooter>
          {!isEditorPhoto && (
            <SEdit onClick={() => setIsEditorPhoto((prev) => !prev)}>Редактировать</SEdit>
          )}
          <SInfoPic>
            {photos.length > 1
              ? `Фотографии для публикации поста ${currentIndex} из ${photos.length}`
              : `Фотография для публикации поста`}
          </SInfoPic>
          {!isEditorPhoto && <div />}
        </SFooter>
      </SContainer>
    </Modal>
  );
};
