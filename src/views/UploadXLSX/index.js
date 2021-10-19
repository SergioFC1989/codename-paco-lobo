import React, {useState} from 'react'

import { 
  Box, 
  FileInput, 
  Button, 
  Image, 
  Table,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
} from 'grommet';

import { Trash } from 'grommet-icons'

import parserFileXLSX from './function'

import Layout from '../../components/Layout';
import SearchId from '../../components/SearchId';
import Modal from '../../components/Modal';

import Loading from '../../components/Loading';
import Upload from '../../assets/Upload.png';
import Search from '../../assets/Search.png';
import Empty from '../../assets/Empty.png';
import Completed from '../../assets/Completed.png';

const UploadXLSX = () => {
  const [loading, setLoading] = useState(false);
  const [formUpload, setFormUpload] = useState(true);
  const [modalErrorUpload, setModalErrorUpload] = useState(false);
  const [modalFound, setModalFound] = useState(false);
  const [fileUpload, setFileUpload] = useState();
  const [inputId, setInputId] = useState('');
  const [sheets, setSheets] = useState([]);
  const [dataList, setDataList] = useState([])

  const onChangeUpload = event => {
    const fileList = event.target.files
    for (let i = 0; i < fileList.length; i ++) return setFileUpload(fileList[i]);
  };

  // Vamos a parsear todas las hojas, y a saber el nombre de todas.
  // Para el siguiente paso hacer un bucle, y crear un array de objetos con todo el archivo.xlsx
  // Hacemos esto, para solo usar la libreria excel, una sola vez
  const parserSheetsXLSX = async () => {
      if(!fileUpload) return setModalErrorUpload(true)
      setLoading(true)
      parserFileXLSX.setFile(fileUpload)
      const sheetNames = await parserFileXLSX.getSheetsName()
      const data = sheetNames.map(async (name) => await parserFileXLSX.getSheet(name))
      Promise.all(data)
        .then(data => {
          setSheets(data)
          setFormUpload(false)
          setLoading(false)
        })
        .catch(error=>console.log(error))
  };

  const handleInsertar = () => {
    if(inputId.length <= 0) return;
    findAndSetDataList(sheets, inputId)
    setLoading(true)
    setLoading(false)
    setInputId('')
  };

  const findAndSetDataList = (sheet, id) => sheet.find(route => {
    let rowFound = route.find(row => row.id === id);
    if(rowFound) {
      setDataList(prevDataList => [...prevDataList, rowFound]);
      setModalFound(true)
      setTimeout(() => {
        setModalFound(false)
      }, 1200);
      return true
    }
  });
 
  return(
    <>
      <Layout direction="column">
      {modalErrorUpload && (
        <Modal 
          title="HEMOS DETECTADO UN ERROR"
          color="#F07F7F"
          message="Seleccione un archivo .xlsx"
          colorButton="#F07F7F"
          labelButton="Cerrar"
          secondary
          onClick={() => setModalErrorUpload(false)}
        />
      )}
        {formUpload &&(
          <Box
            animation="fadeIn" 
            pad="small" 
            align="center" 
            width="medium" 
            gap="medium"
            margin="xxsmall"
          >
            <FileInput
              messages={{
                browse: ' ',
                dropPrompt: 'Suba aquí, su archivo .xlsx',
              }}
              onChange={onChangeUpload}
            />
            <Box width="small" height="small">
              <Image src={Upload} />
            </Box>
            <Button 
              fill
              primary 
              label="Analizar" 
              size="large" 
              onClick={parserSheetsXLSX} 
            />
            {loading && ( <Loading /> )}
          </Box>
        )}
        {!formUpload && (
          <Box 
            fill="horizontal"
            animation="fadeIn" 
            pad="small" 
            align="center" 
            gap="medium"
            margin="xxsmall"
          >
          {modalFound && (
            <Modal 
              title="ENHORABUENA!"
              color="brand"
              message="Los datos se registraron correctamente"
              src={Completed}
            />
          )}
            <Box 
              direction="column" 
              align="center" 
              width="medium"
              animation="fadeIn" 
              pad="small"  
              gap="medium"
              margin="small"
            >
            <SearchId 
              placeholder="Introduzca un numero ID"
              src={Search}
              label="Insertar"
              onClick={handleInsertar}
              onChangeInput={event => setInputId(event.target.value)}
              valueInput={inputId}
            />
          </Box>
            <Box
              direction="column" 
              align="center" 
              width="large"
            >
              {dataList.length <= 0 
                ?  
                  (
                    <Box animation="fadeIn" margin="xxxsmall" width="medium">
                      <Image animation="fadeIn" src={Empty} />
                    </Box>
                  )
                : 
                  (
                    <Box fill animation="fadeIn" align="center" justify="center" gap="small">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableCell scope="col" border="bottom">Id</TableCell>
                            <TableCell scope="col" border="bottom">Dirección</TableCell>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {dataList.map(element => (
                            <TableRow>
                              <TableCell scope="row" border="bottom">{element.id}</TableCell>
                              <TableCell scope="row" border="bottom">{element.address}</TableCell>
                              <Button 
                                icon={<Trash color="#F07F7F" />} 
                                onClick={() => setDataList(currentDataList => currentDataList.filter(e => e !== element))}
                              />
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  )
                }
              </Box>
            <Button fill primary label="Posicionar" onClick={() => console.log(dataList)} /> 
          </Box>
        )}
      </Layout>
    </>
  )
};
export default UploadXLSX;