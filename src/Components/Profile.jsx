import React, { Component } from "react";  

export default class Profile extends Component {  
  render() {  
    return (  
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-sm mx-auto">  
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">  
          <img  
            className="w-full object-cover h-48"  
            src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"  
            alt="Profile"  
          />  
          <div className="p-4">  
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Ahmed Bennaya</h2>  
            <p className="text-gray-600 mb-1">Born in Tunisia</p>  
            <p className="text-gray-600">I'm a Full Stack Developer</p>  
          </div>  
        </div>  
      </div>  
    );  
  }  
}