import { Box, Button, Image, TextInput } from 'grommet';
import React from 'react'

const SearchId = ({ placeholder, src, onClick, label, onChangeInput, valueInput }) => {
  return(
    <>
      <Box
        fill
        animation="fadeIn" 
        pad="medium" 
        align="center" 
        gap="medium"
      >
        <Box width="small" height="small">
          <Image fit="cover" src={src} />
        </Box>
        <TextInput
          type="text"
          textAlign="center"
          placeholder={placeholder}
          onChange={onChangeInput}
          value={valueInput} 
        />
          <Button 
            fill="horizontal"
            primary 
            size="large" 
            label={label}
            onClick={onClick} 
          />
      </Box>
    </>

  )
};
export default SearchId;