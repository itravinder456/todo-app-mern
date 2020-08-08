import React, { useState } from "react";
import NavBar from "../navs/navBar";
import SideBar from "../navs/sideBar";
import { Button, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TodoDataTable from "../plugins/TodoDataTable";
import { columns } from "../plugins/DataTableColumnConfiguration";
import UserTodoModal from "./userTodoModal/UserTodoModal";
import { toastMessage } from "../../tools/Toaster";
import Input from "./userTodoModal/Input";

const UserContent = () => {
  const [addTodo, setAddTodo] = useState(false);
  const [updateTodoObject, setupdateTodoObject] = useState({});
  const [updateTodo, setUpdateTodo] = useState(false);

  const handleActionsFromDataTable = (e, row) => {
    const id = e.target.id;
    if (id == "edit") {
      setAddTodo(true);
      setupdateTodoObject(row);
      setUpdateTodo(true);
    }
    if (id == "delete") {
      //perform delete operation by passing _id #{row._id}
      toastMessage(`Todo was deleted successfully`, "success");
    }
  };

  return (
    <>
      <div className="MainContentWrapper page-wrapper default-theme sidebar-bg bg1 ">
        {/* page-content  */}

        <SideBar />
        <div className="sectionContent  mbP5 ">
          <NavBar />

          <div className="content mt-10">
            <UserTodoModal
              updateTodoObject={updateTodoObject}
              onClose={() => setAddTodo(false)}
              updateTodo={updateTodo}
              setUpdateTodo={(e) => setUpdateTodo(e)}
              open={addTodo}
            />
            <div className="row ">
              <div className="form-group col-md-12 mt-3">
                <Segment.Group>
                  <Segment>
                    <div className="flex" style={{ display: "flex" }}>
                      <div className="mt-1">
                        <h3>My Todo's</h3>
                      </div>
                      <div
                        className="pull-right col-md-3"
                        // style={{ "margin-inline-start": "auto" }}
                      >
                        <div className="flex">
                          {/* <h5 className="mt-2">Search:</h5> */}
                          <div className="col-md-12">
                            <Input placeholder="search" icon={true} loading={false} />
                          </div>
                        </div>
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
                      columns={columns(handleActionsFromDataTable)}
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

export default UserContent;
