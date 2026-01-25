import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Distributed Job Processing and Workflow Platform
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  React + TypeScript
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Frontend
                </div>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Count is {count}
              </button>
            </div>
            
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p className="mb-2">
                Edit <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
              </p>
              <p className="text-sm">
                Built with React, TypeScript, Redux Toolkit, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
