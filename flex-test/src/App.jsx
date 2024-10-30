import {HomeHeader} from './components/HomeHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import JobSite from './components/jobsite/JobSite';
import { useState } from 'react';
import { categories, jobData } from './helper/Data';

function App() {
  const [dataSource, setDataSource] = useState(jobData);
  const [allCategories, setAllCategories] = useState(categories)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeHeader dataSource={dataSource} setDataSource={setDataSource}/>} />
          <Route path="/jobsite" element={<JobSite dataSource={dataSource} allCategories={allCategories} setAllCategories={setAllCategories}/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
