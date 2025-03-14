import { Toaster } from 'react-hot-toast';

import reactLogo from '/react.svg'

export function Layout({ children, title }) {
  return (
    <div>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>{title}</h1>

      <div className="card">
        {children}
      </div>

      <Toaster />
    </div>
  )
}
