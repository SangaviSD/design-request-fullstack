import "../styles/erp.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

function DesignList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("design-requests/")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <h2>Design Request</h2>
        <Link to="/new">
          <button className="primary-btn">+ Add Design Request</button>
        </Link>
      </div>

      <div className="card">
        <table className="erp-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Status</th>
              <th>Request Date</th>
              <th>Requester Name</th>
              <th>Design Start</th>
              <th>Design End</th>
              <th>Assign To</th>
            </tr>
          </thead>
          <tbody>
            {data.map(d => (
              <tr key={d.id}>
                <td>{d.request_id}</td>
                <td><span className="status">{d.status}</span></td>
                <td>{d.request_date}</td>
                <td>{d.requester_name}</td>
                <td>{d.design_start_date}</td>
                <td>{d.design_end_date}</td>
                <td>{d.assigned_to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DesignList;
