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
   
  },
  {
    name: "Priority",
    selector: "todoPriority",
    sortable: true,
    format: (row) =>
      row.todoPriority == 1 ? "High" : row.todoPriority == 2 ? "Medium" : "Low",
    
  },
  {
    name: "Status",
    selector: "todoStatus",
    sortable: true,
    format: (row) => (row.todoStatus == 1 ? "Active" : "Completed"),
  },
  {
    name: "Created By",
    selector: (row) => row["user"][0].firstName + " " + row["user"][0].lastName,
    sortable: true,
  },
  {
    name: "Date Added",
    selector: "createdDate", 
    sortable: true,
    format: (row) => moment(row.createdDate).format("lll"),
  },
];
