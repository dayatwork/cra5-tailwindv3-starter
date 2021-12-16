/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { PaginationTable } from 'components/shared/table/PaginationTable'
import {
  DotsHorizontalIcon,
  PencilAltIcon,
  PlusIcon,
  TrashIcon,
  PrinterIcon,
  MailIcon,
  UploadIcon,
} from '@heroicons/react/outline'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const dummyData = [
  {
    id: 1,
    authoredOn: {
      date: '2021-12-12',
      time: '09:00',
    },
    authoredBy: 'Doctor',
    to: 'Lab X',
    patientCondition: 'Lorem ipsum dolor sit amet.',
    referralReason: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Requested',
  },
  {
    id: 2,
    authoredOn: {
      date: '2021-12-12',
      time: '09:00',
    },
    authoredBy: 'Doctor',
    to: 'Lab Y',
    patientCondition: 'Lorem ipsum dolor sit amet.',
    referralReason: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Done',
  },
]

type Date = typeof dummyData[0]['authoredOn']

const ReferPatientPage = () => {
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
        Header: 'Authored by',
        Footer: 'Authored by',
        accessor: 'authoredBy',
      },
      {
        Header: 'To',
        Footer: 'To',
        accessor: 'to',
      },
      {
        Header: 'Patient Condition',
        Footer: 'Patient Condition',
        accessor: 'patientCondition',
      },
      {
        Header: 'Referral Reason',
        Footer: 'Referral Reason',
        accessor: 'referralReason',
      },
      {
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status',
        Cell: ({ value }: { value: string }) => (
          <span
            className={`text-xs inline-flex items-center px-3 pt-0.5 pb-1 rounded-full font-bold ${
              value === 'Done'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <svg
              className={`-ml-0.5 mr-1.5 h-2 w-2 ${
                value === 'Done'
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
        Header: 'Preview',
        Footer: 'Preview',
        Cell: () => (
          <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
            Open
          </button>
        ),
      },
      {
        Header: 'Action',
        Footer: 'Action',
        Cell: ({ row }: any) => {
          if (row.original.status === 'Done') {
            return (
              <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
                Open Result
              </button>
            )
          }

          return (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500">
                  <span className="sr-only">More</span>
                  <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right right-0 absolute z-30 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-48 overflow-y-auto">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? 'bg-gray-100' : 'text-gray-700',
                            'px-4 py-2 text-sm flex items-center space-x-2 text-primary-600 w-full',
                          )}
                        >
                          <PencilAltIcon className="w-5 h-5" />
                          <span>Edit</span>
                        </button>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? 'bg-gray-100' : 'text-gray-700',
                            'px-4 py-2 text-sm flex items-center space-x-2 text-primary-600 w-full',
                          )}
                        >
                          <PrinterIcon className="w-5 h-5" />
                          <span>Print</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? 'bg-gray-100' : 'text-gray-700',
                            'px-4 py-2 text-sm flex items-center space-x-2 text-primary-600 w-full',
                          )}
                        >
                          <MailIcon className="w-5 h-5" />
                          <span>Send via Email</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? 'bg-gray-100' : 'text-gray-700',
                            'px-4 py-2 text-sm flex items-center space-x-2 text-primary-600',
                          )}
                        >
                          <UploadIcon className="w-5 h-5" />
                          <span>Upload Result</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? 'bg-gray-100' : 'text-gray-700',
                            'px-4 py-2 text-sm flex items-center space-x-2 text-red-500 w-full',
                          )}
                        >
                          <TrashIcon className="w-5 h-5" />
                          <span>Delete</span>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )
        },
      },
    ],
    [],
  )
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Refer History</h2>
        <button className="bg-primary-500 pl-3 pr-4 py-2 rounded-full text-white hover:bg-primary-600 shadow-sm text-sm font-semibold flex items-center space-x-2">
          <PlusIcon className="w-4 h-4" />
          <span>Add New</span>
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

export default ReferPatientPage
