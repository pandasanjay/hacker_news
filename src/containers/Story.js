import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStoryList } from '../store/sagas/getStorySaga'
import actions from '../store/combine-actions'
import Table from '../components/Table/Table'
import { header } from './NewsDetailsTable/TableHeaderDetails'
import NavigationButton from '../components/NavigationButton'
import Separator from '../components/Separator'
import LineChart from './LineChart'
import { normalizeStory } from '../store/reducers/storyReducer'
import { chartSelector, getStoriesByArraySelector } from '../store/selector'

const Story = (props) => {
    const {
        match: {
            params: { id = 0 },
        },
    } = props
    const stories = useSelector(useMemo(() => getStoriesByArraySelector, []))
    const page = useSelector((state) => state.story && state.story.page)
    const nbPages = useSelector((state) => state.story && state.story.nbPages)
    const { labels, data } = useSelector(useMemo(() => chartSelector, []))
    const dispatch = useDispatch()
    useEffect(() => {
        //This check is here to prevent from loading twice
        if ((!stories.length && nbPages > Number(id)) || page != id) {
            dispatch(actions.getHackerNews({ pageNo: id }))
        }
    }, [stories, id, page])

    return (
        <>
            <div role="heading" aria-level="1">
                <Table header={header} rows={stories} />
                <NavigationButton page={page} nbPages={nbPages} />
            </div>
            <Separator />
            <LineChart labels={labels} data={data} />
            <Separator />
        </>
    )
}

Story.propTypes = {
    match: PropTypes.object,
}
//loadData function is for loading data from ssr
export const loadData = async function (store, { params: { id } }) {
    const data = await fetchStoryList({ pageNo: id })
    return store.dispatch(
        actions.setHackerNews(normalizeStory(data.getStories))
    )
}

export default Story
