/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdFemale, MdMale } from 'react-icons/md'
import { PencilAltIcon } from '@heroicons/react/solid'

const healthInformation: Record<string, any> = {
  bloodType: 'A',
  height: '170cm',
  weight: '60kg',
  smooking: 'Moderate',
  alcohol: 'None',
  caffeine: 'Moderate',
  exercise: 'Moderate',
  diet: 'None',
  waterIntake: '4 liters / day',
  routineMedicine: null,
  allergic: null,
}

const healthInformationLabels = [
  {
    id: 'bloodType',
    label: 'Blood Type',
  },
  {
    id: 'height',
    label: 'Height',
  },
  {
    id: 'weight',
    label: 'Weight',
  },
  {
    id: 'smooking',
    label: 'Smooking',
  },
  {
    id: 'alcohol',
    label: 'Alcohol',
  },
  {
    id: 'caffeine',
    label: 'Caffeine',
  },
  {
    id: 'exercise',
    label: 'Exercise',
  },
  {
    id: 'diet',
    label: 'Diet',
  },
  {
    id: 'waterIntake',
    label: 'Water Intake',
  },
  {
    id: 'routineMedicine',
    label: 'Routine Medicine',
  },
  {
    id: 'allergic',
    label: 'Allergic',
  },
]

const femaleMedicalInformation: Record<string, any> = {
  menstrualCycle: null,
  lastSexualActivity: null,
  obstetricHistory: null,
  medicalHistory: null,
  familyHistory: null,
  surgicalHistory: null,
  contraception: null,
  papSmear: null,
  hsgHistory: null,
  hydrotubationHistory: null,
  infertilityAndTreatmentHistory: null,
  leukorrheaHistory: null,
  lowerAbdomenPainHistory: null,
  reproductionHistory: null,
  otherHistory: null,
}

const femaleMedicalInformationLabels = [
  {
    id: 'menstrualCycle',
    label: 'Menstrual Cycle',
  },
  {
    id: 'lastSexualActivity',
    label: 'Last Sexual Activity',
  },
  {
    id: 'obstetricHistory',
    label: 'Obstetric History',
  },
  {
    id: 'medicalHistory',
    label: 'Medical History',
  },
  {
    id: 'familyHistory',
    label: 'Family History',
  },
  {
    id: 'surgicalHistory',
    label: 'Surgical History',
  },
  {
    id: 'contraception',
    label: 'Contraception',
  },
  {
    id: 'papSmear',
    label: 'Pap Smear',
  },
  {
    id: 'hsgHistory',
    label: 'HSG History',
  },
  {
    id: 'hydrotubationHistory',
    label: 'Hidrotubation History',
  },
  {
    id: 'infertilityAndTreatmentHistory',
    label: 'Infertility & Treatment History',
  },
  {
    id: 'leukorrheaHistory',
    label: 'Leukorrhea History',
  },
  {
    id: 'lowerAbdomenPainHistory',
    label: 'Lower Abdomen Pain History',
  },
  {
    id: 'reproductionHistory',
    label: 'Reproduction History',
  },
  {
    id: 'otherHistory',
    label: 'Other History',
  },
]

const maleMedicalInformation: Record<string, any> = {
  paternityHistory: null,
  spermAnalysis: null,

  medicalHistory: null,
  familyHistory: null,
  surgicalHistory: null,
  genitalTraumaHistory: null,
  genitalInfectionHistory: null,
  otherHistory: null,
}

const maleMedicalInformationLabels = [
  {
    id: 'paternityHistory',
    label: 'Paternity History',
  },
  {
    id: 'spermAnalysis',
    label: 'Sperm Analysis',
  },

  {
    id: 'medicalHistory',
    label: 'Medical History',
  },
  {
    id: 'familyHistory',
    label: 'Family History',
  },
  {
    id: 'surgicalHistory',
    label: 'Surgical History',
  },
  {
    id: 'genitalTraumaHistory',
    label: 'Genital Trauma History',
  },
  {
    id: 'genitalInfectionHistory',
    label: 'Genital Infection History',
  },

  {
    id: 'otherHistory',
    label: 'Other History',
  },
]

const InitialInfoPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Health Information */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Health Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <MdFemale className="h-12 w-12 text-pink-400" />
          </div>
          <button className="text-primary-600 bg-primary-50 rounded-full pl-4 pr-3 py-1.5 text-sm font-semibold hover:bg-primary-100 shadow-sm flex items-center space-x-1">
            <span>Edit</span>
            <PencilAltIcon className="text-primary-600 w-4 h-4" />
          </button>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            {healthInformationLabels.map(item => (
              <div key={item.id} className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {healthInformation[item.id] || '-'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Health Information */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Partner Health Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <MdMale className="h-12 w-12 text-blue-400" />
          </div>
          <button className="text-primary-600 bg-primary-50 rounded-full pl-4 pr-3 py-1.5 text-sm font-semibold hover:bg-primary-100 shadow-sm flex items-center space-x-1">
            <span>Edit</span>
            <PencilAltIcon className="text-primary-600 w-4 h-4" />
          </button>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            {healthInformationLabels.map(item => (
              <div key={item.id} className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {healthInformation[item.id] || '-'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Medical Information */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Medical Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <MdFemale className="h-12 w-12 text-pink-400" />
          </div>
          <button className="text-primary-600 bg-primary-50 rounded-full pl-4 pr-3 py-1.5 text-sm font-semibold hover:bg-primary-100 shadow-sm flex items-center space-x-1">
            <span>Edit</span>
            <PencilAltIcon className="text-primary-600 w-4 h-4" />
          </button>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            {femaleMedicalInformationLabels.map(item => (
              <div key={item.id} className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {femaleMedicalInformation[item.id] || '-'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Partner Information */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Partner Medical Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <MdMale className="h-12 w-12 text-blue-400" />
          </div>
          <button className="text-primary-600 bg-primary-50 rounded-full pl-4 pr-3 py-1.5 text-sm font-semibold hover:bg-primary-100 shadow-sm flex items-center space-x-1">
            <span>Edit</span>
            <PencilAltIcon className="text-primary-600 w-4 h-4" />
          </button>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            {maleMedicalInformationLabels.map(item => (
              <div key={item.id} className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {maleMedicalInformation[item.id] || '-'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default InitialInfoPage
