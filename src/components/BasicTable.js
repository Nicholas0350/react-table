

import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from "./columns";
import { useTable } from 'react-table';
import { useMemo } from 'react';




export const BasicTable = () => {

  const columns = useMemo(() => COLUMN, [])
  const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable({
    columns,
    data
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>

      </table>

    </div>
  )
}
