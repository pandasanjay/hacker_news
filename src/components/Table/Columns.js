import React, { memo } from 'react'

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

export default memo(Columns)
