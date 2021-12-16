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
    vitalSign: {
      bloodPressure: '-',
      heartRate: '-',
      respiratoryRate: '-',
      spo2: '-',
      temperature: '-',
    },
    usg: {
      uterus: '-',
      endometriumThickness: '-',
      tripleLine: '-',
      rightFollicle: '-',
      leftFollicle: '-',
      note: '-',
    },
    lastModifiedBy: 'Doctor',
  },
  {
    id: 2,
    date: {
      date: '2021-12-11',
      time: '09:00',
    },
    tags: 'IVF - Day 1',
    vitalSign: {
      bloodPressure: '-',
      heartRate: '-',
      respiratoryRate: '-',
      spo2: '-',
      temperature: '-',
    },
    usg: {
      uterus: '-',
      endometriumThickness: '-',
      tripleLine: '-',
      rightFollicle: '-',
      leftFollicle: '-',
      note: '-',
    },
    lastModifiedBy: 'Nurse',
  },
]

type VitalSign = typeof dummyData[0]['vitalSign']
type Date = typeof dummyData[0]['date']
type USG = typeof dummyData[0]['usg']

const MedicalNotePage = () => {
  const data = useMemo(() => dummyData, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Date',
        Footer: 'Date',
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
        Header: 'Vital Sign',
        Footer: 'Vital Sign',
        accessor: 'vitalSign',
        Cell: ({ value }: { value: VitalSign }) => (
          <div>
            <div className="space-y-1">
              <p className="space-x-2">
                <span>BP:</span>
                <span>{value.bloodPressure}</span>
              </p>
              <p className="space-x-2">
                <span>HR:</span>
                <span>{value.heartRate}</span>
              </p>
              <p className="space-x-2">
                <span>RR:</span>
                <span>{value.respiratoryRate}</span>
              </p>
              <p className="space-x-2">
                <span>SPO2:</span>
                <span>{value.spo2}</span>
              </p>
              <p className="space-x-2">
                <span>Temp:</span>
                <span>{value.temperature}</span>
              </p>
            </div>
          </div>
        ),
      },
      {
        Header: 'USG',
        Footer: 'USG',
        accessor: 'usg',
        Cell: ({ value }: { value: USG }) => (
          <div>
            <div className="space-y-1">
              <p className="space-x-2">
                <span>Uterus:</span>
                <span>{value.uterus}</span>
              </p>
              <p className="space-x-2">
                <span>ET:</span>
                <span>{value.endometriumThickness}</span>
              </p>
              <p className="space-x-2">
                <span>TL:</span>
                <span>{value.tripleLine}</span>
              </p>
              <p className="space-x-2">
                <span>RF:</span>
                <span>{value.rightFollicle}</span>
              </p>
              <p className="space-x-2">
                <span>LF:</span>
                <span>{value.leftFollicle}</span>
              </p>
            </div>
          </div>
        ),
      },

      {
        Header: 'Note',
        Footer: 'Note',
        Cell: ({ row }: any) => row.original.usg.note,
      },
      {
        Header: 'Open File',
        Footer: 'Open File',
        Cell: () => (
          <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
            Open
          </button>
        ),
      },
      {
        Header: 'Last Modified By',
        Footer: 'Last Modified By',
        accessor: 'lastModifiedBy',
      },
      {
        Header: 'Action',
        Footer: 'Action',
        Cell: () => (
          <button className="text-xs font-semibold px-4 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-full">
            Edit
          </button>
        ),
      },
    ],
    [],
  )
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Medical Note</h2>
        <button className="bg-primary-500 pl-3 pr-4 py-2 rounded-full text-white hover:bg-primary-600 shadow-sm text-sm font-semibold flex items-center space-x-2">
          <PlusIcon className="w-4 h-4" />
          <span>Add Medical Note</span>
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

export default MedicalNotePage
