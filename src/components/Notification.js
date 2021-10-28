import { Box, Button, Heading, Image, Layer, Text, TextInput } from 'grommet';
import React from 'react'

const Notification = ({ modal, plain, position, color, title, message, url, labelButton, ...props }) => {
  return(
    <>
      <Layer
        position="center"
        animate={true}
        modal={modal}
        plain={plain}
        position={position}
      >
        <Box 
          flex 
          width="large"  
          align="center" 
          margin="small"
          gap="small" 
          pad="small"
        >
          <Heading margin="xxsmall" textAlign="center" color={color} level="3">{title}</Heading>
          <Text margin="xsmall" textAlign="center" level="4">{message}</Text>
          <TextInput textAlign="center" value={url}/>
          <Button fill="horizontal" {...props} label={labelButton} />
        </Box>
      </Layer>
    </>
  )
};

export default Notification;