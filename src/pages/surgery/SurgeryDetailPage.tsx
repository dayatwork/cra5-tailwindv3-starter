import { Link, Outlet, useLocation } from 'react-router-dom'

const tabs = [
  { name: 'Identity', href: 'identity', current: false },
  { name: 'Patient Safety', href: 'patient-safety', current: false },
  { name: 'Anesthesia Report', href: 'anesthesia-report', current: true },
  { name: 'Surgery Report', href: 'surgery-report', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SurgeryDetailPage() {
  const location = useLocation()

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8">
        <Link to="/surgery" className="text-primary-600 hover:underline mb-4">
          &larr; Back to Surgery list
        </Link>
        <div className="mt-6 flex items-center space-x-6 mb-6">
          <img
            className="w-20 h-20 rounded-full object-cover border-4 border-primary-500 shadow-xl"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            alt="Wife"
          />
          <div>
            <p className="text-2xl font-bold">Mrs. Jane Doe</p>
            <p className="text-lg text-gray-500 font-semibold">Mr. John Doe</p>
          </div>
        </div>
        {/* Nav Tab */}
        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
              defaultValue={tabs.find(tab => tab.current)?.name}
            >
              {tabs.map(tab => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map(tab => (
                  <Link
                    key={tab.name}
                    to={tab.href}
                    className={classNames(
                      location.pathname.endsWith(tab.href)
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap py-4 px-1 border-b-2 font-medium ',
                    )}
                    aria-current={
                      location.pathname.endsWith(tab.href) ? 'page' : undefined
                    }
                  >
                    {tab.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="px-2 py-6">
          <Outlet />
        </div>
      </div>
    </>
  )
}
