import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import cssVar from '../styles/var.scss'
const LineChart = ({ labels, data }) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: '',
                fill: false,
                lineTension: 0,
                borderColor: cssVar.chartBorder,
                borderCapStyle: 'square',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: cssVar.chartBorder,
                pointBackgroundColor: cssVar.chartBorder,
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: cssVar.chartBorder,
                pointHoverBorderColor: cssVar.chartBorder,
                pointHoverBorderWidth: 5,
                pointRadius: 1,
                pointHitRadius: 0,
                data,
            },
        ],
    }
    const options = {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
            },
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                        color: 'black',
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'ID',
                        fontColor: 'black',
                        fontSize: '20',
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        stepSize: Math.max(...data) / 3,
                    },
                    gridLines: {
                        color: cssVar.secondary5,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Votes',
                        fontColor: 'black',
                        fontSize: '20',
                    },
                },
            ],
        },
    }
    return (
        <div>
            <Line data={chartData} height={250} options={options} />
        </div>
    )
}
LineChart.propTypes = {
    labels: PropTypes.array,
    data: PropTypes.array,
}

export default LineChart
