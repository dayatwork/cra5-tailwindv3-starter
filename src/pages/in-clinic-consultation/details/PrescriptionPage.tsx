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
    tags: 'IVF - Day 2',
    authoredBy: 'Doctor',
    requestStatus: 'Active',
    pharmacyStatus: 'In-Progress',
    monitoringStatus: 'Active',
    todayMonitoringDetail: {
      status: 'Not Yet',
      time: '',
      by: '',
    },
  },
  {
    id: 2,
    authoredOn: {
      date: '2021-12-11',
      time: '09:00',
    },
    tags: 'IVF - Day 1',
    authoredBy: 'Doctor',
    requestStatus: 'Active',
    pharmacyStatus: 'Completed',
    monitoringStatus: 'Active',
    todayMonitoringDetail: {
      status: 'Done',
      time: '2021-10-10 09:00',
      by: 'Nurse',
    },
  },
]

type AuthoredOn = typeof dummyData[0]['authoredOn']
type MonitoringDetail = typeof dummyData[0]['todayMonitoringDetail']

const PrescriptionPage = () => {
  const data = useMemo(() => dummyData, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Authored on',
        Footer: 'Authored on',
        accessor: 'authoredOn',
        Cell: ({ value }: { value: AuthoredOn }) => (
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
        Header: 'Authored by',
        Footer: 'Authored by',
        accessor: 'authoredBy',
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
        Header: 'Pharmacy Status',
        Footer: 'Pharmacy Status',
        accessor: 'pharmacyStatus',
        Cell: ({ value }: { value: string }) => (
          <span
            className={`text-xs inline-flex items-center px-3 pt-0.5 pb-1 rounded-full font-bold ${
              value === 'Completed'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <svg
              className={`-ml-0.5 mr-1.5 h-2 w-2 ${
                value === 'Completed'
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
        Header: 'Monitoring Status',
        Footer: 'Monitoring Status',
        accessor: 'monitoringStatus',
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
        Header: 'Today Monitoring Detail',
        Footer: 'Today Monitoring Detail',
        accessor: 'todayMonitoringDetail',
        Cell: ({ value }: { value: MonitoringDetail }) => (
          <div>
            <p className="grid grid-cols-2">
              <span>Status</span>
              <span
                className={`text-xs inline-flex items-center px-3 pt-0.5 pb-1 rounded-full font-bold ${
                  value.status === 'Done'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <svg
                  className={`-ml-0.5 mr-1.5 h-2 w-2 ${
                    value.status === 'Done'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx={4} cy={4} r={3} />
                </svg>
                {value.status}
              </span>
            </p>
            <p className="grid grid-cols-2 items-center">
              <span>Time</span>
              <span className="text-sm font-semibold">{value.time || '-'}</span>
            </p>
            <p className="grid grid-cols-2 items-center">
              <span>By</span>
              <span className="text-sm font-semibold">{value.by || '-'}</span>
            </p>
          </div>
        ),
      },
      {
        Header: 'See Prescription & Monitoring',
        Footer: 'See Prescription & Monitoring',
        Cell: () => (
          <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
            Open
          </button>
        ),
      },
      {
        Header: 'Cancel Prescription',
        Footer: 'Cancel Prescription',
        Cell: () => (
          <button className="text-xs font-semibold px-4 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-full">
            Cancel Prescription
          </button>
        ),
      },
    ],
    [],
  )
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Prescription History</h2>
        <button className="bg-primary-500 pl-3 pr-4 py-2 rounded-full text-white hover:bg-primary-600 shadow-sm text-sm font-semibold flex items-center space-x-2">
          <PlusIcon className="w-4 h-4" />
          <span>Add New Prescription</span>
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

export default PrescriptionPage
