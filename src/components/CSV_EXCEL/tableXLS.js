import React, { Fragment } from "react";

import ReactToExcel from "react-html-table-to-excel";

const TableXLS = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <ReactToExcel
            className=" btn btn-danger ml-2 "
            table="table-xls"
            filename="supplierBranch"
            sheet="sheet"
            buttonText="Export XLS"
          />

          <h1 className="pt-4">Supplier Branch Master</h1>
          <small className="lead">
            Add new Suppliers Branch of Plantronics
          </small>
        </div>
        <br />

        <table className="table table-hover mt-4" id="table-xls">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Supplier</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Location</th>
              <th scope="col">Adress</th>
              <th scope="col">Contact Person 1</th>
              <th scope="col">Contact Person 2</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Westgonm</td>
              <td>Maharastra</td>
              <td>Mumbai</td>
              <td>Andheri East</td>
              <td>Plot No. 24, Near Mithai Shop</td>
              <td>Prashant</td>
              <td>-</td>
              <td>+9123546789</td>
              <td>Westgonm@gmail.com</td>
              <td>
                <i className="far fa-edit fa-md mr-2"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
              </td>
            </tr>

            <tr>
              <td>UNI Tech</td>
              <td>Jharkhand</td>
              <td>Ranchi</td>
              <td>Firayalal Chowk </td>
              <td>Flat No. 24, Near Punjab sweetsShop</td>
              <td>Kishor</td>
              <td>-</td>
              <td>+8127866789</td>
              <td>UniTech@gmail.com</td>
              <td>
                <i className="far fa-edit fa-md mr-2"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
              </td>
            </tr>
            <tr>
              <td>Ingram</td>
              <td>Delhi</td>
              <td>Delhi City</td>
              <td>Chandni Chowk </td>
              <td>Behind jama Masjid</td>
              <td>James</td>
              <td>-</td>
              <td>+8127866789</td>
              <td>-</td>
              <td>
                <i className="far fa-edit fa-md mr-2"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TableXLS;
