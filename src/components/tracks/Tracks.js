import React, { useContext } from "react";
import { Context } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "../tracks/Track";
import { Link } from "react-router-dom";

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading, match } = state;

  const refresh = () => {
    window.location.reload(true);
  };

  if (match === false) {
    return (
      <>
        <div class="alert alert-danger" role="alert">
          <h1 className="text-center mb-8">
            {" "}
            Sorry! No matching results found.
          </h1>
        </div>
        <button onClick={refresh} className="btn btn-dark btn-sm mb-4">
          Go Back
        </button>
      </>
    );
  }

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {track_list.map((item) => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </>
    );
  }
};

export default Tracks;
