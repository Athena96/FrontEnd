import React from 'react';
import ReactDOM from 'react-dom/client';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Amplify from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
  <Authenticator>
      {({ signOut, user }) => (
        <main>
         {user &&  <h1>Hello {user.username}</h1> }
          <App/>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
