// import React from "react";
// import { Link } from "react-router-dom";

// const Landingpage = () => {
//   return (
//     <>
//       <Link to="/home">
//         <div className="rounded-lg bg-green-500 pt-10 pb-10 mb-10 mt-10">
//           <p className="text-black font-TiroTamil text-2xl font-normal leading-normal text-center">
//             Student
//           </p>
//         </div>
//       </Link>
//       <Link>
//         <div className="rounded-lg bg-green-500 pt-10 pb-10 mb-10">
//           <p className="text-black font-TiroTamil text-2xl font-normal leading-normal text-center">
//             Admin
//           </p>
//         </div>
//       </Link>
//       <Link>
//         <div className="rounded-lg bg-green-500 pt-10 pb-10">
//           <p className="text-black font-TiroTamil text-2xl font-normal  leading-normal text-center">
//             Driver
//           </p>
//         </div>
//       </Link>
//     </>
//   );
// };

// export default Landingpage;
import React from "react";
import "./LandingPage.css"; // Make sure to import your CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome to Your Transport App</h1>
        <p>Your reliable solution for all your transportation needs.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
