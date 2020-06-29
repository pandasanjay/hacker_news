export function updateVoteByFromLocalStorage(state) {
    const stories = state.story
    if (stories) {
        Object.keys(stories.byIds).forEach((id) => {
            let isVoted = false
            if ('localStorage' in window) {
                isVoted = localStorage.getItem(id)
            }
            if (isVoted) {
                stories.byIds[id] = {
                    ...stories.byIds[id],
                    ...incrementVote(stories.byIds[id]),
                }
            }
        })
    }
}
function incrementVote(data) {
    return { isVoted: true, points: (data.points += 1) }
}

export function updateVote({ payload }) {
    if ('localStorage' in window) {
        localStorage.setItem(payload.id, true)
    }
}
