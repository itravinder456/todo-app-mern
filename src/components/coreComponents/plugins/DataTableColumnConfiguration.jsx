import memoize from "memoize-one";
import React from "react";
import moment from "moment";
export const columns = memoize((clickHandler) => [
  {
    name: "Todo Title",
    selector: "todoTitle",
    sortable: true,
    width: "20%",
  },
  {
    name: "Description",
    selector: "todoDescription",
    sortable: true,
    // right: true,
    // width: "15%",
  },
  {
    name: "Created by",
    selector: "createdUserId",
    sortable: true,
    // width: "16.9%",
    // right: true,
  },
  {
    name: "Date Recieved",
    selector: "createdDate",
    sortable: true,
    // width: "13.8%",
    format: (row) => moment(row.createdDate).format("ll"),
  },
  {
    cell: (row) => (
      <div className="table-actions">
        <a className="mr-3">
          {/* <i id="edit" onClick={clickHandler} class="la la-edit"></i> */}
          <i class="fas fa-edit"></i>
        </a>
        <a  className="mr">
          {/* <i onClick={clickHandler} id="delete" class="la la-print"></i> */}
          <i class="fas fa-trash" aria-hidden="true"></i>
        </a>
      </div>
    ),
    width: "10%",
    name: "Actions",
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
]);
