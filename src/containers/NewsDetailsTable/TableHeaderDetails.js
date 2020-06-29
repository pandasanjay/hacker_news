import React from 'react'
import VoteCount from './VoteCount'
import UpVote from './UpVote'
import NewsDetails from './NewsDetails'
import './NewsDetailsTable.scss'
export const header = [
    {
        className: '',
        value: 'Comments',
        key: 'num_comments',
    },
    {
        className: '',
        value: 'Vote Count',
        key: 'points',
        renderTd: VoteCount,
    },
    {
        className: '',
        value: 'UpVote',
        key: 'up_vote',
        renderTd: (data) => <UpVote data={{ ...data }} />,
    },
    {
        className: '',
        value: 'News Details',
        key: 'news_details',
        renderTd: (data) => <NewsDetails data={data} />,
    },
]
