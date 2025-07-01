import React, { useEffect, useState } from 'react';
import './App.css';
import mockData from './mockData.json';

function App() {
    // Table columns and data state
  const [columns, setColumns] = useState([
    { key: 'jobRequest', label: 'Job Request' },
    { key: 'submitted', label: 'Submitted' },
    { key: 'status', label: 'Status' },
    { key: 'submitter', label: 'Submitter' },
    { key: 'url', label: 'URL' },
    { key: 'assigned', label: 'Assigned' },
    { key: 'priority', label: 'Priority' },
    { key: 'dueDate', label: 'Due Date' },
    { key: 'estValue', label: 'Est. Value' }
  ]);
  const [data, setData] = useState([]);

  // Fetch mock data from API
  useEffect(() => {
    setData(mockData); // Use local mock data
  }, []);

  // Add new column
  const handleAddColumn = () => {
    const newColKey = `newCol${columns.length + 1}`;
    setColumns([...columns, { key: newColKey, label: `New Column ${columns.length + 1}` }]);
    // Optionally update data to include new column with empty values
    setData(data.map(row => ({ ...row, [newColKey]: '' })));
  };
  return (
    <div className='w-full bg-red-500'>
      {/* HEADER */}
      <div>
        <div>
          <div>
            <img src='' alt='img'/>
          </div>
          <div>
            Workspace {">"} Folder 2 {">"} spreadsheet 3 <img src='' alt='img'/>
          </div>
        </div>
        <div>
          <div>
            <img src='' alt='search'/>
            <input type='search'></input>
          </div>
          <div>
            <img src='' alt='search'/>
          </div>
          <div>
            <div>
              <img src='' alt='search'/>
            </div>
            <div>
              <h3>John Doe</h3>
              <h4>john.doe....</h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOOLBAR */}
      <div>
        <div>
          <div>
            <h2>Tool bar</h2>
            <img src='' alt='search'/>
          </div>
          <div>
            <img src='' alt='search'/>
            <h2>Hide Fields</h2>
          </div>
          <div>
            <img src='' alt='search'/>
            <h2>Sort</h2>
          </div>
          <div>
            <img src='' alt='search'/>
            <h2>Filter</h2>
          </div>
          <div>
            <img src='' alt='search'/>
            <h2>Cell View</h2>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src='' alt='import-img'/>
              <h2>Import</h2>
            </div>
                        <div>
              <img src='' alt='export-img'/>
              <h2>Export</h2>
            </div>
                        <div>
              <img src='' alt='share-img'/>
              <h2>Share</h2>
            </div>
                        <div>
              <img src='' alt='newaction-img'/>
              <h2>New Action</h2>
            </div>
          </div>
        </div>
      </div>
      {/* TABLE */}
      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #eee", padding: "8px" }}>#</th>
              {columns.map(col => (
                <th key={col.key} style={{ border: "1px solid #eee", padding: "8px" }}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid #eee", padding: "8px" }}>{idx + 1}</td>
                {columns.map(col => (
                  <td key={col.key} style={{ border: "1px solid #eee", padding: "8px" }}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* FOOTER */}
      <div>
        <div>
          <h3>All Order</h3>
        </div>
        <div>
          <h3>Pending</h3>
        </div>
        <div>
          <h3>Reviewed</h3>
        </div>
        <div>
          <h3>Arrived</h3>
        </div>
        <div>
          <img src='' alt='plusimg'/>
        </div>
      </div>
    </div>
  );
}

export default App;
