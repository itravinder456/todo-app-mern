import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { customStyles } from "../../plugins/CustomCssForDataTable";
const data = [
  {
    _id: "154s5fsrg",
    todoTitle: "QSWFC",
    todoDescription: "BBGsgr",
    todoPriority: 1,
    createdUserId: "Ravinder",
    createdDate: "2020-07-05 00:00:00:00",
    todoStatus: 0,
  },
  {
    todoTitle: "asdaqefef",
    todoDescription: "TTGgerg",
    createdUserId: "Harsha",
    createdDate: "2020-05-10 00:00:00:00",
    todoPriority: 1,
    todoStatus: 1,
  },
  {
    todoTitle: "fehrgd",
    todoDescription: "GECEG",
    createdUserId: "Ravinder",
    createdDate: "2020-02-12 00:00:00:00",
    todoPriority: 2,
    todoStatus: 1,
  },
  {
    todoTitle: "Wcgertg",
    todoDescription: "CFGgherg",
    createdUserId: "Harsha",
    createdDate: "2020-08-14 00:00:00:00",
    todoPriority: 3,
    todoStatus: 1,
  },
  {
    todoTitle: "htbstrhthhsre",
    todoDescription: "ihsgtrh",
    createdUserId: "Harsha",
    createdDate: "2020-08-07 00:00:00:00",
    todoPriority: 1,
    todoStatus: 0,
  },
  {
    todoTitle: "mgjesgrg",
    todoDescription: "ysfdhtrh",
    createdUserId: "Ravinder",
    createdDate: "2020-08-25 00:00:00:00",
    todoPriority: 2,
    todoStatus: 1,
  },
  {
    todoTitle: "vaergg",
    todoDescription: "fgehfdgreg",
    createdUserId: "Ravinder",
    createdDate: "2020-08-22 00:00:00:00",
    todoPriority: 3,
    todoStatus: 0,
  },
  {
    todoTitle: "vdgsergg",
    todoDescription: "rgfgesrghth",
    createdUserId: "Harsha",
    createdDate: "2020-08-14 00:00:00:00",
    todoPriority: 1,
    todoStatus: 1,
  },
  {
    todoTitle: "aegrgef",
    todoDescription: "wefwgasherhg",
    createdUserId: "Ravinder",
    createdDate: "2020-08-31 00:00:00:00",
    todoPriority: 1,
    todoStatus: 1,
  },
  {
    todoTitle: "wefefdsaewrgf",
    todoDescription: "ggwgerfwe",
    createdUserId: "Ravinder",
    createdDate: "2020-08-28 00:00:00:00",
    todoPriority: 1,
    todoStatus: 1,
  },
  {
    todoTitle: "sdfwefdsgweg",
    todoDescription: "ehg32wedsfweg",
    createdUserId: "Harsha",
    createdDate: "2020-08-17 00:00:00:00",
    todoPriority: 1,
    todoStatus: 1,
  },
  {
    todoTitle: "GErger",
    todoDescription: "agfewegergfg",
    createdUserId: "Harsha",
    createdDate: "2020-08-14 00:00:00:00",
    todoPriority: 2,
    todoStatus: 0,
  },
];
const AdminTodoDataTable = (props) => {
  return (
    <React.Fragment>
      <DataTable
        // actions={actionsMemo}
        defaultSortField="createdDate"
        defaultSortAsc={false}
        // sortServer
        // onSort={props.handleSort}
        persistTableHead
        fixedHeader={props.fixedHeader ? props.fixedHeader : false}
        title={props.tableHeader ? props.tableHeader : "Todo's"}
        columns={props.columns ? props.columns : []}
        data={props.data ? props.data : data}
        // selectableRows={props.selectableRows ? props.selectableRows : true}
        // Clicked
        // keyField="package_id"
        // Selected={handleChange}
        pagination={props.pagination ? props.pagination : true}
        customStyles={customStyles}
        // paginationServer={true}
        // paginationTotalRows={props.paginationTotalRows}
        // onChangePage={props.onChangePage}
        // onChangeRowsPerPage={props.onChangeRowsPerPage}
        noHeader={true}
        // progressPending={props.progressPending ? false : true}
        // progressComponent={<CircularLoading />}
        striped={true}
      />
    </React.Fragment>
  );
};
export default AdminTodoDataTable;
