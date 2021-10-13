import React from 'react';

import { Image, Box } from 'grommet';

const Header = ({ src }) => (
  <>
    <Box 
      responsive
      width="medium"
      height="small"
      justify="center"
      round="medium"
      margin="xlarge"
      animation="fadeIn"
    >
      <Image src={src} />
    </Box>
  </>
);

export default Header;