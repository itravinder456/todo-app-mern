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
    name: "Status",
    selector: "todoStatus",
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
    name: "Date Added",
    selector: "createdDate",
    sortable: true,
    // width: "13.8%",
    format: (row) => moment(row.createdDate).format("ll"),
  },
  {
    cell: (row) => (
      <div className="table-actions">
        <a
          className="mr-3"
          id="edit"
          onClick={clickHandler}
          style={{ cursor: "pointer" }}
        >
          <i class="fas fa-edit"></i>
        </a>
        <a className="mr" style={{ cursor: "pointer" }}>
          <i
            class="fas fa-trash"
            onClick={clickHandler}
            id="delete"
            aria-hidden="true"
          ></i>
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
