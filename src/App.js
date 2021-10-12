import './App.css';
import AverageRating from './components/AverageRating';
import Reviews from './components/Reviews';
import SentimentAnalysis from './components/SentimentAnalysis';
import Sidebar from './components/Sidebar';
import WebsitVisitors from './components/WebsiteVisitors';
import "./styles.css"


function App() {
  return (
    <div className="dashboard">
    < Sidebar />
    < Reviews />
    < AverageRating />
    < SentimentAnalysis />
    < WebsitVisitors />
    </div>
  );
};



export default App;
