import React from "react";
import Footer from "../../components/Footer/Footer"
import useProtectedPage from "../../hooks/useProtectedPage";

const GetProfilePage = () => {
  useProtectedPage();
  return (
    <div>
      <h1>GetProfilePage</h1>
      <Footer />
    </div>
  );
};
export default GetProfilePage;
