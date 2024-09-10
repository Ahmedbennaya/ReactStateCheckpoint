import React, { Component } from "react";
import Profile from "./Components/Profile";
import Timer from "./Components/Timer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Ahmed Bennaya",
      bio: "Born in Tunisia",
      photo: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      profession: "Developer",
      showProfile: false,
    };
  }

  toggleProfileVisibility = () => {
    this.setState(prevState => ({ showProfile: !prevState.showProfile }));
  };

  render() {
    const { fullName, bio, photo, profession, showProfile } = this.state;
    const profileDescription = `${bio} and he is a ${profession}`;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-5 text-center">
          {showProfile && (
            <>
              <Profile
                fullName={fullName}
                desc={profileDescription}
                photo={photo}
              />
              <Timer />
            </>
          )}

          <button
            className={`mt-4 px-6 py-3 text-white font-semibold rounded-lg shadow-md ${
              showProfile ? "bg-yellow-500" : "bg-blue-500"
            } hover:bg-opacity-75 transition duration-200`}
            onClick={this.toggleProfileVisibility}
          >
            {showProfile ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
      </div>
    );
  }
}
