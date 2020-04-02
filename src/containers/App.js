import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionBar from '../components/ActionBar';
import ContentTable from '../components/ContentTable';

function App() {
  return (
    <div className="App">
      <div className="row mt-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-12 grid-margin">
            <div className="card h-100">
              <ActionBar />
              <ContentTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default App;