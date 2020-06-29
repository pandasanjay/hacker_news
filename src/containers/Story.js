import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropsType from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchStoryList } from '../store/sagas/getStorySaga'
import actions from '../store/combine-actions'
import Table from '../components/Table/Table'
import { header } from './NewsDetailsTable/TableHeaderDetails'
import LineChart from './LineChart'
import { chartSelector } from '../store/selector'
const mapStateToProps = (state) => ({
    state,
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
        state: {
            appState: { stories },
        },
        chartDetails: { labels, data },
    } = props
    const { hits = [], page, nbPages } = stories
    useEffect(() => {
        if ((!hits.length && nbPages > Number(id)) || page != id) {
            props.getHackerNews({ pageNo: id })
        }
    }, [hits, id, page])

    return (
        <>
            <Table header={header} rows={hits} />
            <div className="hn_page_navigation">
                {page ? (
                    <>
                        <Link to={`/${page - 1}`}>Previous</Link>
                    </>
                ) : null}
                {` | `}
                {nbPages - 1 > page ? (
                    <Link to={`/${page + 1}`}>Next</Link>
                ) : null}
            </div>
            <hr className="hn_separator"/>
            <LineChart labels={labels} data={data} />
            <hr className="hn_separator"/>
        </>
    )
}

Story.propTypes = {
    getHackerNews: PropsType.func,
    setAppState: PropsType.func,
    state: PropsType.object,
    match: PropsType.object,
}
export const loadData = async function (store, { params: { id } }) {
    const data = await fetchStoryList({ pageNo: id })
    return store.dispatch(actions.setHackerNews(data))
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)
