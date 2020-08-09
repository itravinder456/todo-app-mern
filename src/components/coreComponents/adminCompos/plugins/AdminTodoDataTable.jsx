import DataTable, { createTheme } from "react-data-table-component";
import { customStyles } from "../../plugins/CustomCssForDataTable";/// ikada inputs lev ga antuna?lev
import React,{useEffect} from 'react'
import adminTodos from "../../../Redux/adminActions/admin.actions";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
const AdminTodoDataTable = (props) => {
  console.log("caslclascsmmcasm",props)
  let  data = [];
  const dispatch = useDispatch()
  if (props.adminTodos) {
    data=props.adminTodos
  }
 
  useEffect(()=>{
    dispatch(adminTodos())
   
  
    
  },[dispatch])
  console.log("kjandknasdas",data)
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
        data={data}
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
  console.log("acksnkcnsncks",state)
  return { adminTodos: state.adminReducers.adminTodos};
};
 export default connect(matStateToprops, null)(AdminTodoDataTable);
