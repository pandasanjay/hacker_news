import { put, call } from 'redux-saga/effects'
import { getStoriesFromApi, fetchStoryList } from './getStorySaga'
import actions from '../combine-actions'
import { normalizeStory } from '../reducers/storyReducer'

describe('getStorySaga', () => {
    it('should run getStoriesFromApi ', () => {
        const action = {
            payload: {},
        }
        const gen = getStoriesFromApi(action)
        let actualValue = gen.next().value
        let expected = call(fetchStoryList, action.payload)
        expect(actualValue).toEqual(expected)
        const stubData = {
            getStories: {
                hits: [],
            },
        }
        actualValue = gen.next(stubData).value
        expected = put(
            actions.setHackerNews(normalizeStory(stubData.getStories))
        )
        expect(actualValue).toEqual(expected)
    })
})
