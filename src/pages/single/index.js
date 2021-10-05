import React from "react";
import ActiveMovie from "../../components/ActiveMovie/";
import { useParams } from "react-router";
import useDispatcher from "../../helpers/dispatch";
import { getMediaInfo } from "../../redux/actions/movieActions";
import { useSelector } from "react-redux";
import BigInfo from "../../components/BigInfo";
const AboutMovie = () => {
  const params = useParams();
  useDispatcher(getMediaInfo, `${params.movie}/${params.id}`, true, true);
  const mediaInfo = useSelector((state) => state.movies.mediaInfo);
  return <BigInfo data={mediaInfo} />;
};

export default AboutMovie;
