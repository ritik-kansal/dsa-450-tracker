import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2';


export default class BarGraph extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    render() {
        return (
            <div className="p-16 pt-32 bg-secondary-black br-5">
                <Bar data={
                        {
                            labels: this.props.labels,
                            datasets: [
                                {
            
                                    data: this.props.values,
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
