export function updateVoteByFromLocalStorage(state) {
    const stories = state.story
    if (stories) {
        Object.keys(stories.byIds).forEach((id) => {
            let voteCount = 0
            if ('localStorage' in window) {
                voteCount = localStorage.getItem(id)
            }
            //For backward compatible need to remove after some release
            console.log(typeof voteCount === 'boolean')
            if (voteCount === 'true') {
                voteCount = 1
            }
            if (voteCount) {
                stories.byIds[id] = {
                    ...stories.byIds[id],
                    ...incrementVote(stories.byIds[id], Number(voteCount)),
                }
            }
        })
    }
}
function incrementVote(data, voteCount) {
    return { isVoted: true, points: (data.points += voteCount) }
}

export function updateVote({ payload }) {
    if ('localStorage' in window) {
        let pointForTheStory = localStorage.getItem(payload.id) || 0

        if (pointForTheStory) {
            //For backward compatible need to remove after some release
            if (pointForTheStory === 'true') {
                pointForTheStory = 1
            }
            ++pointForTheStory
        }
        localStorage.setItem(payload.id, pointForTheStory)
    }
}
