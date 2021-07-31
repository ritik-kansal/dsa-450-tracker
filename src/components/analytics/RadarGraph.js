import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2'

export default class RadarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    "Mon",
                    "Tue",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
                ],
                datasets: [
                    {
                        // label: 'My First dataset',
                        // backgroundColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: "rgba(245,132,70,0.5)",
                        borderColor: 'rgba(245,132,70,1)',
                        borderWidth: 1,
                        data: this.props.chartData
                    }
                ]
            }

        }
    }

    componentDidMount(){
        console.log(this.props.chartData)
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
