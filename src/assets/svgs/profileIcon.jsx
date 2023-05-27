import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ratios from '../../constants/ratios';

const ProfileIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(28)}
    height={ratios.widthPixel(28)}
    viewBox="0 0 28 28"
    fill="none">
    <Path
      fill="#372329"
      d="M14 4.66659C11.4227 4.66659 9.33333 6.75592 9.33333 9.33325C9.33333 11.9106 11.4227 13.9999 14 13.9999C16.5773 13.9999 18.6667 11.9106 18.6667 9.33325C18.6667 6.75592 16.5773 4.66659 14 4.66659ZM7 9.33325C7 5.46726 10.134 2.33325 14 2.33325C17.866 2.33325 21 5.46726 21 9.33325C21 13.1992 17.866 16.3333 14 16.3333C10.134 16.3333 7 13.1992 7 9.33325ZM9.33333 20.9999C7.40034 20.9999 5.83333 22.5669 5.83333 24.4999C5.83333 25.1442 5.311 25.6666 4.66667 25.6666C4.02233 25.6666 3.5 25.1442 3.5 24.4999C3.5 21.2783 6.11167 18.6666 9.33333 18.6666H18.6667C21.8883 18.6666 24.5 21.2783 24.5 24.4999C24.5 25.1443 23.9777 25.6666 23.3333 25.6666C22.689 25.6666 22.1667 25.1443 22.1667 24.4999C22.1667 22.5669 20.5997 20.9999 18.6667 20.9999H9.33333Z"
    />
  </Svg>
);
export default ProfileIcon;
