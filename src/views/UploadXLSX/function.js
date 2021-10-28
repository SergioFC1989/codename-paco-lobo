import readXlsxFile from 'read-excel-file'

const ID_INDEX = 1
const ADDRESS_INDEX = 5
const LATITUDE_INDEX = 9
const LONGITUDE_INDEX = 10

class ParserXLSX {

    setFile (file) {  
    this.file = file
  };

  async getSheetsName () {
    const sheet = await readXlsxFile(this.file, { getSheets: true})
    return sheet.map(sh => sh.name)
  };

  async getSheet(name){
    const sheet = await readXlsxFile(this.file, { sheet: name })
    sheet.splice(0,3)
    sheet.pop()   
    return sheet.map(row => ({
      id: row[ID_INDEX],
      address: row[ADDRESS_INDEX],
      lat: row[LATITUDE_INDEX],
      lng: row[LONGITUDE_INDEX],
      url: `https://www.google.com/maps/search/?api=1&query=${row[LATITUDE_INDEX]}%2C${row[LONGITUDE_INDEX]}`  
    }))
  };
  
}
export default new ParserXLSX();