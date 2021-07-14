import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2'

export default class RadarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    "English",
                    "Maths",
                    "Physics",
                    "Chemistry",
                    "Biology",
                    "History"
                ],
                datasets: [
                    {
                        label: 'My First dataset',
                        // backgroundColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: "rgba(245,132,70,0.5)",
                        borderColor: 'rgba(245,132,70,1)',
                        borderWidth: 1,
                        data: [
                            40,
                            20,
                            30,
                            40,
                            50,
                            50

                        ]
                    }
                ]
            }

        }
    }
    render() {
        return (
            <Radar data={this.state.chartData} options={{
                plugins: {
                    legend: false
                },
                scales: {
                    r: {
                        suggestedMin: 0,
                        grid: {
                            color: '#565656'
                        },
                        pointLabels: {
                            color: '#565656'
                        },
                        ticks: {
                            beginAtZero: true,
                            color: '#565656',
                            backdropColor: 'rgba(0,0,0,0)'
                        }
                    }
                }
            }} />
        )
    }
}
