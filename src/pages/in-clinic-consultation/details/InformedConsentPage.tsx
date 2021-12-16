/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

import { PaginationTable } from 'components/shared/table/PaginationTable'
// import { PlusIcon } from '@heroicons/react/outline'

const dummyData = [
  {
    id: 1,
    generatedOn: {
      date: '2021-12-12',
      time: '09:00',
    },
    tags: 'IVF - Day 1',
    subject: 'OPU Procedure',
    formStatus: 'Revised',
    signatureStatus: [
      {
        subject: 'Doctor',
        status: 'Waiting',
      },
      {
        subject: 'Patient',
        status: 'Waiting',
      },
    ],
    completeDate: {
      date: '2021-12-12',
      time: '09:00',
    },
  },
  {
    id: 2,
    generatedOn: {
      date: '2021-12-12',
      time: '09:00',
    },
    tags: 'IVF - Day 1',
    subject: 'IVF Procedure',
    formStatus: 'Sended to Patient',
    signatureStatus: [
      {
        subject: 'Doctor',
        status: 'Done',
      },
      {
        subject: '2nd Wittness',
        status: 'Done',
      },
      {
        subject: 'Patient',
        status: 'Done',
      },
      {
        subject: '1st Witness',
        status: 'Done',
      },
    ],
    completeDate: {
      date: '2021-12-12',
      time: '09:00',
    },
  },
]

type Date = typeof dummyData[0]['generatedOn']
type Signature = typeof dummyData[0]['signatureStatus'][0]

const InformedConsentPage = () => {
  const data = useMemo(() => dummyData, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Generated on',
        Footer: 'Generated on',
        accessor: 'generatedOn',
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
        Header: 'Subject',
        Footer: 'Subject',
        accessor: 'subject',
      },
      {
        Header: 'Form Status',
        Footer: 'Form Status',
        accessor: 'formStatus',
      },
      {
        Header: 'Signature Status',
        Footer: 'Signature Status',
        accessor: 'signatureStatus',
        Cell: ({ value }: { value: Signature[] }) => (
          <div className="space-y-1">
            {value.map(signature => (
              <div key={signature.subject} className="grid grid-cols-2">
                <p>{signature.subject}</p>
                <p>
                  :{' '}
                  <span
                    className={`text-xs inline-flex items-center px-3 pt-0.5 pb-1 rounded-full font-bold ${
                      signature.status === 'Done'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <svg
                      className={`-ml-0.5 mr-1.5 h-2 w-2 ${
                        signature.status === 'Done'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx={4} cy={4} r={3} />
                    </svg>
                    {signature.status}
                  </span>
                </p>
              </div>
            ))}
          </div>
        ),
      },
      {
        Header: 'Complete Date',
        Footer: 'Complete Date',
        accessor: 'completeDate',
        Cell: ({ value }: { value: Date }) => (
          <div>
            <p>{value.date}</p>
            <p>{value.time}</p>
          </div>
        ),
      },

      {
        Header: 'See Informed Consent',
        Footer: 'See Informed Consent',
        Cell: () => (
          <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
            Open
          </button>
        ),
      },
      {
        Header: 'Action',
        Footer: 'Action',
        Cell: () => (
          <div className="flex flex-col space-y-2">
            <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
              Sign
            </button>
            <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
              Notify
            </button>
          </div>
        ),
      },
    ],
    [],
  )
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Informed Consent List</h2>
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

export default InformedConsentPage
