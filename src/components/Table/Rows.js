import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Columns from './Columns'

const Rows = ({ rows, header }) => {
    return (
        <>
            {rows.map((tr) => {
                return (
                    !tr.isHidden && (
                        <tr key={tr.objectID}>
                            {' '}
                            <Columns header={header} tr={tr} />
                        </tr>
                    )
                )
            })}
        </>
    )
}
Rows.propTypes = {
    rows: PropTypes.array,
    header: PropTypes.array,
}
export default memo(Rows)
