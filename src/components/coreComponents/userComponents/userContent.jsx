import React from 'react'
import NavBar from '../navs/navBar'
import SideBar from '../navs/sideBar'
import { Table, Header, Menu, Icon, Pagination } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

const UserContent=()=>{
return(
    <>
    
    <div className="MainContentWrapper page-wrapper default-theme sidebar-bg bg1 ">
         
         {/* page-content  */}


         <SideBar/>
           <div className="sectionContent  mbP5 ">
             <NavBar/>
          
        <div className="content mt-10">
        <div className="row ">
                 <div className="form-group col-md-12">
                  <div className="mytable">
            <Header className="tableHeader  mt20" as='h3' block>
             My Todo's
           </Header>
            <Table   >
              <Table.Header fullWidth>

                <Table.Row>
                  <Table.HeaderCell>Title</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {/* {Object.values(tableData).map(
              ({ slotId, deviceId, initialized, label }) => {
                return ( */}
                <Table.Row>
                  <Table.Cell>Need laptop</Table.Cell>
                  <Table.Cell>Need bought laptop</Table.Cell>
                  <Table.Cell>1 aug</Table.Cell>

                </Table.Row>
                {/* );
              }
            )} */}
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="4">
                    <Menu floated="right" pagination>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron left" />
                      </Menu.Item>

                      <Pagination
                        activePage={1}
                        // onPageChange={this.handlePaginationChange}
                        totalPages={2}
                      />
                      <Menu.Item as="a" icon>
                        <Icon name="chevron right" />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>


          </div>

                 </div>
                </div>
          
        </div>
             <div  className="content mt-10">

             </div>
          
           </div>

     
       </div>
    </>
)
}

export default UserContent;