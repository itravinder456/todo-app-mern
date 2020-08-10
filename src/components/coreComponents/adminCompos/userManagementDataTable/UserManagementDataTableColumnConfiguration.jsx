import memoize from "memoize-one";
import React from "react";
import moment from "moment";
import { Menu, Dropdown, Button } from "semantic-ui-react";
const userStatusOptions = [
  {
    key: 1,
    value: 1,
    text: "Active",
  },
  {
    key: 0,
    value: 0,
    text: "Blocked",
  },
];
export const columns = memoize((clickHandler) => [
  {
    name: "First Name",
    selector: "firstName",
    sortable: true,
    // width: "20%",
  },
  {
    name: "Last Name",
    selector: "lastName",
    sortable: true,
    // right: true,
    // width: "15%",
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
    // format: (row) =>
    //   row.todoPriority == 1 ? "High" : row.todoPriority == 2 ? "Medium" : "Low",
    // right: true,
    // width: "15%",
  },
  {
    name: "Phone",
    selector: "phone",
    sortable: true,
    // format: (row) => (row.todoStatus == 1 ? "Active" : "Completed"),
    // right: true,
    // width: "15%",
  },
  // {
  //   name: "Created By",
  //   selector: "createdUserId",
  //   sortable: true,
  //   // width: "16.9%",
  //   // right: true,
  // },
  {
    name: "Date Added",
    selector: "createdDate",
    sortable: true,
    // width: "13.8%",
    format: (row) => moment(row.createdDate).format("ll"),
  },
  {
    cell: (row) => (
      <div className="table-actions" style={{ width: "50%" }}>
        {/* <Dropdown   options={userStatusOptions} selection value={row.status} /> */}
        {/* <Button toggle active={row.todoStatus === 1 ? true : false}>
          {row.todoStatus === 1 ? " " + "Active" + " " : "Blocked"}
        </Button> */}
        <Button.Group size="tiny">
          <Button style={{borderRadius:"5px 0px 0px 5px"}} color={row.todoStatus === 1 && "green"}>Active</Button>
          <Button style={{borderRadius:"0px 5px 5px 0px"}} color={row.todoStatus === 0 && "red"}>Blocked</Button>
        </Button.Group>
      </div>
    ),
    // width: "20%",
    name: "Status",
    ignoreRowClick: true,
    allowOverflow: true,
    // button: true,
    center: false,
  },
]);
