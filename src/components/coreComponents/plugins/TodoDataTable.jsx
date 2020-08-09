import React from "react";
import { customStyles } from "./CustomCssForDataTable";
import DataTable, { createTheme } from "react-data-table-component";

const TodoDataTable = (props) => {
  
  return (
    <React.Fragment>
      <DataTable
        defaultSortField="createdDate"
        defaultSortAsc={false}
        // sortServer
        // onSort={props.handleSort}
        persistTableHead
        fixedHeader={props.fixedHeader ? props.fixedHeader : false}
        title={props.tableHeader ? props.tableHeader : "Todo's"}
        columns={props.columns ? props.columns : []}
        data={props.data}
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
export default TodoDataTable;
