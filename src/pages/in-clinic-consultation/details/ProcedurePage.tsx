/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

import { PaginationTable } from 'components/shared/table/PaginationTable'
import { PlusIcon } from '@heroicons/react/outline'

const dummyData = [
  {
    id: 1,
    authoredOn: {
      date: '2021-12-12',
      time: '09:00',
    },
    lastMenstrualPeriod: {
      date: '2021-12-12',
      time: '09:00',
    },
    startDate: {
      date: '2021-12-12',
      time: '09:00',
    },
    finishDate: {
      date: '2021-12-12',
      time: '09:00',
    },
    procedure: 'IVF',
    protocol: 'Antagonist',
    cycle: 'II',
    status: 'Active',
  },
  {
    id: 2,
    authoredOn: {
      date: '2021-12-12',
      time: '09:00',
    },
    lastMenstrualPeriod: {
      date: '2021-12-12',
      time: '09:00',
    },
    startDate: {
      date: '2021-12-12',
      time: '09:00',
    },
    finishDate: {
      date: '2021-12-12',
      time: '09:00',
    },
    procedure: 'IVF',
    protocol: 'Antagonist',
    cycle: 'II',
    status: 'Active',
  },
]

type Date = typeof dummyData[0]['authoredOn']

const ProcedurePagePage = () => {
  const data = useMemo(() => dummyData, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Authored on',
        Footer: 'Authored on',
        accessor: 'authoredOn',
        Cell: ({ value }: { value: Date }) => (
          <div>
            <p>{value.date}</p>
            <p>{value.time}</p>
          </div>
        ),
      },
      {
        Header: 'Last Menstrual Period (LMP)',
        Footer: 'Last Menstrual Period (LMP)',
        accessor: 'lastMenstrualPeriod',
        Cell: ({ value }: { value: Date }) => (
          <div>
            <p>{value.date}</p>
            <p>{value.time}</p>
          </div>
        ),
      },
      {
        Header: 'Start Date',
        Footer: 'Start Date',
        accessor: 'startDate',
        Cell: ({ value }: { value: Date }) => (
          <div>
            <p>{value.date}</p>
            <p>{value.time}</p>
          </div>
        ),
      },
      {
        Header: 'Finish Date',
        Footer: 'Finish Date',
        accessor: 'finishDate',
        Cell: ({ value }: { value: Date }) => (
          <div>
            <p>{value.date}</p>
            <p>{value.time}</p>
          </div>
        ),
      },
      {
        Header: 'Procedure',
        Footer: 'Procedure',
        accessor: 'procedure',
      },
      {
        Header: 'Protocol',
        Footer: 'Protocol',
        accessor: 'protocol',
      },
      {
        Header: 'Cycle',
        Footer: 'Cycle',
        accessor: 'cycle',
      },
      {
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status',
        Cell: ({ value }: { value: string }) => (
          <span
            className={`text-xs inline-flex items-center px-3 pt-0.5 pb-1 rounded-full font-bold ${
              value === 'Active'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <svg
              className={`-ml-0.5 mr-1.5 h-2 w-2 ${
                value === 'Active'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            {value}
          </span>
        ),
      },

      {
        Header: 'Action',
        Footer: 'Action',
        Cell: () => (
          <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
            Detail
          </button>
        ),
      },
    ],
    [],
  )
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Procedure History</h2>
        <button className="bg-primary-500 pl-3 pr-4 py-2 rounded-full text-white hover:bg-primary-600 shadow-sm text-sm font-semibold flex items-center space-x-2">
          <PlusIcon className="w-4 h-4" />
          <span>Add New Procedure</span>
        </button>
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

export default ProcedurePagePage
