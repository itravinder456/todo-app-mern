import React, { useState } from "react";
import NavBar from "../navs/navBar";
import SideBar from "../navs/sideBar";
import {
  Table,
  Header,
  Menu,
  Icon,
  Pagination,
  Button,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TodoDataTable from "../plugins/TodoDataTable";
import { columns } from "../plugins/DataTableColumnConfiguration";
import UserTodoModal from "./userTodoModal/UserTodoModal";

const UserContent = () => {
  const [addTodo, setAddTodo] = useState(false);
  return (
    <>
      <div className="MainContentWrapper page-wrapper default-theme sidebar-bg bg1 ">
        {/* page-content  */}

        <SideBar />
        <div className="sectionContent  mbP5 ">
          <NavBar />

          <div className="content mt-10">
            <UserTodoModal open={addTodo} />
            <div className="row ">
              <div className="form-group col-md-12 mt-3">
                <Segment.Group>
                  <Segment>
                    <div className="flex" style={{ display: "flex" }}>
                      <div className="">
                        <h3>My Todo's</h3>
                      </div>

                      <div
                        className="pull-right"
                        style={{ "margin-inline-start": "auto" }}
                      >
                        <Button primary onClick={() => setAddTodo(true)}>
                          <i className="fa fa-plus" /> Add a Todo
                        </Button>
                      </div>
                    </div>
                  </Segment>
                  <Segment>
                    <TodoDataTable
                      columns={columns(() => {
                        "";
                      })}
                    />
                  </Segment>
                  <Segment>Bottom</Segment>
                </Segment.Group>
                {/* <div className="mytable">
                  <Header className="tableHeader  mt20" as="h3" block>
                    My Todo's
                  </Header>
                  <div className="clearfix mt-3"></div>
                  <TodoDataTable
                    columns={columns(() => {
                      "";
                    })}
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className="content mt-10"></div>
        </div>
      </div>
    </>
  );
};

export default UserContent;
