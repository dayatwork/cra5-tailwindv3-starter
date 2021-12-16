import { useState } from 'react'
import { Popover } from '@headlessui/react'

import { DatePicker } from './DatePicker'
import { CalendarIcon } from '@heroicons/react/solid'

interface Props {
  hideLabel?: boolean
  label?: string
  placeholder?: string
  shortFormat?: boolean
}

export const InputDatePicker = ({
  hideLabel = false,
  shortFormat = false,
  label = 'Date',
}: // placeholder = 'Select Date Range',
Props) => {
  const [selectedRange, setSelectedRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({ from: undefined, to: undefined })

  return (
    <>
      <label
        htmlFor="date"
        className={
          hideLabel ? 'sr-only' : 'block text-sm font-medium text-gray-700 mb-1'
        }
      >
        {label}
      </label>
      <Popover className="relative">
        {({ close, open }) => (
          <>
            <Popover.Button
              className={`bg-white hover:bg-gray-50 text-gray-600 pl-4 pr-6 py-2 rounded-full font-semibold shadow flex items-center ${
                shortFormat ? 'space-x-0.5' : 'space-x-3'
              }`}
            >
              <CalendarIcon className="w-6 h-6 mr-1 text-primary-600" />
              {/* {!selectedRange.from && !selectedRange.to && placeholder} */}
              <div>
                <p className="text-sm font-bold text-left text-gray-900">
                  Change Periode
                </p>
                <div className="-mt-1">
                  <span className="text-sm">
                    {`${
                      selectedRange.from?.toLocaleDateString('id-ID', {
                        day: '2-digit',
                        month: shortFormat ? '2-digit' : 'long',
                        year: shortFormat ? '2-digit' : 'numeric',
                      }) || 'xx xxxxxx xxxx'
                    }`}{' '}
                  </span>
                  <span
                    className={!selectedRange.from ? 'text-transparent' : ''}
                  >
                    -
                  </span>
                  <span className="text-sm">
                    {' '}
                    {`${
                      selectedRange.to?.toLocaleDateString('id-ID', {
                        day: '2-digit',
                        month: shortFormat ? '2-digit' : 'long',
                        year: shortFormat ? '2-digit' : 'numeric',
                      }) || 'xx xxxxxxx xxxx'
                    }`}
                  </span>
                </div>
              </div>
            </Popover.Button>

            {open && (
              <Popover.Panel static className="absolute z-20">
                <DatePicker
                  selectedRange={selectedRange}
                  setSelectedRange={setSelectedRange}
                  close={close}
                />
              </Popover.Panel>
            )}
          </>
        )}
      </Popover>
    </>
  )
}
