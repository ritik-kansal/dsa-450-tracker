import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Main.css';
import Header from "./components/Header";
import FilterBox from './components/FilterBox';
import Question from './components/Question';
import QuestionsSolved from './components/analytics/QuestionsSolved';
import Chart from './components/Chart';

class App extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() { // this.getchartData(); // this should be this.getChartData();
        this.getChartData();
    }

    getChartData() { // Ajax calls here
        this.setState({
            chartData: {
                labels: [
                    'Boston',
                    'Worcester',
                    'Springfield',
                    'Lowell',
                    'Cambridge',
                    'New Bedford'
                ],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }
    render() {
        return (
            <>
                <Header/>
                <div className="container pt-32 pr-16 pl-16">
                    <div className="row pb-32">
                        <div className="col-6 bg-secondary-black gray br-5">
                            <div className="row r-tabs text-center pt-12 pb-12">
                                <div className="col">All Ques</div>
                                <div className="col">All Ques</div>
                                <div className="col">All Ques</div>
                                <div className="col">All Ques</div>
                            </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3 bg-secondary-black gray br-5"></div>
                    </div>
                    <div className="row">
                        <div className="col-3 pl-0 pr-16">
                            <FilterBox/>
                            <QuestionsSolved/>

                        </div>
                        <div className="col-9 pl-16 pr-0">
                            <Question/>
                            <Question/>
                            <Question/>
                        </div>
                    </div>
                </div>
                {/* <Chart chartData={
                        this.state.chartData
                    }
                    location="Massachusetts"
                    legendPosition="bottom"/> */} </>
        );
    }
}

export default App;
