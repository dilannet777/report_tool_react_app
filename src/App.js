import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { useExportData } from "react-table-plugins";
import Table from "./Table";
import "./App.css";

const API_HOST = "http://localhost:8000";

const REPORT_API_URL = `${API_HOST}/api/reports/turnover`;

function App() {
  let columns = useMemo(
    () => [
      {
        Header: "Report - 7 Days Turnover",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Week End Date",
            accessor: "week_end_date",
          },
          {
            Header: "Turnover (EURO)",
            accessor: "turnover",
          },
        ],
      },
    ],
    []
  );

  const [data, setBody] = useState([]);

  const fetchTurnOverReport = (type) => {
    (async () => {
      const result = await axios.post(`${REPORT_API_URL}`, { type });
      setBody(result.data.body);

      //  setColumns({ columns: result.data.columns});
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
        <option value="day">Day</option>
      </select>
      </div>
      <div>
      <Table columns={columns} data={data} />
      </div>
    </div>
  );
}

export default App;
