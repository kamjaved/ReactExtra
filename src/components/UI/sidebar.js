import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <div className="page-wrapper chiller-theme toggled">
          <Link to="/table" id="show-sidebar" className="btn btn-sm btn-dark">
            <i className="fas fa-bars"></i>
          </Link>
          <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
              <div className="sidebar-brand">
                <Link to="/table">WTS Solution</Link>
                <div id="close-sidebar">
                  <i className="fas fa-times"></i>
                </div>
              </div>
              <div className="sidebar-header">
                <div className="user-pic">
                  <img
                    className="img-responsive img-rounded"
                    src="https://static.businessinsider.com/image/585c51bbee14b617038b4f80/image.jpg"
                    alt="User"
                  />
                </div>
                <div className="user-info">
                  <span className="user-name">
                    Zee
                    <strong>Ali</strong>
                  </span>
                  <span className="user-role">Administrator</span>
                  <span className="user-status">
                    <i className="fa fa-circle"></i>
                    <span>Online</span>
                  </span>
                </div>
              </div>
              {/*-- sidebar-header  -*/}

              {/*-- sidebar-search  -*/}
              <div className="sidebar-menu">
                <ul>
                  <li className="header-menu">
                    <span>Master Form</span>
                  </li>

                  <li className="sidebar-dropdown">
                    <Link>
                      <i className="fa fa-id-card"></i>
                      <span>QR-Code</span>
                    </Link>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="/qrcode/input">Qrcode by input</Link>
                        </li>
                        <li>
                          <Link to="/qrcode/api">Qrcode by APIs</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="sidebar-dropdown">
                    <Link>
                      <i className="fa fa-id-card"></i>
                      <span>Export Table</span>
                    </Link>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="/table/export-csv">Export-CSV</Link>
                        </li>
                        <li>
                          <Link to="/table/export-xls">Export-XLS</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="sidebar-dropdown">
                    <Link>
                      <i className="fa fa-sort"></i>
                      <span>React-OCR</span>
                    </Link>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <Link to="/ocr/ocr-url">OCR-URL</Link>
                        </li>
                        <li>
                          <Link to="/ocr/ocr-upload">OCR-Upload</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              {/*-- sidebar-menu  -*/}
            </div>
            {/*-- sidebar-Content  -*/}
            <div className="sidebar-footer">
              <Link to="./table">
                <i className="fa fa-bell"></i>
                <span className="badge badge-pill badge-warning notification">
                  3
                </span>
              </Link>
              <Link to="./table">
                <i className="fa fa-envelope"></i>
                <span className="badge badge-pill badge-success notification">
                  7
                </span>
              </Link>
              <Link to="./table">
                <i className="fa fa-cog"></i>
                <span className="badge-sonar"></span>
              </Link>
              <Link to="./table">
                <i className="fa fa-power-off"></i>
              </Link>
            </div>
          </nav>
          {/*-- sidebar-wrapper  -*/}
          <main className="page-content">
            <div className="">{this.props.children}</div>
          </main>
          {/*-- Page Content  -*/}
        </div>
      </Fragment>
    );
  }
}

export default Sidebar;
