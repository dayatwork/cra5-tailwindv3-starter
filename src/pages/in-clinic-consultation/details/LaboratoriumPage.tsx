/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

import { PaginationTable } from 'components/shared/table/PaginationTable'
import { PlusIcon } from '@heroicons/react/outline'

const dummyData = [
  {
    id: 1,
    date: {
      date: '2021-12-12',
      time: '09:00',
    },
    tags: 'IVF - Day 2',
    location: 'IVF Lab',
    requestedBy: 'Doctor',
    serviceRequest: 'ICSI',
    requestStatus: 'Active',
    reportStatus: 'Partial',
    note: '-',
    analyzeBy: 'Laboran A',
    publishedOn: {
      date: '2021-10-10',
      time: '09:00',
    },
  },
  {
    id: 2,
    date: {
      date: '2021-12-11',
      time: '09:00',
    },
    tags: 'IVF - Day 1',
    location: 'IVF Lab',
    requestedBy: 'Doctor',
    serviceRequest: 'ICSI',
    requestStatus: 'Active',
    reportStatus: 'Partial',
    note: '-',
    analyzeBy: 'Laboran A',
    publishedOn: {
      date: '2021-10-10',
      time: '09:00',
    },
  },
]

type Date = typeof dummyData[0]['date']

const LaboratoriumPage = () => {
  const data = useMemo(() => dummyData, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Requested on',
        Footer: 'Requested on',
        accessor: 'date',
        Cell: ({ value }: { value: Date }) => (
          <div>
            <p>{value.date}</p>
            <p>{value.time}</p>
          </div>
        ),
      },
      {
        Header: 'Tags',
        Footer: 'Tags',
        accessor: 'tags',
      },
      {
        Header: 'Location',
        Footer: 'Location',
        accessor: 'location',
      },
      {
        Header: 'Requested by',
        Footer: 'Requested by',
        accessor: 'requestedBy',
      },
      {
        Header: 'Request Status',
        Footer: 'Request Status',
        accessor: 'requestStatus',
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
        Header: 'Report Status',
        Footer: 'Report Status',
        accessor: 'reportStatus',
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
        Header: 'See Result',
        Footer: 'See Result',
        Cell: () => (
          <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
            Open
          </button>
        ),
      },
      {
        Header: 'Note',
        Footer: 'Note',
        accessor: 'note',
      },
      {
        Header: 'Analyze by',
        Footer: 'Analyze by',
        accessor: 'analyzeBy',
      },
      {
        Header: 'Published on',
        Footer: 'Published on',
        accessor: 'publishedOn',
        Cell: ({ value }: { value: Date }) => (
          <div>
            <p>{value.date}</p>
            <p>{value.time}</p>
          </div>
        ),
      },
      {
        Header: 'Action',
        Footer: 'Action',
        Cell: () => (
          <button className="text-xs font-semibold px-4 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-full">
            Cancel Request
          </button>
        ),
      },
    ],
    [],
  )
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Laboratorium History</h2>
        <button className="bg-primary-500 pl-3 pr-4 py-2 rounded-full text-white hover:bg-primary-600 shadow-sm text-sm font-semibold flex items-center space-x-2">
          <PlusIcon className="w-4 h-4" />
          <span>Request Lab Test</span>
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

export default LaboratoriumPage
