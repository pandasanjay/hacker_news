import moment from 'moment'
export const getHostName = (url = '') => {
    var urlParts = (url || '')
        .replace('http://', '')
        .replace('https://', '')
        .split(/[/?#]/)
    return urlParts[0]
}
export const getRelativeTime = (timestamp) => {
    return moment(timestamp).fromNow()
}
