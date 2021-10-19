import { Box, Button, Heading, Image, Layer } from 'grommet';
import React from 'react'

const Modal = ({ color, title, message, src, colorButton, labelButton, onClick, props  }) => {
  return(
    <>
      <Layer
        position="center"
        animate={true}
      >
        <Box 
          flex 
          width="medium"  
          align="center" 
          margin="small"
          gap="xxxsmall" 
          pad="xsmall"
        >
          <Heading margin="xxsmall" textAlign="center" color={color} level="3">{title}</Heading>
          <Heading margin="medium" textAlign="center" level="4">{message}</Heading>
          <Box>
            <Image src={src} />
          </Box>
          <Box fill="horizontal">
            <Button fill primary size="large" color={colorButton} label={labelButton} onClick={onClick} />
          </Box>
        </Box>
      </Layer>
    </>
  )
};

export default Modal;