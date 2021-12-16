/* eslint-disable @typescript-eslint/no-explicit-any */
const patientData: Record<string, any> = {
  name: 'Jane Doe',
  email: 'jane@gmail.com',
  phone: '081234567890',
  age: 35,
  birthDate: '1986-01-04',
  birthPlace: 'Jakarta',
  religion: 'Islam',
  sex: 'Female',
  profession: 'Teacher',
  maritalStatus: 'Married',
  identityNumber: '137501040119860001',
  address: 'Jl. Soekarno Hatta, no.10, Bandung',
}

const patientDataLabels = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'phone',
    label: 'Phone',
  },
  {
    id: 'age',
    label: 'Age',
  },
  {
    id: 'birthDate',
    label: 'Birth Date',
  },
  {
    id: 'birthPlace',
    label: 'Birth Place',
  },
  {
    id: 'religion',
    label: 'Religion',
  },
  {
    id: 'sex',
    label: 'Sex',
  },
  {
    id: 'profession',
    label: 'profession',
  },
  {
    id: 'maritalStatus',
    label: 'Marital Status',
  },
  {
    id: 'identityNumber',
    label: 'NIK/ KTP',
  },
  {
    id: 'address',
    label: 'Address',
  },
]

const emergencyContact: Record<string, any> = {
  name: 'Robert',
  relationship: 'Father',
  email: 'robert@gmail.com',
  phone: '081212121212',
  address: 'Jl. Soekarno Hatta, no.10, Bandung',
}

const emergencyContactLabels = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'relationship',
    label: 'Relationship',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'phone',
    label: 'Phone',
  },
  {
    id: 'address',
    label: 'Address',
  },
]

const maritalInformation: Record<string, any> = {
  marriageOrder: 'First',
  marriageDate: '2011-05-05',
  marriageAge: '10 Tahun 6 Bulan',
}

const maritalInformationLabels = [
  {
    id: 'marriageOrder',
    label: 'Marriage Order',
  },
  {
    id: 'marriageAge',
    label: 'Marriage Age',
  },
  {
    id: 'marriageDate',
    label: 'Marriage Date',
  },
]

const partnerInformation: Record<string, any> = {
  name: 'John Doe',
  age: 42,
  marriageOrder: 'Second',
  firstWife: 'Anna',
}

const partnerInformationLabels = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'age',
    label: 'Age',
  },
  {
    id: 'marriageOrder',
    label: 'Marriage Order',
  },
  {
    id: 'firstWife',
    label: 'First Wife',
  },
]

const IdentityPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Patient Data */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Patient Data
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            {patientDataLabels.map(item => (
              <div key={item.id} className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {patientData[item.id] || '-'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div>
        {/* Marital Information */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Marital Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              {maritalInformationLabels.map(item => (
                <div key={item.id} className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {maritalInformation[item.id] || '-'}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {/* Partner Information */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Partner Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              {partnerInformationLabels.map(item => (
                <div key={item.id} className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {partnerInformation[item.id] || '-'}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Emergency Contact
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            {emergencyContactLabels.map(item => (
              <div key={item.id} className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {emergencyContact[item.id] || '-'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Identity File Uploaded Status */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Identity File Uploaded Status
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">KTP</dt>
              <dd className="mt-1 text-sm text-gray-900 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Verified</span>
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Surat Nikah</dt>
              <dd className="mt-1 text-sm text-gray-900 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Not Yet Verified</span>
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">KK</dt>
              <dd className="mt-1 text-sm text-gray-900 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Not Submitted</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default IdentityPage
