export function updateHideFlagByFromLocalStorage(state) {
    const stories = state.story
    if (stories) {
        Object.keys(stories.byIds).forEach((id) => {
            let isHidden = false
            if ('localStorage' in window) {
                isHidden = localStorage.getItem(`${id}:hide`)
            }
            if (isHidden) {
                stories.byIds[id] = {
                    ...stories.byIds[id],
                    ...setHideStoryFlag(),
                }
            }
        })
    }
}
function setHideStoryFlag() {
    return { isHidden: true }
}

export function hideStory({ payload }) {
    if ('localStorage' in window) {
        localStorage.setItem(`${payload.id}:hide`, true)
    }
}
