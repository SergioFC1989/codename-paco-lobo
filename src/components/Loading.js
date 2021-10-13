import { Box, Heading, Layer, Spinner } from 'grommet';
import React from 'react'

const Loading = ({ title }) => {
  return(
    <>
      <Layer>
        <Box
          flex 
          width="small"  
          align="center" 
          margin="small"
          gap="xxxsmall" 
          pad="xsmall"
        >
          <Spinner size="large" />
        </Box>
      </Layer>
    </>
  )
};

export default Loading;
