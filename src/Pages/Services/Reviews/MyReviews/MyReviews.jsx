import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import "./MyReviews.css";
import SingleReview from "./SingleReview/SingleReview";

const MyReviews = () => {
  // My Reviews State
  const [myReviews, setMyReviews] = useState([]);

  // Get User using useContext
  const { user, logOut } = useContext(AuthContext);

  // Get Specific user review
  useEffect(() => {
    fetch(
      `https://mix-photography-server.vercel.app/my-reviews?user_email=${user?.email}`, {
        headers : {
          authorization : `Bearer ${localStorage.getItem("photography-token")}`
        }
      })
      .then((res) => {

        if(res.status === 401 || res.status === 403){
          return logOut()
        }

        return res.json()
      })
      .then((data) => setMyReviews(data))
      .catch((error) => console.error(error));
  }, [user?.email, myReviews, logOut]);

  // Detele Function
  const handleDelete = (id) => {
    fetch(`https://mix-photography-server.vercel.app/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          swal("Good job!", "Review Deleted Successfully", "success");
          const remaining = myReviews.filter((rvw) => rvw._id !== id);
          setMyReviews(remaining);
        }
      });
  };

  return (
    <>
      <Helmet>
        <title> Photography - My Reviews</title>
      </Helmet>
      <div className="my-reviews">
        <h3>My Reviews</h3>
        {myReviews.length === 0 ? (
          <h6>No Data Found</h6>
        ) : (
          <div>
            {myReviews.map((myReview) => (
              <SingleReview
                key={myReview._id}
                review={myReview}
                handleDelete={handleDelete}
              ></SingleReview>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyReviews;
