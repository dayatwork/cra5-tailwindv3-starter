/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { QrcodeIcon } from '@heroicons/react/solid'

import { PaginationTable } from 'components/shared/table/PaginationTable'

export default function HomeMonitoringDetailPage() {
  const data = useMemo(
    () => [
      {
        id: 1,
        medicine: 'Drug A',
        dosage: {
          value: 300,
          unit: 'ml',
        },
        frequency: 1,
        time: ['08.00 - 10.00'],
        duration: {
          value: 4,
          unit: 'day',
        },
        start: {
          date: '2021-11-01',
          time: '14:00',
        },
      },
      {
        id: 2,
        medicine: 'Drug B',
        dosage: {
          value: 50,
          unit: 'ml',
        },
        frequency: 1,
        time: ['07.00 - 10.00', '18.00 - 20.00'],
        duration: {
          value: 3,
          unit: 'day',
        },
        start: {
          date: '2021-11-01',
          time: '14:00',
        },
      },
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Medicine',
        Footer: 'Medicine',
        accessor: 'medicine',
      },
      {
        Header: 'Dosage',
        Footer: 'Dosage',
        accessor: 'dosage',
        Cell: ({ value }: any) => `${value.value} ${value.unit}`,
      },
      {
        Header: 'Frequency',
        Footer: 'Frequency',
        accessor: 'frequency',
      },
      {
        Header: 'Time',
        Footer: 'Time',
        accessor: 'time',
        Cell: ({ value }: any) => (
          <div>
            {value.map((v: any) => (
              <p key={v}>{v}</p>
            ))}
          </div>
        ),
      },
      {
        Header: 'Duration',
        Footer: 'Duration',
        accessor: 'duration',
        Cell: ({ value }: any) => `${value.value} ${value.unit}`,
      },
      {
        Header: 'Start',
        Footer: 'Start',
        accessor: 'start',
        Cell: ({ value }: any) => `${value.date} ${value.time}`,
      },
    ],
    [],
  )

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8">
        <Link
          to="/home-monitoring"
          className="text-primary-600 hover:underline block mb-4"
        >
          &larr; Back to Home Monitoring list
        </Link>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Prescription and Monitoring Detail
          </h1>
          <p className="text-gray-400">We manage your bussiness</p>
        </div>
        <PaginationTable
          showFooter={false}
          data={data}
          columns={columns}
          searchable={false}
          pagination={false}
        />

        <div className="flex items-center space-x-4 mb-6">
          <h2 className="text-xl font-bold">Drug A Monitoring</h2>
          <button className="text-secondary-700 bg-secondary-50 px-6 py-2 text-sm font-semibold rounded-full shadow flex items-center space-x-2 hover:bg-secondary-100">
            <span>Scan QR Code</span>
            <QrcodeIcon className="w-5 h-5 text-secondary-700" />
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-md overflow-hidden">
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"></th>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="col"
            >
              Day 1
            </th>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="col"
            >
              Day 2
            </th>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="col"
            >
              Day 3
            </th>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="col"
            >
              Day 4
            </th>
          </tr>
          <tr>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="row"
            >
              Status
            </th>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Done
            </td>
          </tr>
          <tr>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="row"
            >
              Time
            </th>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              2021-12-05 20.00
            </td>
          </tr>
          <tr>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="row"
            >
              By
            </th>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Nurse
            </td>
          </tr>
        </table>

        <div className="mt-10 flex items-center space-x-4 mb-6">
          <h2 className="text-xl font-bold">Drug B Monitoring</h2>
          <button className="text-secondary-700 bg-secondary-50 px-6 py-2 text-sm font-semibold rounded-full shadow flex items-center space-x-2 hover:bg-secondary-100">
            <span>Scan QR Code</span>
            <QrcodeIcon className="w-5 h-5 text-secondary-700" />
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-md overflow-hidden">
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"></th>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="col"
            >
              Day 1
            </th>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="col"
            >
              Day 2
            </th>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="col"
            >
              Day 3
            </th>
          </tr>
          <tr>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="row"
            >
              Status
            </th>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Done
            </td>
          </tr>
          <tr>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="row"
            >
              Time
            </th>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              2021-12-05 20.00
            </td>
          </tr>
          <tr>
            <th
              className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50"
              scope="row"
            >
              By
            </th>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Nurse
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}
