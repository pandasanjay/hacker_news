import { createSelector } from 'reselect'
import { getStoriesAsArray } from './utils'
export const chartSelector = createSelector(getStoriesAsArray, (stories = []) =>
    stories.reduce(
        (init, story) => {
            if (!story.isHidden) {
                init.labels.push(story.objectID)
                init.data.push(story.points)
            }
            return init
        },
        {
            labels: [],
            data: [],
        }
    )
)

export const getStoriesByArraySelector = createSelector(
    getStoriesAsArray,
    (stories) => stories
)
