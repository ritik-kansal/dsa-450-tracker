import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

class QuestionsSolved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // chartData: props.chartData
            chartData: {
                datasets: [
                    {
                        label: 'My First Dataset',
                        // data: props.chartData,
                        data: [],
                        backgroundColor: [
                            'rgba(82, 196, 26, 1)', 'rgba(245, 132, 70, 1)', 'rgba(245, 34, 45, 1)', 'rgba(245, 34, 45, 0)',
                        ],
                        hoverOffset: 4,
                    }
                ]
            }

        }
    }

    componentDidMount() {
        var newChartData = this.state.chartData
        newChartData.datasets[0].data = this.props.chartData
        this.setState({
            chartData: newChartData
        });
        console.log("test", this.state.chartData)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.question_chart_update
    }

    render() {
        return (
            <div onLoad={window.loadQuestionSolved} className="bg-secondary-black gray p-16 br-5">
                <div className="filter-heading f-16 fw-500 secondary-gray mb-16">
                    Questions
                </div>
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="questions-pie f-12 position-relative">
                            <Doughnut data={this.state.chartData} options={{
                                cutout: "80%",
                                offset: 5,
                                borderWidth: 0,
                                plugins: {
                                    legend: {
                                        display: false
                                    }
                                }
                            }} />
                            <div className="number gray text-center">
                                <span className="f-32" style={{ borderBottom: "1px solid #565656" }}>308</span>
                                <br />
                                <span className="f-16">450</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 legend pl-16">
                        <div>
                            <span className="green float-start">Easy</span><span className="value ms-auto float-end">{this.props.chartData[0]}</span>
                        </div>
                        <div>
                            <span className="orange float-start">Medium</span><span className="value ms-auto float-end">{this.props.chartData[1]}</span>
                        </div>
                        <div>
                            <span className="red float-start">Hard</span><span className="value ms-auto float-end">{this.props.chartData[2]}</span>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default QuestionsSolved;