import "../styles/erp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function NewDesign() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    request_id: "",
    request_date: "",
    requester_name: "",
    status: "",
    design_start_date: "",
    design_end_date: "",
    assigned_to: "",
    organization: "",
    product_name: "",
    remarks: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = e => {
    e.preventDefault();
    api.post("design-requests/", form)
      .then(() => navigate("/"));
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2>New Design Request</h2>
        <button className="primary-btn" onClick={submit}>Save</button>
      </div>

      <div className="card">
        <div className="section-title">Details</div>

        <div className="form-grid">
          <div className="form-group">
            <label>Request ID</label>
            <input name="request_id" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Request Date</label>
            <input type="date" name="request_date" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Assigned To</label>
            <input name="assigned_to" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Requester Name</label>
            <input name="requester_name" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select name="status" onChange={handleChange}>
              <option value="">Select</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Design Start Date</label>
            <input type="date" name="design_start_date" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Design End Date</label>
            <input type="date" name="design_end_date" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Organization</label>
            <input name="organization" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Product Name</label>
            <input name="product_name" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Remarks</label>
            <textarea name="remarks" onChange={handleChange}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDesign;
