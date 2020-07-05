import React, { memo } from 'react'
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

export default memo(Rows)
