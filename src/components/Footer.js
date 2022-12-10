import React from 'react'

export default function Footer() {
  return (
    
<div className="p-4">
     
      <footer className="text-center text-lg-start bg-light text-muted">
       
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
         
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          

        
          <div>
            
            <a href="https://www.linkedin.com/in/mohammadtabish2729/" target="_blank" className="me-4 text-reset">
            <i className="fa fa-linkedin-square" style={{"color":"blue","fontSize":"20px"}}></i>
            </a>
            <a href="https://github.com/mtabdev" target="_blank" className="me-4 text-reset">
            <i className="fa fa-github" style={{"color":"black","fontSize":"20px"}}></i>
            </a>
          </div>
         
        </section>
       
        <section className="">
          <div className="container text-center text-md-start mt-5">
           
            <div className="row mt-3">
              
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
               
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Tabish 
                </h6>
                <p>
                  Hi there , thanks for visiting my project . Please give a star at Github if you liked it
                </p>
              </div>
              
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
               
                <h6 className="text-uppercase fw-bold mb-4">
                 Technologies
                </h6>
                <p>
                  <a href="#!" className="text-reset">MongoDB</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Express JS</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React JS</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Node JS</a>
                </p>
              </div>
             
              {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div> */}
            
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fa fa-map-marker mx-2" style={{"color":"green"}}></i> India, UP - 201206 , IN</p>
                <p>
                <i className="fa fa-envelope mx-2" style={{"color":"blue"}}></i>
                  tabishhas2729@gmail.com
                </p>
                <p><i className="fa fa-phone mx-2" style={{"color":"blue"}}></i> + 01 234 567 88</p>
                <p><i className="fa fa-phone mx-2" style={{"color":"blue"}}></i> + 01 234 567 89</p>
              </div>
             
            </div>
           
          </div>
        </section>
      
        <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
          <p>Designed and Developed by Tabish</p>
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mtabdev.github.io/myresume/" target="_blank">Food Go Owner</a>
        </div>
       
      </footer>
      
    </div>


    
  )
}
