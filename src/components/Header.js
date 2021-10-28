import React from 'react';

import { Image, Box } from 'grommet';

const Header = ({ src }) => (
  <>
    <Box 
      width="medium"
      height="medium"
      justify="center"
      margin="medium"
      animation="fadeIn"
    >
      <Image src={src} />
    </Box>
  </>
);

export default Header;