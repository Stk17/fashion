import {Box, useTheme} from '../../components';
import Svg, {Path} from 'react-native-svg';
import React, {ReactNode} from 'react';

const Google = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path
      d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
      fill="#4285F4"
    />
  </Svg>
);

const Facebook = () => (
  <Svg width={10} height={18} viewBox="0 0 10 18" fill="none">
    <Path
      d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
      fill="#3C5A99"
    />
  </Svg>
);

const Apple = () => (
  <Svg width={10} height={18} viewBox="0 0 10 18" fill="none">
    <Path
      d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
      fill="#3C5A99"
    />
  </Svg>
);
interface SocialIconProps {
  children: ReactNode;
}
const SocailIcon = ({children}: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;

  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center">
      {children}
    </Box>
  );
};
const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocailIcon>
        <Google />
      </SocailIcon>
      <SocailIcon>
        <Facebook />
      </SocailIcon>
      <SocailIcon>
        <Apple />
      </SocailIcon>
    </Box>
  );
};

export default SocialLogin;
