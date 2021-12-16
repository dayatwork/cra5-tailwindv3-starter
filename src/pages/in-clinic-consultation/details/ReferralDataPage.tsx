/* eslint-disable @typescript-eslint/no-explicit-any */

const ReferralDataPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Patient Data */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Reason For Referral
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Mayor Complaint
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                Lorem, ipsum dolor.
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Medical History
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                Lorem ipsum dolor sit.
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Diagnosis of referring Doctor
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Notes</dt>
              <dd className="mt-1 text-sm text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                eveniet?
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Referral Doctor Data
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900">Dr. Jack</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">jack@gmail.com</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Phone Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">081313131313</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">STR Number</dt>
              <dd className="mt-1 text-sm text-gray-900">4369420754</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Specialization
              </dt>
              <dd className="mt-1 text-sm text-gray-900">Obstetricians</dd>
            </div>
          </dl>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <h3 className="mb-2 text-lg font-semibold">Insitution</h3>
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900">
                RS. Indonesia Sehat
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">
                info@indonesiasehat.id
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900">Jl. Merdeka 123</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ReferralDataPage
