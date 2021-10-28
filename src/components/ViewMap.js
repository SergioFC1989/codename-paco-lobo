import React, { useState } from 'react'

import { Box, Button, Heading, Image, Text } from 'grommet';

import { initMap, loader } from '../services/maps' 
import { getAllDocumentsFirestore } from '../services/firestore'

import MapDark from '../assets/MapDark.png';

import Layout from './Layout';

const ViewMap = () => {
const [data, setData] = useState([])
const dataMarkersMap = () => getAllDocumentsFirestore('Ruta')
  .then(res => res.forEach(doc => setData(doc.data().data)))
  loader.load()
    .then(() => initMap(data))
    .catch(error => console.log(error))
  return(
    <>
      <Layout direction="column">
        {data.length <= 0 
        ? ( 
            <>
              <Box 

                animation="fadeIn" 
                width="large"
                height="auto" 
                align="center"
                margin="medium" 
                gap="small" 
                direction="column"
              >
                <Heading margin="xxsmall" textAlign="center" level="2">Routes Maps</Heading>
                <Text textAlign="center" size="large" >Haz click en el botón <strong>Ir al Mapa</strong></Text>
                <Text textAlign="center" size="large">Cuando los paquetes se hayan cargado en el mapa, haz <strong>un click</strong> sobre el marcador, para ver la información del paquete, y <strong>doble click</strong> para redireccionar a la página de Google Maps</Text>
                <Box width="medium" height="medium" margin="medium">
                  <Image src={MapDark} />
                </Box>
                <Box align="center" fill="horizontal" margin="small">
                  <Button 
                    primary 
                    fill="horizontal"
                    label="Ir al mapa" 
                    onClick={dataMarkersMap} 
                  />
                </Box>
              </Box>
            </> 
          )
        :
          (
            <Box 
              responsive 
              round="small"
              animation="fadeIn" 
              id="map"
              align="center" 
              width="100vh" 
              height="100vh" 
            />
          )
        }
      </Layout>
    </>
  )
};
export default ViewMap;