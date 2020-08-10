import DataTable, { createTheme } from "react-data-table-component";
import { customStyles } from "../../plugins/CustomCssForDataTable"; /// ikada inputs lev ga antuna?lev
import React, { useEffect } from "react";
import adminTodos from "../../../Redux/adminActions/admin.actions";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { useState } from "react";
import { globalSearch } from "../../../tools/helpers";

const AdminTodoDataTable = (props) => {
  console.log("props", props);
  const [state, setstate] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.adminTodos) {
      setstate(props.adminTodos);
    }
  }, [props.adminTodos]);

  useEffect(() => {
    dispatch(adminTodos());
  }, [props.broadCastUpdates]);

  useEffect(() => {
    setstate(
      globalSearch(props.adminTodos ? props.adminTodos : [], props.searchString)
    );
  }, [props.searchString]);

  useEffect(() => {
    dispatch(adminTodos());
  }, []);
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
        data={state}
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
const matStateToprops = (state) => {
  // console.log("acksnkcnsncks", state.userTodos.state.state.broadCastUpdates);
  return {
    adminTodos: state.adminReducers.adminTodos,
    broadCastUpdates: state.userTodos.broadCastUpdates,
  };
};
export default connect(matStateToprops, null)(AdminTodoDataTable);
