import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = ({ labels, data }) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: '',
                fill: false,
                lineTension: 0,
                borderColor: '#104875',
                borderCapStyle: 'square',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#104875',
                pointBackgroundColor: '#104875',
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#104875',
                pointHoverBorderColor: '#104875',
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
                        color: '#B4B3AE',
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

export default LineChart
