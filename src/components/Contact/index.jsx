import React from 'react';
import './index.css';
const ContactUsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-info text-white"><i className="fa fa-envelope"></i> Contact us.
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" id="message" rows="6" required></textarea>
                                </div>
                                <div className="mx-auto">
                                <button type="submit" className="btn btn-info text-right">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card bg-light mb-3">
                        <div className="card-header bg-info text-white text-uppercase"><i className="fa fa-home"></i> Address</div>
                        <div className="card-body">
                            <p>Promaster Guru</p>
                            <p>Roysambu</p>
                            <p>Kenya</p>
                            <p>Email : paul.mathenge@andela.com</p>
                            <p>Tel. +254700456439</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
