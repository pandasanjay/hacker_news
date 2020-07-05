import React, { memo } from 'react'
import PropTypes from 'prop-types'
const Columns = ({ tr, header }) => {
    const getValues = (tr, td) => {
        const trValue = tr[td.key]
        const RenderTd = td.RenderTd
        if (RenderTd) {
            return <RenderTd data={tr} />
        }
        return `${trValue}`
    }
    return (
        <>
            {header.map((td) => (
                <td key={`${td.key}_${tr.objectID}_${tr.points}`}>
                    {getValues(tr, td)}
                </td>
            ))}
        </>
    )
}
Columns.propTypes = {
    tr: PropTypes.object,
    header: PropTypes.array,
}
export default memo(Columns)
