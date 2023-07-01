import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import template1img from "../resources/templates/template1img.png";
import '../resources/templates.css';
import { useNavigate } from "react-router-dom";
import template2img from "../resources/templates/template2img.png";

const Home = () => {
  const templates=[{
    title:'Simple Resume',
    image:template1img
  },{
    title:'Highlighted Section Resume',
    image:template2img
  }]

  const navigate=useNavigate();

  return (
  
    <DefaultLayout>
      <div className="row home">
          {
            templates.map((template, index)=>{
              return <div className="col-md-5">
                  <div className="template">
                    <img src={template.image} height='400' style={{width:'100%'}}></img>
                    <div className="text">
                      <p>{template.title}</p>
                      <button onClick={()=>{navigate(`/templates/${index+1}`)}}>TRY</button>
                    </div>
                    
                  </div>
                </div>
            })
          }
      </div>
    </DefaultLayout>
  );
};

export default Home;
