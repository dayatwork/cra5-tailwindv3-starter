/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'
// import { DotsVerticalIcon } from '@heroicons/react/outline'
// import { PhoneIcon, MailIcon } from '@heroicons/react/solid'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'

import { PaginationTable } from 'components/shared/table/PaginationTable'
import { InputDatePicker } from 'components/shared/datepicker'

export default function OnlineConsultationPage() {
  const data1 = useMemo(
    () => [
      {
        id: 1,
        number: '1',
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
        number: '2',
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
        number: '3',
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
        Header: 'number',
        Footer: 'number',
        accessor: 'number',
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
      // {
      //   Header: 'Referral Doctor',
      //   Footer: 'Referral Doctor',
      //   accessor: 'referralDoctor',
      // },
      {
        Header: 'Call / Chat',
        Footer: 'Call / Chat',
        Cell: ({ row }: any) => {
          return row.index === 0 ? (
            <div className="flex items-center space-x-4">
              <button className="px-6 py-2 text-sm bg-secondary-50 text-secondary-600 font-semibold rounded-full shadow hover:bg-secondary-100 flex items-center space-x-1">
                <span>Call</span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M15.1141 9.35688C14.7589 9.56999 14.6438 10.0307 14.8569 10.3859C15.07 10.7411 15.5307 10.8562 15.8859 10.6431L15.1141 9.35688ZM19.25 7.75H20C20 7.4798 19.8547 7.23048 19.6195 7.09735C19.3844 6.96422 19.0958 6.96786 18.8641 7.10688L19.25 7.75ZM19.25 16.25L18.8641 16.8931C19.0958 17.0321 19.3844 17.0358 19.6195 16.9026C19.8547 16.7695 20 16.5202 20 16.25H19.25ZM15.8859 13.3569C15.5307 13.1438 15.07 13.2589 14.8569 13.6141C14.6438 13.9693 14.7589 14.43 15.1141 14.6431L15.8859 13.3569ZM15.8859 10.6431L19.6359 8.39312L18.8641 7.10688L15.1141 9.35688L15.8859 10.6431ZM18.5 7.75V16.25H20V7.75H18.5ZM19.6359 15.6069L15.8859 13.3569L15.1141 14.6431L18.8641 16.8931L19.6359 15.6069ZM6.75 7.5H13.25V6H6.75V7.5ZM14.5 8.75V15.25H16V8.75H14.5ZM13.25 16.5H6.75V18H13.25V16.5ZM5.5 15.25V8.75H4V15.25H5.5ZM6.75 16.5C6.05964 16.5 5.5 15.9404 5.5 15.25H4C4 16.7688 5.23122 18 6.75 18V16.5ZM14.5 15.25C14.5 15.9404 13.9404 16.5 13.25 16.5V18C14.7688 18 16 16.7688 16 15.25H14.5ZM13.25 7.5C13.9404 7.5 14.5 8.05964 14.5 8.75H16C16 7.23122 14.7688 6 13.25 6V7.5ZM6.75 6C5.23122 6 4 7.23122 4 8.75H5.5C5.5 8.05964 6.05964 7.5 6.75 7.5V6Z"
                  ></path>
                </svg>
              </button>
              <button className="px-6 py-2 text-sm bg-secondary-50 text-secondary-600 font-semibold rounded-full shadow hover:bg-secondary-100 flex items-center space-x-1">
                <span>Chat</span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 18.25C15.5 18.25 19.25 16.5 19.25 12C19.25 7.5 15.5 5.75 12 5.75C8.5 5.75 4.75 7.5 4.75 12C4.75 13.0298 4.94639 13.9156 5.29123 14.6693C5.50618 15.1392 5.62675 15.6573 5.53154 16.1651L5.26934 17.5635C5.13974 18.2547 5.74527 18.8603 6.43651 18.7307L9.64388 18.1293C9.896 18.082 10.1545 18.0861 10.4078 18.1263C10.935 18.2099 11.4704 18.25 12 18.25Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.5 12C9.5 12.2761 9.27614 12.5 9 12.5C8.72386 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.72386 11.5 9 11.5C9.27614 11.5 9.5 11.7239 9.5 12Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z"
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
  const data2 = useMemo(
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
  const columns2 = useMemo(
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
            Online Consultation
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
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <PaginationTable
                showFooter={false}
                data={data2}
                columns={columns2}
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
