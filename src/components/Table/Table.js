import React from 'react'
import PropTypes from 'prop-types'
import Rows from './Rows'
import './Table.scss'

const Table = ({ header, rows = [] }) => {
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
                        <td colSpan={header.length}>No data available!</td>{' '}
                    </tr>
                )}
                <Rows header={header} rows={rows} />
            </tbody>
        </table>
    )
}
Table.propTypes = {
    header: PropTypes.array,
    rows: PropTypes.array,
}
export default Table
