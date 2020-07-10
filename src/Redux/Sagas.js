import { put, takeLatest, all } from "redux-saga/effects";

function* fetchNews() {
  try {
    const json = yield fetch(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=830fa194518d4388b99a572e0067da29"
    ).then((response) => response.json());
    yield put({
      type: "NEWS_RECEIVED",
      json: json.articles,
    });
  } catch (error) {
    yield put({ type: "REQUEST_FAILED", error });
  }
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
