import { createSelector } from 'reselect'
import { getStories } from './utils'
export const chartSelector = createSelector(getStories, (stories) =>
    stories.hits.reduce(
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
