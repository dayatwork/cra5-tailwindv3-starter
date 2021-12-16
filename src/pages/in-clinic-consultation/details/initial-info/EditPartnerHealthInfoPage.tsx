import { MdMale } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'

const EditHealthInfoPage = () => {
  const params = useParams()

  return (
    <div>
      <Link
        to={`/in-clinic-consultation/${params.id}/initial-info`}
        className="text-primary-600 font-semibold hover:underline mb-4 inline-block"
      >
        &larr; Back to Initial Info
      </Link>

      <div className="p-6 rounded-lg shadow-lg bg-white max-w-xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">
              Edit Partner Health Information
            </h2>
            <p className="text-lg font-semibold text-gray-600">Mr. John Doe</p>
          </div>
          <MdMale className="h-12 w-12 text-blue-400" />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <label
              htmlFor="blood-type"
              className="block text-sm font-medium text-gray-700"
            >
              Blood Type
            </label>
            <div className="mt-1">
              <select
                name="blood-type"
                id="blood-type"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
              >
                <option value="">Select Blood Type</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O">O</option>
                <option value="AB">AB</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              Height
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="number"
                name="height"
                id="height"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-8 sm:text-sm border-gray-300 rounded-md"
                aria-describedby="height"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-700 sm:text-sm" id="height">
                  cm
                </span>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700"
            >
              Weight
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="number"
                name="weight"
                id="weight"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-8 sm:text-sm border-gray-300 rounded-md"
                aria-describedby="weight"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-700 sm:text-sm" id="weight">
                  kg
                </span>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="bmi"
              className="block text-sm font-medium text-gray-700"
            >
              BMI
            </label>
            <div className="mt-1">
              <input
                readOnly
                type="text"
                name="bmi"
                id="bmi"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="smooking"
              className="block text-sm font-medium text-gray-700"
            >
              Blood Type
            </label>
            <div className="mt-1">
              <select
                name="smooking"
                id="smooking"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
              >
                <option value="">Select...</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="alcohol"
              className="block text-sm font-medium text-gray-700"
            >
              Alcohol
            </label>
            <div className="mt-1">
              <select
                name="alcohol"
                id="alcohol"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
              >
                <option value="">Select...</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="caffeine"
              className="block text-sm font-medium text-gray-700"
            >
              Caffeine
            </label>
            <div className="mt-1">
              <select
                name="caffeine"
                id="caffeine"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
              >
                <option value="">Select...</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="exercise"
              className="block text-sm font-medium text-gray-700"
            >
              Exercise
            </label>
            <div className="mt-1">
              <select
                name="exercise"
                id="exercise"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
              >
                <option value="">Select...</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="diet"
              className="block text-sm font-medium text-gray-700"
            >
              Diet
            </label>
            <div className="mt-1">
              <select
                name="diet"
                id="diet"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
              >
                <option value="">Select...</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="water-intake"
              className="block text-sm font-medium text-gray-700"
            >
              Water Intake
            </label>
            <div className="mt-1">
              <select
                name="water-intake"
                id="water-intake"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
              >
                <option value="">Select...</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="routine-medicine"
              className="block text-sm font-medium text-gray-700"
            >
              Routine Medicine
            </label>
            <div className="mt-1">
              <textarea
                name="routine-medicine"
                id="routine-medicine"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="allergy"
              className="block text-sm font-medium text-gray-700"
            >
              Allergy
            </label>
            <div className="mt-1">
              <textarea
                name="allergy"
                id="allergy"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-end">
          <button className="bg-primary-600 hover:bg-primary-500 rounded-full py-2 px-6 text-white font-semibold text-sm">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditHealthInfoPage
