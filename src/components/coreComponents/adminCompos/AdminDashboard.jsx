import React, { useState } from "react";
import { columns } from "./plugins/DataTableColumnConfiguration";
import Navbar from "../navs/navBar";
import SideBar from "../navs/sideBar";
import { Button, Segment } from "semantic-ui-react";
import AdminTodoDataTable from "./plugins/AdminTodoDataTable";
import Input from "../userComponents/userTodoModal/Input";
import { Link } from "react-router-dom";
export const AdminDashboard = () => {
  const [searchString, setSearchString] = useState("");

  return (
    <>
      <div className="MainContentWrapper page-wrapper default-theme sidebar-bg bg1 ">
        {/* page-content  */}

        <SideBar />
        <div className="sectionContent  mbP5 ">
          <Navbar />

          <div className="content mt-10">
          <div class="row mt20">
                            <div class="col-xl-3 col-md-6">
                            <Link to="/dashboard">
                                <div class="card bg-primary text-white mb-4">
                                    <div class="card-body">My Todo's</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            <div class="col-xl-3 col-md-6">
                            <Link to="/view-users-todos">
                                <div class="card text-yellow text-white mb-4">

                                    <div class="card-body">Users Todo's</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                   
           
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                                
                  </Link>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-success text-white mb-4">
                                    <div class="card-body">User Management</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-danger text-white mb-4">
                                    <div class="card-body">View Logs</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 
            <div className="row ">
              <div className="form-group col-md-12 mt-3">
                <Segment.Group>
                  <Segment className="table-headerbg">
                    <div className="flex col-md-12" style={{ display: "flex" }}>
                      <div className="col-md-9">
                        <div className="mt-1">
                          <h3>User's Todo's</h3>
                        </div>
                      </div>
                      <div
                        className="pull-right col-md-3"
                        style={{ "margin-inline-start": "auto" }}
                      >
                        <div className="flex">
                          <h5 className="mt-2">Search:</h5>
                          <div className="col-md-12">
                            <Input
                              onChange={(e) => setSearchString(e.target.value)}
                              icon={true}
                              loading={false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Segment>

                  <Segment>
                    <AdminTodoDataTable
                      searchString={searchString}
                      columns={columns}
                    />
                  </Segment>
                </Segment.Group>
              </div>
            </div>
          </div>
          <div className="content mt-10"></div>
        </div>
      </div>
    </>
  );
};
export default AdminDashboard;
