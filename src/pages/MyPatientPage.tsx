/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'
// import { DotsVerticalIcon } from '@heroicons/react/outline'
// import { PhoneIcon, MailIcon } from '@heroicons/react/solid'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'

import { PaginationTable } from 'components/shared/table/PaginationTable'
import { InputDatePicker } from 'components/shared/datepicker'

export default function MySchedulePage() {
  const data = useMemo(
    () => [
      {
        id: 1,
        lastAppointment: 'June 1, 2020, 08:22 AM',
        mrNumber: '#001234',
        name: 'Andy Lee',
        photo:
          'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        age: 42,
        gender: 'Male',
        referralDoctor: 'dr. John, Sp.OG',
        contact: {
          email: 'andy@mail.com',
          phone: '081212121212',
        },
        phone: '081212121212',
      },
      {
        id: 2,
        lastAppointment: 'June 1, 2020, 08:22 AM',
        mrNumber: '#001234',
        name: 'Andy Lee',
        photo:
          'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        age: 42,
        gender: 'Male',
        referralDoctor: 'dr. John, Sp.OG',
        contact: {
          email: 'andy@mail.com',
        },
        phone: '081212121212',
      },
      {
        id: 3,
        lastAppointment: 'June 1, 2020, 08:22 AM',
        mrNumber: '#001234',
        name: 'Andy Lee',
        photo:
          'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        age: 42,
        gender: 'Male',
        referralDoctor: 'dr. John, Sp.OG',
        contact: {
          phone: '081212121212',
        },
        phone: '081212121212',
      },
    ],
    [],
  )
  const columns = useMemo(
    () => [
      {
        Header: 'Last Appointment',
        Footer: 'Last Appointment',
        accessor: 'lastAppointment',
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
        Header: 'Phone Number',
        Footer: 'Phone Number',
        accessor: 'phone',
      },
      {
        Header: 'Referral Doctor',
        Footer: 'Referral Doctor',
        accessor: 'referralDoctor',
      },

      {
        Header: 'Action',
        Footer: 'Action',
        Cell: () => (
          <div className="flex items-center space-x-4">
            <Link
              to="/in-clinic-consultation/123"
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
          <h1 className="text-2xl font-bold text-gray-900">My Patient</h1>
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
              Active Patient
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
              Non-Active Patient
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="py-4">
              <PaginationTable
                showFooter={false}
                data={data}
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
            <Tab.Panel className="py-4">
              <PaginationTable
                showFooter={false}
                data={data}
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
