import styled from 'styled-components';
import { IoCaretDownOutline } from 'react-icons/io5';
import { BsFillCameraFill } from 'react-icons/bs';
import { AiOutlineFile, AiOutlinePlayCircle } from 'react-icons/ai';
import { HiOutlineMusicalNote } from 'react-icons/hi2';
import { GiResize, GiTargetPoster } from 'react-icons/gi';
import { FaPaintBrush, FaPenFancy, FaRegHeart, FaPen, FaBell } from 'react-icons/fa';
import { IoMdClose, IoMdHeart } from 'react-icons/io';
import { TbShare3 } from 'react-icons/tb';
import { GoComment, GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { SlMagnifier } from 'react-icons/sl';
import { PiTextAa } from 'react-icons/pi';
import { LuArrowDownWideNarrow } from 'react-icons/lu';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export const Bell = styled(FaBell).attrs({
  size: 25,
})`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const ArrowDown = styled(IoCaretDownOutline)``;

export const SortedArrow = styled(LuArrowDownWideNarrow).attrs({
  size: 20,
})``;

export const Camera = styled(BsFillCameraFill).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Redaction = styled(FaPen).attrs({
  size: 15,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const Video = styled(AiOutlinePlayCircle).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Music = styled(HiOutlineMusicalNote).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const SFile = styled(AiOutlineFile).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Poster = styled(GiTargetPoster).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Like = styled(FaRegHeart)`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const BgLike = styled(IoMdHeart).attrs({})`
  cursor: pointer;
`;

export const Shared = styled(TbShare3)`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const Comment = styled(GoComment)`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const Close = styled(IoMdClose).attrs({
  size: 20,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const Magnifier = styled(SlMagnifier).attrs({
  size: 20,
})`
  color: ${({ theme }) => theme.colors.active};
  cursor: pointer;
`;

export const BeautPen = styled(FaPenFancy).attrs({
  size: 20,
})`
  color: ${({ theme }) => theme.colors.active};
  cursor: pointer;
`;

export const ArrowRight = styled(GoArrowLeft)`
  color: red;
  cursor: pointer;
`;

export const ArrowLeft = styled(GoArrowLeft).attrs({
  size: 50,
})`
  color: ${({ theme }) => theme.colors.active};
  cursor: pointer;
`;

export const PaintBrush = styled(FaPaintBrush).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.text,
}))`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const Resizer = styled(GiResize).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.text,
}))`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const Text = styled(PiTextAa).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.text,
}))`
  color: red;
  cursor: pointer;
`;
