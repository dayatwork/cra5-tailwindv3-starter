/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'
// import { DotsVerticalIcon } from '@heroicons/react/outline'
// import { PhoneIcon, MailIcon } from '@heroicons/react/solid'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'

import { PaginationTable } from 'components/shared/table/PaginationTable'
import { InputDatePicker } from 'components/shared/datepicker'

export default function HomeMonitoringPage() {
  const data = useMemo(
    () => [
      {
        id: 1,
        status: 'Done',
        number: '1',
        time: '09:00',
        mrNumber: '#001234',
        name: 'Jane Doe',
        photo:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        age: 42,
        gender: 'Female',
        surgeryType: 'Ovum Pick Up',
        phone: '081212121212',
        by: 'Pasien',
      },
      {
        id: 2,
        status: 'Not Done',
        number: '2',
        time: '09:00',
        mrNumber: '#001234',
        name: 'Jane Doe',
        photo:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        age: 42,
        gender: 'Female',
        surgeryType: 'Ovum Pick Up',
        phone: '081212121212',
        by: 'Nurse',
      },
      {
        id: 3,
        status: 'Done',
        number: '3',
        time: '09:00',
        mrNumber: '#001234',
        name: 'Jane Doe',
        photo:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        age: 42,
        gender: 'Female',
        surgeryType: 'Ovum Pick Up',
        phone: '081212121212',
        by: 'Pasien',
      },
    ],
    [],
  )

  const data2 = useMemo(
    () => [
      {
        id: 1,
        status: 'Done',
        number: '1',
        time: '09:00',
        mrNumber: '#001234',
        name: 'Jane Doe',
        photo:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        age: 42,
        gender: 'Female',
        surgeryType: 'Ovum Pick Up',
        phone: '081212121212',
        by: 'Pasien',
      },
      {
        id: 2,
        status: 'Done',
        number: '2',
        time: '09:00',
        mrNumber: '#001234',
        name: 'Jane Doe',
        photo:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        age: 42,
        gender: 'Female',
        surgeryType: 'Ovum Pick Up',
        phone: '081212121212',
        by: 'Nurse',
      },
      {
        id: 3,
        status: 'Done',
        number: '3',
        time: '09:00',
        mrNumber: '#001234',
        name: 'Jane Doe',
        photo:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        age: 42,
        gender: 'Female',
        surgeryType: 'Ovum Pick Up',
        phone: '081212121212',
        by: 'Pasien',
      },
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Prescription ID',
        Footer: 'Prescription ID',
        accessor: 'id',
      },
      {
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status',
        Cell: ({ value }: any) =>
          value === 'Done' ? (
            <p className="bg-green-100 text-green-800 rounded-full px-4 py-1 inline-block uppercase text-xs font-bold tracking-wider">
              {value}
            </p>
          ) : (
            <p className="bg-red-100 text-red-800 rounded-full px-4 py-1 inline-block uppercase text-xs font-bold tracking-wider">
              {value}
            </p>
          ),
      },

      {
        Header: 'MR Number',
        Footer: 'MR Number',
        accessor: 'mrNumber',
      },
      {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name',
        Cell: ({ value, row }: any) => {
          return (
            <div className="-ml-14 flex space-x-6 items-center">
              <img
                className="w-12 h-12 rounded-xl object-cover"
                src={row.original.photo}
                alt={value}
              />
              <p>{value}</p>
            </div>
          )
        },
      },
      {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Time',
        Footer: 'Time',
        accessor: 'time',
      },
      {
        Header: 'By',
        Footer: 'By',
        accessor: 'by',
      },
      {
        Header: 'Action',
        Footer: 'Action',
        Cell: () => (
          <div className="flex items-center space-x-4">
            <Link
              to="123"
              className="rounded-full px-6 py-2 bg-primary-500 text-white font-semibold hover:bg-primary-600 text-sm"
            >
              Details
            </Link>
            {/* <button className="p-2 rounded-lg hover:bg-gray-100">
              <DotsVerticalIcon className="w-5 h-5 text-gray-600" />
            </button> */}
          </div>
        ),
      },
    ],
    [],
  )

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Home Monitoring</h1>
          <p className="text-gray-400">We manage your bussiness</p>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-8">
        <Tab.Group>
          <Tab.List className="inline-block bg-white p-2 rounded-full shadow ">
            <Tab
              className={({ selected }) =>
                `py-2 px-8 rounded-l-full font-semibold ${
                  selected
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50'
                }`
              }
            >
              Active Prescription
            </Tab>
            <Tab
              className={({ selected }) =>
                `py-2 px-8 rounded-r-full font-semibold ${
                  selected
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50'
                }`
              }
            >
              History
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="py-8">
              <PaginationTable
                showFooter={false}
                data={data}
                columns={columns}
                searchable={true}
                pagination={true}
              />
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <PaginationTable
                showFooter={false}
                data={data2}
                columns={columns}
                searchable={true}
                pagination={true}
                action={
                  <InputDatePicker
                    label="Duration"
                    hideLabel
                    placeholder="Duration"
                  />
                }
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}
