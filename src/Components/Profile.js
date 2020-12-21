import React from 'react';
import logo from "../assets/logo.png";
import profileImage from "../assets/profile_img.png";
import ProfileItem from "../Components/ProfileItem";
import "./Profile.css";

function Profile() {
    return (
        <>
            <section className="profile">
                <header>
                    <nav className="profile-nav1 flex">
                        <div>
                            <a href="#"><img src={logo} alt="logo"/></a>
                        </div>
                        <div className="flex">
                            <span><i class="far fa-bell"></i></span>
                            <div><img src={profileImage} id="profile_img_small" alt="profile_img"/></div>
                            <h3>User Name</h3>
                        </div>
                    </nav>
                </header>
                <div className="flex">
                    <aside>
                        <h3>Total Balance</h3>
                        <h2>$5.20</h2>
                        <nav>
                            <h4>MAIN</h4>
                            <ul>
                                <li><a><i class="fas fa-th-large"></i> Dashboard</a></li>
                                <li><a><i class="fas fa-user-circle"></i> My Profile</a></li>
                                <li><a><i class="fas fa-cog"></i> Settings</a></li>
                                <li><a><i class="fas fa-question-circle"></i> Support</a></li>
                                <li><a><i class="fas fa-power-off"></i> Log Out</a></li>
                            </ul>
                        </nav>
                    </aside>
                    <section>
                        <h1>Profile</h1>
                        <div className="profile-item1 card">
                            <div className="profile-image">
                                <img src={profileImage} alt="profile_img" />
                            </div>
                            <button className="bttn">Edit Profile Picture</button>
                            <ProfileItem heading="Name" value="Austin Robertson" edit={true}/>
                            <ProfileItem heading="Merchant ID" value="#3882045"/>
                            <ProfileItem heading="Email" value="Austinrobertson@gmail.com" edit={true}/>
                            <ProfileItem heading="Phone" value="08035457484" edit={true}/>
                            <ProfileItem heading="Country" value="Nigeria" edit={true}/>
                        </div>
                        <div className="profile-item2 card">
                            <h2>Account Status</h2>
                            <p><i class="fas fa-shield-alt"></i> Your account is not verified</p>
                            <p>To verify your account, you need to complete the following three<br/> steps, 
                            upload your proof of identity, proof of address and verify your<br/> email address </p>
                            <div className="flex">
                                <i class="fas fa-check-circle"></i> 
                                <span>
                                    <h3>Proof of Identity</h3>
                                    <p>ID Card or Passport</p>
                                </span>
                                <span>
                                    <input type="file" name="upload" id="upload" hidden/>
                                    <label htmlFor="upload" className="bttn">Upload</label>
                                </span>
                                </div>
                            <div className="flex">
                                <i class="fas fa-check-circle"></i> 
                                <span>
                                    <h3>Email Verification</h3>
                                    <p>Youremail@gmail.com</p>
                                </span>
                                <span className="special">
                                    <button id="verify" className="bttn">Send Verification Email</button>
                                </span>                                    
                            </div>
                            <div>
                                <p>FinanceEdge documents are approved together not one at a time.
                                Please ensure you submit both documents correctly to avoid a single
                                document being rejected. Thank you.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Profile;
