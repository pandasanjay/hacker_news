import { buildSchema } from 'graphql'
import debug from 'debug'
import axios from 'axios'
import { HITS_PER_PAGE } from '../../constants'
const log = debug('HN:server:gqlSchema')
export const schema = buildSchema(`
  type Story {
    objectID: String!
    created_at: String!
    title: String!
    author: String!
    url: String
    points: Int
    num_comments: Int
  }
  type Hits {
      hits:  [Story!]!
      page: Int!
      nbPages: Int!
      hitsPerPage: Int!

  }
  type Query {
    getStories(pageNo: Int, hitsPerPage: Int): Hits
  }
`)
class Hits {
    constructor(pageNo, hitsPerPage = HITS_PER_PAGE) {
        this.data = axios
            .get('https://hn.algolia.com/api/v1/search_by_date?tags=story', {
                params: {
                    page: pageNo,
                    hitsPerPage,
                },
            })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                log('%o', error)
            })
    }

    hits() {
        return this.data.then((data) => data.hits)
    }
    page() {
        return this.data.then((data) => data.page)
    }
    nbPages() {
        return this.data.then((data) => data.nbPages)
    }
    hitsPerPage() {
        return this.data.then((data) => data.hitsPerPage)
    }
}
export const root = {
    getStories: ({ pageNo, hitsPerPage }) => new Hits(pageNo, hitsPerPage),
}
