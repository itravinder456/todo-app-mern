import React from 'react'
import NavBar from '../navs/navBar'
import SideBar from '../navs/sideBar'


const UserContent=()=>{
return(
    <>
    
    <div className="MainContentWrapper page-wrapper default-theme sidebar-bg bg1 ">
         
         {/* page-content  */}


         <SideBar/>
           <div className="sectionContent ">
             <NavBar/>
          
             <div className="content ">
                <div className="row ">
                 <div className="form-group col-md-12">
                   <h2>Pro Sidebar</h2>
                   <p>This is a responsive sidebar template with dropdown menu based on bootstrap framework.</p>
                 </div>
                 <div className="form-group col-md-12">
                   <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=small" frameBorder={0} scrolling={0} width="100px" height="30px" />
                   <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=small" frameBorder={0} scrolling={0} width="100px" height="30px" />
                 </div>
                 <div className="form-group col-md-12">
                   <a id="toggle-sidebar" className="btn btn-secondary rounded-0" href="#">
                     <span>Toggle Sidebar</span>
                   </a>
                   <a id="pin-sidebar" className="btn btn-outline-secondary rounded-0" href="#">
                     <span>Pin Sidebar</span>
                   </a>
                 </div>
               </div>
               <hr />
               <div className="row">
                 <div className="form-group col-md-12">
                   <h3>Themes</h3>
                   <p>Here are more themes that you can use</p>
                 </div>
               </div>
               <div className="row">
                 <div className="form-group col-md-12">
                   <a href="#" data-theme="default-theme" className="theme default-theme selected" />
                   <a href="#" data-theme="chiller-theme" className="theme chiller-theme" />
                   <a href="#" data-theme="legacy-theme" className="theme legacy-theme" />
                   <a href="#" data-theme="ice-theme" className="theme ice-theme" />
                   <a href="#" data-theme="cool-theme" className="theme cool-theme" />
                   <a href="#" data-theme="light-theme" className="theme light-theme" />
                 </div>
                 <div className="form-group col-md-12">
                   <p>You can also use background image </p>
                 </div>
                 <div className="form-group col-md-12">
                   <a href="#" data-bg="bg1" className="theme theme-bg selected" />
                   <a href="#" data-bg="bg2" className="theme theme-bg" />
                   <a href="#" data-bg="bg3" className="theme theme-bg" />
                   <a href="#" data-bg="bg4" className="theme theme-bg" />
                 </div>
                 <div className="form-group col-md-12">
                   <div className="custom-control custom-switch">
                     <input type="checkbox" className="custom-control-input" id="toggle-bg" defaultChecked />
                     <label className="custom-control-label" htmlFor="toggle-bg">Background image</label>
                   </div>
                 </div>
                 <div className="form-group col-md-12">
                   <div className="custom-control custom-switch">
                     <input type="checkbox" className="custom-control-input" id="toggle-border-radius" />
                     <label className="custom-control-label" htmlFor="toggle-border-radius">Border radius</label>
                   </div>
                 </div>
               </div>
               <hr />
               <div className="row ">
                 <div className="form-group col-md-12">
                   <small>Made with <i className="fa fa-heart text-danger" aria-hidden="true" /> by <span className="text-secondary font-weight-bold">Mohamed
                   Azouaoui</span></small>
                 </div>
                 <div className="form-group col-md-12">
                   <a href="https://github.com/azouaoui-med" target="_blank" className="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
                     <i className="fab fa-github" aria-hidden="true" />
                   </a>
                   <a href="https://twitter.com/azouaoui_med" target="_blank" className="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
                     <i className="fab fa-twitter" aria-hidden="true" />
                   </a>
                   <a href="https://www.instagram.com/azouaoui_med/" target="_blank" className="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
                     <i className="fab fa-instagram" aria-hidden="true" />
                   </a>
                   <a href="https://www.linkedin.com/in/mohamed-azouaoui/" target="_blank" className="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
                     <i className="fab fa-linkedin-in" aria-hidden="true" />
                   </a>
                 </div>
               </div>
           
           
             </div>
             
          
           </div>

     
       </div>
    </>
)
}

export default UserContent;