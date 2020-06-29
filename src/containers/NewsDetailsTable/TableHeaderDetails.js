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
        RenderTd: VoteCount,
    },
    {
        className: '',
        value: 'UpVote',
        key: 'up_vote',
        RenderTd: UpVote,
    },
    {
        className: '',
        value: 'News Details',
        key: 'news_details',
        RenderTd: NewsDetails,
    },
]
