import { Home } from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import JobSite from './Pages/JobSite/JobSite';
import { useState } from 'react';
import { categories, jobData } from './helper/Data';

function App() {
  const [dataSource, setDataSource] = useState(jobData);
  const [allCategories, setAllCategories] = useState(categories)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home dataSource={dataSource} setDataSource={setDataSource}/>} />
          <Route path="/jobsite" element={<JobSite dataSource={dataSource} allCategories={allCategories} setAllCategories={setAllCategories}/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
