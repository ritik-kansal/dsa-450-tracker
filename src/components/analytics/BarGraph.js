import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2';


export default class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow',
                    'Green',
                    'Purple',
                    'Orange'
                ],
                datasets: [
                    {

                        data: [
                            12,
                            20,
                            3,
                            5,
                            2,
                            3
                        ],
                        backgroundColor: [
                            'rgba(245,132,70,0.5)',
                            'rgba(245,132,70,0.5)',
                            'rgba(245,132,70,0.5)',
                            'rgba(245,132,70,0.5)',
                            'rgba(245,132,70,0.5)',
                            'rgba(245,132,70,0.5)'
                        ],
                        borderColor: [
                            'rgba(245,132,70,1)',
                            'rgba(245,132,70,1)',
                            'rgba(245,132,70,1)',
                            'rgba(245,132,70,1)',
                            'rgba(245,132,70,1)',
                            'rgba(245,132,70,1)'
                        ],
                        borderWidth: 1
                    }
                ]
            }

        }
    }
    render() {
        return (
            <div class="pl-16 pr-16 bg-secondary-black br-5">
                <Bar data={
                        this.state.chartData
                    }
                    options={
                        {
                            plugins: {
                                legend: false
                            },
                            scales: {
                                xAxis: {
                                    grid: {
                                        color: '#1D1C1F'
                                    }
                                },
                                yAxis: {
                                    suggestedMax: 10,
                                    grid: {
                                        color: '#1D1C1F'
                                    }
                                }

                            }
                        }
                    }/>
            </div>
        )
    }
}
