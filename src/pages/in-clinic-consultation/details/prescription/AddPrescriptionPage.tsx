import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm, useFieldArray } from 'react-hook-form'
import { Switch } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/outline'

const AddPrescriptionPage = () => {
  const params = useParams()
  const [enabled, setEnabled] = useState(false)

  const { register, control } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'medicines',
  })

  return (
    <div>
      <Link
        to={`/in-clinic-consultation/${params.id}/prescription`}
        className="text-primary-600 font-semibold hover:underline mb-4 inline-block"
      >
        &larr; Back to Prescription List
      </Link>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Add Prescription</h2>
      </div>
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <div className="border border-primary-200 bg-primary-50 px-4 py-3 rounded-md mb-4">
          <h3 className="font-semibold text-lg mb-2">Health Information</h3>
          <h4>Routine Medicine</h4>
          <ul>
            <li>-</li>
          </ul>
          <h4 className="mt-4">Allergic</h4>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h5 className="text-sm font-semibold text-primary-900">Food:</h5>
              <ul>
                <li>-</li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-primary-900">Drug:</h5>
              <ul>
                <li>-</li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-primary-900">Other:</h5>
              <ul>
                <li>-</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-xs">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Tags
          </label>
          <div className="mt-1">
            <select
              name="email"
              id="email"
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            >
              <option value="">Select Tag</option>
              <option value="Tag 1">Tag 1</option>
              <option value="Tag 2">Tag 2</option>
              <option value="Tag 3">Tag 3</option>
            </select>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Medication
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Dosage
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Frequency
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Start
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                >
                  Patient Instruction
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Monitoring
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                ></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fields.map((fields, index) => (
                <tr key={fields.id}>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <select
                      className="focus:ring-limeade focus:border-limeade outline-none block w-full px-4 sm:text-sm border-gray-300 rounded-md form-select min-w-[150px]"
                      {...register(`schedules.${index}.day`)}
                    >
                      <option value="">Search Medicine</option>
                      <option value="Medicine 1">Medicine 1</option>
                      <option value="Medicine 2">Medicine 2</option>
                      <option value="Medicine 3">Medicine 3</option>
                      <option value="Medicine 4">Medicine 4</option>
                      <option value="Medicine 5">Medicine 5</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <label htmlFor="dosage" className="sr-only">
                        Dosage
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="number"
                          name="dosage"
                          id="dosage"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-10 sm:text-sm border-gray-300 rounded-md"
                          aria-describedby="dosage"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span
                            className="text-gray-700 sm:text-sm"
                            id="dosage"
                          >
                            ml
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <label htmlFor="frequency" className="sr-only">
                        Frequency
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="number"
                          name="frequency"
                          id="frequency"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                          aria-describedby="frequency"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span
                            className="text-gray-700 sm:text-sm"
                            id="frequency"
                          >
                            /day
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2 items-center">
                      <div>
                        <label htmlFor="start-time" className="sr-only">
                          Start Time
                        </label>
                        <input
                          type="time"
                          name="start-time"
                          id="start-time"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full px-3 sm:text-sm border-gray-300 rounded-md"
                          aria-describedby="start-time"
                        />
                      </div>
                      <span>-</span>
                      <div>
                        <label htmlFor="end-time" className="sr-only">
                          End Time
                        </label>
                        <input
                          type="time"
                          name="end-time"
                          id="end-time"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full px-3 sm:text-sm border-gray-300 rounded-md"
                          aria-describedby="end-time"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <label htmlFor="duration" className="sr-only">
                        Duration
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="number"
                          name="duration"
                          id="duration"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                          aria-describedby="duration"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span
                            className="text-gray-700 sm:text-sm"
                            id="duration"
                          >
                            day
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <label htmlFor="start-day" className="sr-only">
                        Start Day
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="date"
                          name="start-day"
                          id="start-day"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full px-3 sm:text-sm border-gray-300 rounded-md"
                          aria-describedby="start-day"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <label htmlFor="patient-instruction" className="sr-only">
                        Patient Instruction
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <textarea
                          // type="text"
                          name="patient-instruction"
                          id="patient-instruction"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full px-3 sm:text-sm border-gray-300 rounded-md"
                          aria-describedby="patient-instruction"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                          enabled ? 'bg-primary-500' : 'bg-gray-300'
                        }
          relative mt-1.5 inline-flex flex-shrink-0 h-[24px] w-[50px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-primary-300 focus-visible:ring-offset-1`}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={`${
                            enabled ? 'translate-x-[25px]' : 'translate-x-0'
                          }
            pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                        />
                      </Switch>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-md"
                      onClick={() => remove(index)}
                    >
                      <span className="sr-only">Remove</span>
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="justify-center flex">
          <button
            type="button"
            className="mt-2 bg-gray-200 hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm font-semibold"
            onClick={() => append({})}
          >
            Add Medicine
          </button>
        </div>

        <div className="mt-10 flex justify-end">
          <button className="bg-primary-600 hover:bg-primary-500 rounded-full py-2 px-6 text-white font-semibold text-sm">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddPrescriptionPage
