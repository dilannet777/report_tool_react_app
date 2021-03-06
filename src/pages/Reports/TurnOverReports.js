import React, {  useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/Table";




const REPORT_API_URL = `${process.env.REACT_APP_API_HOST}/api/reports/turnover`;

function ReportPage() {
  

  const [data, setBody] = useState([]);
  const [columns, setColumns] = useState([]);

  const fetchTurnOverReport = (type) => {
    (async () => {
      const result = await axios.post(`${REPORT_API_URL}`, { type });
      setBody(result.data.body);
      setColumns(result.data.columns);

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

export default ReportPage;