import React from "react";
import Post from "./Post";
import Review from "../../components/Review";
import Story from "./Story";

const Download = () => {
    return (
        <>
            <Post />
            <Review className="section-bg" />
            <Story />
        </>
    );
};

export default Download;
