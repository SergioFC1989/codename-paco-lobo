import React, {useState} from 'react'
import { useRecoilState } from 'recoil';
import { 
  Box, 
  FileInput, 
  Button, 
  Image, 
} from 'grommet';

import parserFileXLSX from './function'
import dataState from './atom'
import Layout from '../../components/Layout';
import SearchId from '../../components/SearchId';
import Modal from '../../components/Modal';

import { 
  addNewDocumentFirestore, 
  deleteAllCollectionFirestore
} from '../../services/firestore';

import Loading from '../../components/Loading';
import Upload from '../../assets/Upload.png';
import Search from '../../assets/Search.png';
import Empty from '../../assets/Empty.png';
import Completed from '../../assets/Completed.png';
import TableList from '../../components/TableList';
import Notification from '../../components/Notification';

const UploadXLSX = () => {
  const [loading, setLoading] = useState(false);
  const [formUpload, setFormUpload] = useState(true);
  const [modalErrorUpload, setModalErrorUpload] = useState(false);
  const [modalFound, setModalFound] = useState(false);
  const [notification, setNotification] = useState(false);
  const [fileUpload, setFileUpload] = useState();
  const [inputId, setInputId] = useState('');
  const [sheets, setSheets] = useState([]);
  const [dataList, setDataList] = useRecoilState(dataState)

  const onChangeUpload = event => {
    const fileList = event.target.files
    for (let i = 0; i < fileList.length; i ++) return setFileUpload(fileList[i]);
  };

  const parserSheetsXLSX = async () => {
      if(!fileUpload) return setModalErrorUpload(true)
      setLoading(true)
      parserFileXLSX.setFile(fileUpload)
      const sheetNames = await parserFileXLSX.getSheetsName()
      const data = sheetNames.map(async (name) => await parserFileXLSX.getSheet(name))
      Promise.all(data)
        .then(data => {
          deleteAllCollectionFirestore('Ruta')
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
 
  const addDocumentInFirestore = () => {
    if(dataList.length <= 0) return;
    addNewDocumentFirestore('Ruta', dataList)
      .then(() => {
        setDataList([])
        setFormUpload(true)
        setNotification(true)
      })
      .catch(error => console.log(error))
  };

  return(
    <>
      {notification && ( 
        <Notification 
          primary
          position="center"
          title="Enhorabuena"
          message="Los datos se han agregado al mapa correctamente"
          url="https://codename-paco-lobo.web.app/view_map_now"
          labelButton="Aceptar"
          onClick={() => setNotification(false)}
        /> 
      )}
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
        {modalFound && (
          <Modal 
            position="top"
            title="ENHORABUENA!"
            color="brand"
            message="Los datos se registraron correctamente"
            src={Completed}
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
              fill="horizontal"
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
                    <Box 
                      fill 
                      animation="fadeIn" 
                      align="center" 
                      justify="center" 
                      gap="small"
                    >
                      <TableList header={["Id", "Dirección"]} state={dataState} />
                    </Box>
                  )
                }
              </Box>
            <Box width="medium">
              <Button fill="horizontal" primary label="Posicionar" onClick={addDocumentInFirestore} /> 
            </Box>
          </Box>
        )}
      </Layout>
    </>
  )
};
export default UploadXLSX;