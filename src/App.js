import logo from './logo.svg';
import './App.css';
import './css/Main.css';
import Header from "./components/Header";
import FilterBox from './components/FilterBox';
import Question from './components/Question';
import QuestionsSolved from './components/analytics/QuestionsSolved';

function App() {
    return (
        <>
            <Header />
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
                        <FilterBox />
                        <QuestionsSolved data="sfd" options="sda" />
                    </div>
                    <div className="col-9 pl-16 pr-0">
                        <Question />
                        <Question />
                        <Question />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
