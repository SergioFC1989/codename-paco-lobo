import React from 'react';
import { useRecoilState } from 'recoil';

import { 
  Button,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
} from 'grommet';

import { Trash } from 'grommet-icons'

const TableList = ({ header, state }) => {
  const [bodyTable, setBodyTable] = useRecoilState(state)
  return(
    <>
      <Table>
        <TableHeader>
          <TableRow>
          {header.map(element => (
            <TableCell scope="col" border="bottom"><strong>{element}</strong></TableCell>
          ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {bodyTable.map(element => (
            <TableRow>
              <TableCell scope="row" border="bottom">{element.id}</TableCell>
              <TableCell scope="row" border="bottom">{element.address}</TableCell>
              <TableCell scope="row">
                <Button 
                  icon={<Trash color="#F07F7F" />}
                  onClick={() => setBodyTable(current => current.filter(e => e !== element))} 
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
};

export default TableList;