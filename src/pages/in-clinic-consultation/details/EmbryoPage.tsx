/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

import { PaginationTable } from 'components/shared/table/PaginationTable'
// import { PlusIcon } from '@heroicons/react/outline'

const dummyData = [
  {
    id: 1,
    no: 1,
    embryoId: 'EB001',
    status: 'IN',
    lastCondition: 'Incubator',
  },
  {
    id: 2,
    no: 2,
    embryoId: 'EB002',
    status: 'OUT',
    lastCondition: 'Freezing',
  },
]

const EmbryoPage = () => {
  const data = useMemo(() => dummyData, [])

  const columns = useMemo(
    () => [
      {
        Header: 'No',
        Footer: 'No',
        accessor: 'no',
      },
      {
        Header: 'Embryo ID',
        Footer: 'Embryo ID',
        accessor: 'embryoId',
      },
      {
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Last Condition',
        Footer: 'Last Condition',
        accessor: 'lastCondition',
      },

      {
        Header: 'Details',
        Footer: 'Details',
        Cell: () => (
          <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
            Open
          </button>
        ),
      },
    ],
    [],
  )
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Embryo List</h2>
        {/* <button className="bg-primary-500 pl-3 pr-4 py-2 rounded-full text-white hover:bg-primary-600 shadow-sm text-sm font-semibold flex items-center space-x-2">
          <PlusIcon className="w-4 h-4" />
          <span>Add New Procedure</span>
        </button> */}
      </div>
      <PaginationTable
        showFooter={false}
        data={data}
        columns={columns}
        searchable={false}
        pagination={false}
      />
    </div>
  )
}

export default EmbryoPage
