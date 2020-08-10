import memoize from "memoize-one";
import React from "react";
import moment from "moment";
export const columns = [
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
    name: "Priority",
    selector: "todoPriority",
    sortable: true,
    format: (row) =>
      row.todoPriority == 1 ? "High" : row.todoPriority == 2 ? "Medium" : "Low",
    // right: true,
    // width: "15%",
  },
  {
    name: "Status",
    selector: "todoStatus",
    sortable: true,
    format: (row) => (row.todoStatus == 1 ? "Active" : "Completed"),
    // right: true,
    // width: "15%",
  },
  {
    name: "Created By",
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
];
