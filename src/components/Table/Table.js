import React from 'react'
import PropTypes from 'prop-types'
import './Table.scss'

const Table = ({ header, rows }) => {
    const getValues = (tr, td) => {
        const trValue = tr[td.key]
        if (td.renderTd) {
            return td.renderTd(tr)
        }
        return `${trValue}`
    }
    return (
        <table>
            <thead>
                <tr>
                    {header.map((th) => (
                        <th key={th.key}>{th.value}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {!rows.length && (
                    <tr>
                        <td colspan={header.length}>No data available!</td>{' '}
                    </tr>
                )}
                {rows.map((tr) => {
                    return (
                        !tr.isHidden && (
                            <tr key={tr.objectID}>
                                {header.map((td) => (
                                    <td
                                        key={`${td.key}_${tr.objectID}_${tr.points}`}
                                    >
                                        {getValues(tr, td)}
                                    </td>
                                ))}
                            </tr>
                        )
                    )
                })}
            </tbody>
        </table>
    )
}
Table.propTypes = {
    header: PropTypes.array,
    rows: PropTypes.array,
}
export default Table
