/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
// import { DotsVerticalIcon } from '@heroicons/react/outline'
// import { PhoneIcon, MailIcon } from '@heroicons/react/solid'
import { Tab } from '@headlessui/react'

import { PaginationTable } from 'components/shared/table/PaginationTable'
import { InputDatePicker } from 'components/shared/datepicker'

export default function InClinicConsultationPage() {
  const data1 = useMemo(
    () => [
      {
        id: 1,
        queue: 'A1',
        time: '09:00',
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
        queue: 'A2',
        time: '09:00',
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
        queue: 'A3',
        time: '09:00',
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
  const data2 = useMemo(
    () => [
      {
        id: 1,
        queue: 'B1',
        time: '09:00',
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
        queue: 'B2',
        time: '09:00',
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
        queue: 'B3',
        time: '09:00',
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
        Header: 'Queue',
        Footer: 'Queue',
        accessor: 'queue',
      },
      {
        Header: 'Time',
        Footer: 'Time',
        accessor: 'time',
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
        Header: 'Referral Doctor',
        Footer: 'Referral Doctor',
        accessor: 'referralDoctor',
      },
      {
        Header: 'Call / Skip',
        Footer: 'Call / Skip',
        Cell: ({ row }: any) => {
          return row.index === 0 ? (
            <div className="flex items-center space-x-4">
              <button className="px-6 py-2 text-sm bg-secondary-50 text-secondary-600 font-semibold rounded-full shadow hover:bg-secondary-100 flex items-center space-x-1">
                <span>Call</span>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.25 4.75L10.5 8.75H7.75C7.19772 8.75 6.75 9.19772 6.75 9.75V14.25C6.75 14.8023 7.19772 15.25 7.75 15.25H10.5L17.25 19.25V4.75Z"
                  ></path>
                </svg>
              </button>
              <button className="px-6 py-2 text-sm bg-secondary-50 text-secondary-600 font-semibold rounded-full shadow hover:bg-secondary-100 flex items-center space-x-1">
                <span>Skip</span>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.25 12L5.75 5.75V18.25L14.25 12Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M18.25 5.75V18.25"
                  ></path>
                </svg>
              </button>
            </div>
          ) : null
        },
      },

      {
        Header: 'Action',
        Footer: 'Action',
        Cell: ({ row }: any) =>
          row.index === 0 ? (
            <div className="flex items-center space-x-4">
              <Link
                to="123/identity"
                className="rounded-full px-6 py-2 bg-primary-500 text-white font-semibold hover:bg-primary-600 text-sm"
              >
                Start Consultation
              </Link>
              {/* <button className="p-2 rounded-lg hover:bg-gray-100">
              <DotsVerticalIcon className="w-5 h-5 text-gray-600" />
            </button> */}
            </div>
          ) : null,
      },
    ],
    [],
  )
  const data3 = useMemo(
    () => [
      {
        id: 1,
        date: '2021-12-11',
        time: '09:00',
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
        date: '2021-12-12',
        time: '09:00',
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
        date: '2021-12-13',
        time: '09:00',
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
  const columns3 = useMemo(
    () => [
      {
        Header: 'Date',
        Footer: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Time',
        Footer: 'Time',
        accessor: 'time',
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
        Header: 'Referral Doctor',
        Footer: 'Referral Doctor',
        accessor: 'referralDoctor',
      },
    ],
    [],
  )

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            In-Clinic Consultation
          </h1>
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
              Today
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
              Scheduled
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="py-8">
              <PaginationTable
                showFooter={false}
                data={data1}
                columns={columns}
                searchable={true}
                pagination={true}
              />
              <PaginationTable
                showFooter={false}
                data={data2}
                columns={columns}
                searchable={true}
                pagination={true}
              />
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <PaginationTable
                showFooter={false}
                data={data3}
                columns={columns3}
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
