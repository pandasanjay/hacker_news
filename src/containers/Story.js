import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchStoryList } from '../store/sagas/getStorySaga'
import actions from '../store/combine-actions'
import Table from '../components/Table/Table'
import { header } from './NewsDetailsTable/TableHeaderDetails'
import NavigationButton from '../components/NavigationButton'
import Separator from '../components/Separator'
import LineChart from './LineChart'
import { normalizeStory } from '../store/reducers/storyReducer'
import { chartSelector, getStoriesByArraySelector } from '../store/selector'
const mapStateToProps = (state) => ({
    stories: getStoriesByArraySelector(state),
    page: state.story && state.story.page,
    nbPages: state.story && state.story.nbPages,
    chartDetails: chartSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
})

const Story = (props) => {
    const {
        match: {
            params: { id = 0 },
        },
        stories,
        page,
        nbPages,
        chartDetails: { labels, data },
    } = props

    useEffect(() => {
        //This check is here to prevent from loading twice
        if ((!stories.length && nbPages > Number(id)) || page != id) {
            props.getHackerNews({ pageNo: id })
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
    chartDetails: PropTypes.object,
    getHackerNews: PropTypes.func,
    setAppState: PropTypes.func,
    stories: PropTypes.array,
    match: PropTypes.object,
    page: PropTypes.number,
    nbPages: PropTypes.number,
}
//loadData function is for loading data from ssr
export const loadData = async function (store, { params: { id } }) {
    const data = await fetchStoryList({ pageNo: id })
    return store.dispatch(
        actions.setHackerNews(normalizeStory(data.getStories))
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)
