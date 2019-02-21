import React, { Component } from "react";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            {profile.bio ? (
              <div>
                <h3 className="text-center text-info">{profile.userID.name}</h3>
                <p className="lead">{profile.bio}</p>
                <hr />
              </div>
            ) : null}

            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap">
                {profile.skills.map((skill, index) => (
                  <div className="p-3" key={index}>
                    <i className="fa fa-check" /> {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileAbout;
