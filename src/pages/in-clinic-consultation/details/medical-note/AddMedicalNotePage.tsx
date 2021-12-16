import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { RadioGroup } from '@headlessui/react'

const uterusOptions = [{ name: 'AF' }, { name: 'RF' }, { name: 'Other' }]
const tripleLineOptions = [{ name: '+' }, { name: '-' }]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const AddMedicalNotePage = () => {
  const params = useParams()
  const [uterus, setUterus] = useState(uterusOptions[0])
  const [tripleLine, setTripleLine] = useState(tripleLineOptions[0])
  const [rightFollicle, setRightFollicle] = useState(0)
  const [leftFollicle, setLeftFollicle] = useState(0)

  return (
    <div>
      <Link
        to={`/in-clinic-consultation/${params.id}/medical-note`}
        className="text-primary-600 font-semibold hover:underline mb-4 inline-block"
      >
        &larr; Back to Medical Note List
      </Link>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Add Medical Note</h2>
      </div>
      <div className="p-6 rounded-lg shadow-lg bg-white max-w-5xl">
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
        <div className="mt-6">
          <h3 className="mb-2 text-lg font-bold">Vital Sign</h3>
          <div className="grid grid-cols-5 gap-6">
            <div>
              <label
                htmlFor="blood-pressure"
                className="block text-sm font-medium text-gray-700"
              >
                Blood Pressure
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  name="blood-pressure"
                  id="blood-pressure"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-16 sm:text-sm border-gray-300 rounded-md"
                  aria-describedby="blood-pressure"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span
                    className="text-gray-700 sm:text-sm"
                    id="blood-pressure"
                  >
                    mmHg
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="heart-rate"
                className="block text-sm font-medium text-gray-700"
              >
                Heart Rate
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  name="heart-rate"
                  id="heart-rate"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                  aria-describedby="heart-rate"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-700 sm:text-sm" id="heart-rate">
                    bpm
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="respiratory-rate"
                className="block text-sm font-medium text-gray-700"
              >
                Respiratory Rate
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  name="respiratory-rate"
                  id="respiratory-rate"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                  aria-describedby="respiratory-rate"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span
                    className="text-gray-700 sm:text-sm"
                    id="respiratory-rate"
                  >
                    rpm
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="spo2"
                className="block text-sm font-medium text-gray-700"
              >
                SpO2
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  name="spo2"
                  id="spo2"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-8 sm:text-sm border-gray-300 rounded-md"
                  aria-describedby="spo2"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-700 sm:text-sm" id="spo2">
                    %
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="temperature"
                className="block text-sm font-medium text-gray-700"
              >
                Temperature
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  name="temperature"
                  id="temperature"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-8 sm:text-sm border-gray-300 rounded-md"
                  aria-describedby="temperature"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-700 sm:text-sm" id="temperature">
                    &deg;C
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 text-lg font-bold">USG</h3>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label
                htmlFor="usg-photo"
                className="block text-sm font-medium text-gray-700"
              >
                USG Photo
              </label>
              <div className="mt-1 sm:col-span-2">
                <div className="max-w-lg flex justify-center px-6 py-20 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 divide-y divide-gray-200 div">
              <RadioGroup value={uterus} onChange={setUterus} className="">
                <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                  Uterus
                </RadioGroup.Label>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 mt-1">
                  {uterusOptions.map(option => (
                    <RadioGroup.Option
                      key={option.name}
                      value={option}
                      className={({ active, checked }) =>
                        classNames(
                          active ? 'ring-2 ring-offset-2 ring-primary-500' : '',
                          checked
                            ? 'bg-primary-600 border-transparent text-white hover:bg-primary-700'
                            : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                          'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer',
                        )
                      }
                    >
                      <RadioGroup.Label as="p">{option.name}</RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>

              <div className="pt-2">
                <label
                  htmlFor="endometrium-thickness"
                  className="block text-sm font-medium text-gray-700"
                >
                  Endometrium Thickness
                </label>
                <div className="mt-1 relative rounded-md shadow-sm w-32">
                  <input
                    type="number"
                    name="endometrium-thickness"
                    id="endometrium-thickness"
                    className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-8 sm:text-sm border-gray-300 rounded-md"
                    aria-describedby="endometrium-thickness"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span
                      className="text-gray-700 sm:text-sm"
                      id="endometrium-thickness"
                    >
                      mm
                    </span>
                  </div>
                </div>
              </div>

              <RadioGroup
                value={tripleLine}
                onChange={setTripleLine}
                className="mt-2 pt-2"
              >
                <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                  Triple Line (TL)
                </RadioGroup.Label>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 mt-1">
                  {tripleLineOptions.map(option => (
                    <RadioGroup.Option
                      key={option.name}
                      value={option}
                      className={({ active, checked }) =>
                        classNames(
                          active ? 'ring-2 ring-offset-2 ring-primary-500' : '',
                          checked
                            ? 'bg-primary-600 border-transparent text-white hover:bg-primary-700'
                            : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                          'border rounded-md pb-2 pt-1.5 px-3 flex items-center justify-center text-xl font-medium uppercase sm:flex-1 cursor-pointer',
                        )
                      }
                    >
                      <RadioGroup.Label as="p">{option.name}</RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>

              <div className="pt-2">
                <div className="w-40">
                  <label
                    htmlFor="right-follicle"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Right Follicle
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      name="right-follicle"
                      id="right-follicle"
                      className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-14 sm:text-sm border-gray-300 rounded-md"
                      aria-describedby="right-follicle"
                      value={rightFollicle}
                      onChange={e =>
                        Number(e.target.value) > 10
                          ? setRightFollicle(10)
                          : Number(e.target.value) < 0
                          ? setRightFollicle(0)
                          : setRightFollicle(Number(e.target.value))
                      }
                      max={10}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-700 sm:text-sm"
                        id="right-follicle"
                      >
                        follicle
                      </span>
                    </div>
                  </div>
                </div>
                {rightFollicle > 0 && (
                  <div className="grid grid-cols-4 gap-2 mt-3 p-4 border border-gray-300 rounded-md">
                    {Array.from({ length: rightFollicle }, (_, i) => i + 1).map(
                      i => (
                        <div key={i}>
                          <label
                            htmlFor={`right-follicle-${i}`}
                            className="block text-xs font-medium text-gray-700"
                          >
                            Follicle {i}
                          </label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                              type="number"
                              name={`right-follicle-${i}`}
                              id={`right-follicle-${i}`}
                              className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-10 sm:text-sm border-gray-300 rounded-md"
                              aria-describedby={`right-follicle-${i}`}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span
                                className="text-gray-700 sm:text-sm"
                                id={`right-follicle-${i}`}
                              >
                                mm
                              </span>
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>

              <div className="pt-2">
                <div className="w-40">
                  <label
                    htmlFor="left-follicle"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Left Follicle
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      name="left-follicle"
                      id="left-follicle"
                      className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-14 sm:text-sm border-gray-300 rounded-md"
                      aria-describedby="left-follicle"
                      value={leftFollicle}
                      onChange={e =>
                        Number(e.target.value) > 10
                          ? setLeftFollicle(10)
                          : Number(e.target.value) < 0
                          ? setLeftFollicle(0)
                          : setLeftFollicle(Number(e.target.value))
                      }
                      max={10}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-700 sm:text-sm"
                        id="left-follicle"
                      >
                        follicle
                      </span>
                    </div>
                  </div>
                </div>
                {leftFollicle > 0 && (
                  <div className="grid grid-cols-4 gap-2 mt-3 p-4 border border-gray-300 rounded-md">
                    {Array.from({ length: leftFollicle }, (_, i) => i + 1).map(
                      i => (
                        <div key={i}>
                          <label
                            htmlFor={`left-follicle-${i}`}
                            className="block text-xs font-medium text-gray-700"
                          >
                            Follicle {i}
                          </label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                              type="number"
                              name={`left-follicle-${i}`}
                              id={`left-follicle-${i}`}
                              className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-10 sm:text-sm border-gray-300 rounded-md"
                              aria-describedby={`left-follicle-${i}`}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span
                                className="text-gray-700 sm:text-sm"
                                id={`left-follicle-${i}`}
                              >
                                mm
                              </span>
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
              <div className="pt-2">
                <label
                  htmlFor="diagnose-note"
                  className="block text-sm font-medium text-gray-700"
                >
                  Diagnose/ Note
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <textarea
                    name="diagnose-note"
                    id="diagnose-note"
                    className="focus:ring-primary-500 focus:border-primary-500 block w-full px-3 sm:text-sm border-gray-300 rounded-md"
                    aria-describedby="diagnose-note"
                    rows={6}
                  />
                </div>
              </div>
            </div>
          </div>
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

export default AddMedicalNotePage
