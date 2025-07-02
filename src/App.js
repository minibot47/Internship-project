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

  // Toast state
  const [toast, setToast] = useState({ show: false, message: '' });

  // Fetch mock data from API
  useEffect(() => {
    setData(mockData); // Use local mock data
  }, []);

  // Add new column
  const handleAddColumn = () => {
    const newColKey = `newCol${columns.length + 1}`;
    setColumns([...columns, { key: newColKey, label: `New Column ${columns.length + 1}` }]);
    setData(data.map(row => ({ ...row, [newColKey]: '' })));
  };

  // Toast handler
  const handleClick = (label) => {
    setToast({ show: true, message: `You clicked: ${label}` });
    console.log(`You clicked: ${label}`);
    setTimeout(() => setToast({ show: false, message: '' }), 2000);
  };

  return (
    <div className="w-full min-h-screen flex flex-col relative font-worksans">
      {/* TOAST */}
        {toast.show && (
          <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-2 animate-fade-in transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            <span className="font-medium">{toast.message}</span>
          </div>
        )}
      {/* HEADER */}
      <div className='bg-white flex w-full pl-5 pr-5 h-[56px] border-b-[1px] border-black'>
        <div className='flex w-1/2 items-center gap-2'>
          <div>
            <img
              src='/image/Shape.png'
              alt='img'
              width={20}
              height={16}
              className="cursor-pointer"
              onClick={() => handleClick('Breadcrumb Icon')}
            />
          </div>
          <div className='flex gap-2 items-center '>
            <h3
              className='font-lighter text-sm text-[#AFAFAF] cursor-pointer'
              onClick={() => handleClick('Workspace')}
            >
              Workspace {">"}
            </h3>
            <h3
              className='font-lighter text-sm text-[#AFAFAF] cursor-pointer'
              onClick={() => handleClick('Folder 2')}
            >
              Folder 2 {">"}
            </h3>
            <h3
              className="cursor-pointer"
              onClick={() => handleClick('spreadsheet 3')}
            >
              spreadsheet 3
            </h3>
            <div>
              <img
                src='/image/ellipse.png'
                alt='img'
                width={12}
                height={3}
                className="cursor-pointer"
                onClick={() => handleClick('Breadcrumb Ellipse')}
              />
            </div>
          </div>
        </div>
        <div className='flex w-1/2 justify-end items-center gap-2'>
          <div className='flex gap-1 justify-between bg-[#F6F6F6] rounded pt-0.5 pb-0.5 pl-1 pr-1 h-[40px] w-[165px] items-center'>
            <img
              src='/image/search2.png'
              alt='search'
              className='w-[20px] h-[20px] flex item-center cursor-pointer'
              onClick={() => handleClick('Search Icon')}
            />
            <input
              type='search'
              className='text-xs h-[35px] bg-[#F6F6F6]'
              placeholder='Search within sheet'
              onClick={() => handleClick('Search Input')}
              readOnly
            />
          </div>
          <div>
            <img
              src='/image/Notification_bell.png'
              alt='notification'
              width={28}
              height={28}
              className="cursor-pointer"
              onClick={() => handleClick('Notification Bell')}
            />
          </div>
          <div className='flex items-center h-[40px] cursor-pointer' onClick={() => handleClick('Profile')}>
            <div>
              <img src='/image/profile.png' alt='profileimg' width={28} height={28}/>
            </div>
            <div className='h-[30px] flex flex-col items-center'>
              <h3 className='text-[12px]'>John Doe</h3>
              <h4 className='text-[9px]'>john.doe....</h4>
            </div>
          </div>
        </div>
      </div>
      {/* TOOLBAR */}
      <div className='bg-white flex justify-between items-center w-full pl-5 pr-5 h-[56px] border-b-[1px] border-black'>
        <div className='flex gap-3'>
          <div
            className='flex items-center justify-center gap-1 border-r-[0.8px] border-gray-300 w-[91px] h-[36px] cursor-pointer'
            onClick={() => handleClick('Tool bar')}
          >
            <h2 className='text-sm'>Tool bar</h2>
            <img src='/image/forward.png' alt='toolbar' className='w-[11px] h-[11px]'/>
          </div>
          <div
            className='flex items-center justify-center gap-1 w-[91px] h-[36px] cursor-pointer'
            onClick={() => handleClick('Hide Fields')}
          >
            <img src='/image/eyes.png' alt='hide' className='w-[13px] h-[13px]'/>
            <h2 className='text-sm'>Hide Fields</h2>
          </div>
          <div
            className='flex items-center justify-center gap-1 w-[51px] h-[36px] cursor-pointer'
            onClick={() => handleClick('Sort')}
          >
            <img src='/image/upanddown.png' alt='sort' className='w-[13px] h-[13px]'/>
            <h2 className='text-sm'>Sort</h2>
          </div>
          <div
            className='flex items-center justify-center gap-1 w-[51px] h-[36px] cursor-pointer'
            onClick={() => handleClick('Filter')}
          >
            <img src='/image/filter.png' alt='filter' className='w-[13px] h-[13px]'/>
            <h2 className='text-sm'>Filter</h2>
          </div>
          <div
            className='flex items-center justify-center gap-1 w-[91px] h-[36px] cursor-pointer'
            onClick={() => handleClick('Cell View')}
          >
            <img src='/image/cellview.png' alt='cell' className='w-[13px] h-[13px]'/>
            <h2 className='text-sm'>Cell View</h2>
          </div>
        </div>
        <div className='flex'>
          <div className='flex items-center gap-2 justfy-center'>
            <div
              className='w-[84px] h-[36px] pl-2 pr-2 flex border-[0.8px] border-[#EEEEEE] rounded items-center justify-center gap-1.5 cursor-pointer'
              onClick={() => handleClick('Import')}
            >
              <img src='/image/import.png' alt='import-img' className='w-[13px] h-[13px]'/>
              <h2>Import</h2>
            </div>
            <div
              className='w-[84px] h-[36px] pl-2 pr-2 flex border-[0.8px] border-[#EEEEEE] rounded items-center justify-center gap-1.5 cursor-pointer'
              onClick={() => handleClick('Export')}
            >
              <img src='/image/export.png' alt='export-img' className='w-[13px] h-[13px]'/>
              <h2>Export</h2>
            </div>
            <div
              className='w-[84px] h-[36px] pl-2 pr-2 flex border-[0.8px] border-[#EEEEEE] rounded items-center justify-center gap-1.5 cursor-pointer'
              onClick={() => handleClick('Share')}
            >
              <img src='/image/share.png' alt='share-img' className='w-[13px] h-[13px]'/>
              <h2>Share</h2>
            </div>
            <div
              className='w-[150px] h-[36px] bg-[#4B6A4F] pl-2 pr-2 flex border-[0.8px] border-[#EEEEEE] rounded items-center justify-center gap-1.5 cursor-pointer'
              onClick={() => handleClick('New Action')}
            >
              <img src='/image/newaction.png' alt='newaction-img' className='w-[13px] h-[13px]'/>
              <h2 className='text-white'>New Action</h2>
            </div>
          </div>
        </div>
      </div>
      {/* TABLE */}
      <div className="flex-1 overflow-x-auto overflow-y-auto mb-20">
        <table className="min-w-full bg-white rounded-lg shadow border border-gray-200">
          <thead>
            {/* Custom top row for group headers */}
            <tr>
              <th className="bg-white border-b border-r border-gray-200"></th>
              <th colSpan={4} className="bg-[#F8F8F8] border-b border-r border-gray-200 text-[#3D7FF6] font-semibold text-xs px-4 py-2 text-left">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  Q3 Financial Overview
                  <span className="text-[#E27D60] text-base">⭑</span>
                </div>
              </th>
              <th className="bg-white border-b border-r border-gray-200"></th>
              <th className="bg-[#E8F5EF] border-b border-r border-gray-200 text-[#4B6A4F] font-semibold text-xs px-4 py-2 text-center">
                <div className="flex items-center gap-1 justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  ABC
                  <span className="text-gray-400">...</span>
                </div>
              </th>
              <th colSpan={2} className="bg-[#F3F0FF] border-b border-r border-gray-200 text-[#8D7AE6] font-semibold text-xs px-4 py-2 text-center">
                <div className="flex items-center gap-1 justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  Answer a question
                  <span className="text-gray-400">...</span>
                </div>
              </th>
              <th className="bg-[#FDEDEC] border-b border-r border-gray-200 text-[#F4978E] font-semibold text-xs px-4 py-2 text-center">
                <div className="flex items-center gap-1 justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  Extract
                  <span className="text-gray-400">...</span>
                </div>
              </th>
              {/* Plus above empty column */}
              <th className="bg-white border-b border-gray-200 px-2 py-2 text-center flex items-center">
                <button
                  className="w-7 h-7 rounded-full bg-gray-100 border border-gray-300 text-xl font-bold text-gray-500 flex items-center justify-center hover:bg-gray-200"
                  onClick={() => handleClick('Add Column')}
                  title="Add Column"
                >+</button>
              </th>
            </tr>
            {/* Existing column headings */}
            <tr>
              <th className="px-4 py-2 border-b border-r border-gray-200 text-left text-gray-500 font-medium bg-gray-50">#</th>
              <th className="px-4 py-2 border-b border-r border-gray-200 text-left text-gray-500 font-medium bg-gray-50">Job Request</th>
              <th className="px-4 py-2 border-b border-r border-gray-200 text-left text-gray-500 font-medium bg-gray-50">Submitted</th>
              <th className="px-4 py-2 border-b border-r border-gray-200 text-left text-gray-500 font-medium bg-gray-50">Status</th>
              <th className="px-4 py-2 border-b border-r border-gray-200 text-left text-gray-500 font-medium bg-gray-50">Submitter</th>
              <th className="px-4 py-2 border-b border-r border-gray-200 text-left text-gray-500 font-medium bg-gray-50">URL</th>
              <th className="px-4 py-2 border-b border-r border-gray-200 text-left text-gray-500 font-medium bg-gray-50">Assigned</th>
              <th className="px-4 py-2 border-b border-r border-gray-200 text-left text-gray-500 font-medium bg-gray-50">Priority</th>
              <th className="px-4 py-2 border-b border-r border-gray-200 text-left text-gray-500 font-medium bg-gray-50">Due Date</th>
              <th className="px-4 py-2 border-b border-r border-gray-200 text-left text-gray-500 font-medium bg-gray-50">Est. Value</th>
              {/* Extra empty header for the plus column */}
              <th className="px-4 py-2 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-r border-gray-200">{idx + 1}</td>
                {columns.map(col => (
                  <td
                    key={col.key}
                    className={
                      (col.key === "url" ? "w-32 " : "") +
                      "px-4 py-2 border-b border-r border-gray-200 cursor-pointer"
                    }
                    onClick={() => handleClick(`${col.label} cell row ${idx + 1}`)}
                  >
                    {/* Status pill */}
                    {col.key === "status" && (
                      <span
                        className={
                          "px-3 py-1 rounded-full text-xs font-semibold text-center flex items-center  " +
                          (row[col.key] === "In-process"
                            ? "bg-[#FFF3D6] text-[#85640B]"
                            : row[col.key] === "Complete"
                            ? "bg-[#D3F2E3] text-[#0A6E3D]"
                            : row[col.key] === "Blocked"
                            ? "bg-[#FFE1DE] text-[#C22219]"
                            : row[col.key] === "Need to start"
                            ? "bg-[#E2E8F0] text-[#475569]"
                            : "bg-gray-100 text-gray-800")
                        }
                      >
                        {row[col.key]}
                      </span>
                    )}
                    {/* Priority pill */}
                    {col.key === "priority" && (
                      <span
                        className={
                          "px-3 py-1 rounded-full text-xs font-semibold  " +
                          (row[col.key] === "High"
                            ? "bg-red-100 text-red-700"
                            : row[col.key] === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : row[col.key] === "Low"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700")
                        }
                      >
                        {row[col.key]}
                      </span>
                    )}
                    {/* Default cell */}
                    {col.key !== "status" && col.key !== "priority" && row[col.key]}
                  </td>
                ))}
                {/* Extra empty cell for the plus column */}
                <td className="px-4 py-2 border-b border-gray-200"></td>
              </tr>
            ))}
            {/* Render empty rows to fill the table */}
            {Array.from({ length: Math.max(0, 20 - data.length) }).map((_, idx) => (
              <tr key={`empty-${idx}`}>
                <td className="px-4 py-2 border-b border-r border-gray-200 text-gray-300">{data.length + idx + 1}</td>
                {columns.map((col, colIdx) => (
                  <td
                    key={col.key}
                    className={
                      (col.key === "url" ? "w-32 " : "") +
                      "px-4 py-2 border-b border-r border-gray-200 cursor-pointer"
                    }
                    onClick={() => handleClick(`${col.label} cell row ${data.length + idx + 1}`)}
                  >
                    &nbsp;
                  </td>
                ))}
                {/* Extra empty cell for the plus column */}
                <td className="px-4 py-2 border-b border-gray-200"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* FIXED FOOTER */}
      <div className="w-full bg-white border-t border-gray-200 px-4 py-2 gap-2 flex fixed bottom-0 left-0 z-10">
        {["All Orders", "Pending", "Reviewed", "Arrived"].map((tab, i) => (
          <button
            key={tab}
            className={
              "px-4 py-1  font-medium text-sm " +
              (i === 0
                ? "bg-[#E8F0E9] text-black border-t-[2px] border-t-[#4B6A4F]"
                : "text-gray-600 hover:bg-gray-100")
            }
            onClick={() => handleClick(tab)}
          >
            {tab}
          </button>
        ))}
        <button className="ml-2 px-3 py-1   text-gray-500 text-lg font-bold flex items-center justify-center" onClick={() => handleClick('Plus Button')}>
          +
        </button>
      </div>
    </div>
  );
}
export default App;