import React from 'react';
import info from '../../Utils/data'
import './about.css'
import CollapseBtn from '../../components/Collapse/Collapse_Btn';

const About = (props) => {
    return (
          <>
         <div className="row justify-content-between">
            <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="about">
                    <div className="title">
                        <h4>{props.title}</h4>
                    </div>
                    <p className="text-justify small">{info.about_text_1}</p>
                    <p className="text-justify small">{info.about_text_2}</p>
                    <p className="text-justify small">{info.about_text_3}</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
                <h4 class="bs"><span class="bbs">Hi</span> I am {info.name}</h4>
                <img src={info.profile_image} class="img-fluid" alt="Responsive image"></img>
            </div>
         </div>
         <div className="second-area">
            <CollapseBtn label="Education">
                <div className="table-responsive-sm">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Ex. Name</th>
                                <th>Group/Dept.</th>
                                <th>Point</th>
                                <th>P.Year</th>
                                <th>Inst.</th>
                            </tr>
                        </thead>
                        <tbody>
                        {info.education.map(edu =>( 
                            <tr>
                                <td>{edu.ex_name}</td>
                                <td>{edu.group}</td>
                                <td>{edu.point}</td>
                                <td>{edu.pass_year}</td>
                                <td>{edu.inst_name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
 
            </CollapseBtn>
         </div>
          </>

    );
};

export default About;

