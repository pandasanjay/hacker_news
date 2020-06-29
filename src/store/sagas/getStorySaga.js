import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import actions from '../combine-actions'
import { GQL_API_DOMAIN } from '../../constants'
import { normalizeStory } from '../reducers/storyReducer'
export function fetchStoryList(payload) {
    const { hitsPerPage, pageNo } = payload
    var query = `query hackerNews ($pageNo: Int, $hitsPerPage: Int){
        getStories(pageNo:$pageNo, hitsPerPage: $hitsPerPage) {
          hits {
            objectID
            created_at
            title
            author
            url
            points
            num_comments
          }
          page
          nbPages
          hitsPerPage
        }
      }`
    return axios
        .post(`${GQL_API_DOMAIN}/graphql`, {
            query,
            variables: { hitsPerPage, pageNo: Number(pageNo) },
        })
        .then((res) => res.data.data)
        .catch((error) => {
            new Error(error.msg)
        })
}

export function* getStoriesFromApi(action) {
    try {
        const data = yield call(fetchStoryList, action.payload)
        yield put(actions.setHackerNews(normalizeStory(data.getStories)))
    } catch (error) {
        yield put(
            actions.setError({
                isError: true,
                msg: error,
            })
        )
    }
}
