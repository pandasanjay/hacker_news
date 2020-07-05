import React from "react"

const ShowInMobile = ({ num_comments, points }) => {
    return (
        <div className="nb_display_mobile">
            <span>
                <b>Comments:</b> {num_comments}
            </span>
            {` | `}
            <span>
                <b>Votes:</b> {points}
            </span>
        </div>
    )
}

export default ShowInMobile