import DataTable, { createTheme } from "react-data-table-component";
import { customStyles } from "../../plugins/CustomCssForDataTable"; /// ikada inputs lev ga antuna?lev
import React, { useEffect } from "react";
import {
  adminUserAction,
  userLogsAction,
} from "../../../Redux/adminActions/admin.actions";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { useState } from "react";
import { globalSearch } from "../../../tools/helpers";
const UserLogsDataTable = (props) => {
  const [state, setstate] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.userLogs) {
      setstate(props.userLogs);
    }
  }, [props.userLogs]);

  useEffect(() => {
    dispatch(userLogsAction());
  }, [props.broadCastUpdates, dispatch]);

  useEffect(() => {
    setstate(
      globalSearch(props.userLogs ? props.userLogs : [], props.searchString)
    );
  }, [props.searchString]);

  return (
    <React.Fragment>
      <DataTable
        defaultSortField="dateCreated"
        defaultSortAsc={false}
        persistTableHead
        fixedHeader={props.fixedHeader ? props.fixedHeader : false}
        title={props.tableHeader ? props.tableHeader : "Todo's"}
        columns={props.columns ? props.columns : []}
        data={state}
        pagination={props.pagination ? props.pagination : true}
        customStyles={customStyles}
        noHeader={true}
        striped={true}
      />
    </React.Fragment>
  );
};
const matStateToprops = (state) => {
  return {
    broadCastUpdates: state.userTodos.broadCastUpdates,
    userLogs: state.adminReducers.userLogs,
  };
};
export default connect(matStateToprops, null)(UserLogsDataTable);
