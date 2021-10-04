import React, {  useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import "./App.css";



const REPORT_API_URL = `${process.env.REACT_APP_API_HOST}/api/reports/turnover`;

function App() {
  

  const [data, setBody] = useState([]);
  const [columns, setColumns] = useState([]);

  const fetchTurnOverReport = (type) => {
    (async () => {
      const result = await axios.post(`${REPORT_API_URL}`, { type });
      setBody(result.data.body);

      setColumns(result.data.columns);
      //columns=[columns,...{coloums:result.data.columns}];
      //setBody({ body: result.data.body});
    })();
  };

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    fetchTurnOverReport(value);
  };

  useEffect(() => {
    fetchTurnOverReport("brand");
  }, []);

  return (
    <div className="App">
      <div>
      <select onChange={handleFilterChange} >
        <option value="brand">Brand</option>
        <option value="daily">Daily</option>
      </select>
      </div>
      <div>
    {columns.Header && data &&
       <Table headers={columns} data={data} />
    }
      </div>
    </div>
  );
}

export default App;
