import React from 'react'
import UserLogin  from './userComponents/userLogin';

const WelcomePage=()=>{
    return(
        <div className="welomePage">

          <div className="col-md-12">
            <div className="flex">
          <div className="col-md-7">
                        <div className="title">

                        <p className="titleFn">Todo's System (MERN)</p>
                        </div>
                        <div className="desContent">
                          <ul>
                            <li className="todoDes">Admin:  User live  monitoring, and tracking user activities, User Management (Block or Access).</li>
                            <li className="todoDes">User:  Todo's CRUD Operations, Search, Sort, Paginating, Todo success alerts etc.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4">
                        

                    <UserLogin />
                        

                      </div>
            </div>
            <div className="devs">
              <div className="flex devInfoContainer">

            <div class="bg_move pad5">
                    <i class="far fa-address-card devInfoTitle"></i>
                    <p  className="devInfoTitle"><a className="DevLinks" href="https://github.com/hitmangoku/todoMernApp.git" target="_blank"> #K Sriharsha</a></p>
                </div>
                <div class="bg_move  pad5">
                    <i class="far fa-address-card devInfoTitle"></i>
                    <p className="devInfoTitle"> <a className="DevLinks" href="https://gitlab.com/it.ravinder.456/todo-app-mern" target="_blank">#V Ravinder</a></p>
                </div>
              </div> 
           
            </div>
            
          </div>
      
      </div>
    )
}
export default WelcomePage;