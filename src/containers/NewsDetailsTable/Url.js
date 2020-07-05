import React, { useMemo, memo } from 'react'
import { getHostName } from '../../helpers/helpers'
const Url = ({ url }) => {
    const hostName = useMemo(() => getHostName(url), [url])
    return (
        <span className="hn_url">
            {url && (
                <>
                    {` (`}
                    <a href={url}>
                        <b>{`${hostName}`}</b>
                    </a>
                    {`)`}
                </>
            )}
        </span>
    )
}
export default memo(Url)
