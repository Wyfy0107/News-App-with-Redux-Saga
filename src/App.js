import React from "react";
import "./CSS/App.css";
import { getNews } from "./Redux/ActionTypes";
import { connect } from "react-redux";
import NewsCard from "./Containers/NewsCard";

function App({ getNews, loading, news, message }) {
  let newsCards = null;

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={getNews}>Get News</button>
      {loading && <div>Loading...</div>}
      <div>{message}</div>
      <div
        style={{ display: "flex", flexFlow: "row wrap", textAlign: "center" }}
      >
        {news
          ? (newsCards = news.map((value) => {
              return <NewsCard news={value} />;
            }))
          : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    message: state.message,
    news: state.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => dispatch(getNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
