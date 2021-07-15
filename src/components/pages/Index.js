import React, {Component} from 'react'
import Header from "../Header";
import FilterBox from '../FilterBox';
import Question from '../Question';
import QuestionsSolved from '../analytics/QuestionsSolved';
import Chart from '../Chart';


export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "http://127.0.0.1:8000/api/get_question/1",
        }
        
    }

    componentDidMount(){
        var data = JSON.stringify({
            
        });
        console.log(this.props.apiCall(data,"get",this.state.url))
    }

    render() {
        return (
            <>
                <Header loggedIn={true}/>
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
        )
    }
}
