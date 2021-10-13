import React from 'react'
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Layout = ({ children, direction }) => (
  <>
    <Box
      direction={direction}
      align="center" 
      margin="xsmall"
      gap="small"
      flex={true}
      fill
    >
      {children}
    </Box>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;