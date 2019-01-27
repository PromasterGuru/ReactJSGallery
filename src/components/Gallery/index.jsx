import React from 'react';
import {Link} from 'react-router-dom';
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img8 from "../../images/img8.jpg";

const GalleryPage = () => {
    return (
        <div className="row text-center text-lg-left">
            <h1>Promaster Gallery</h1>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <Link to="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src= {img1} alt="" />
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <Link to="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src= {img3} alt="" />
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <Link to="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src= {img2} alt="" />
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <Link to="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src= {img4} alt="" />
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <Link to="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src= {img5} alt="" />
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <Link to="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src= {img6} alt="" />
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <Link to="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src= {img7} alt="" />
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <Link to="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src= {img8} alt="" />
                </Link>
            </div>
        </div>
        );
    };

export default GalleryPage;
