
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pagination from './components/Pagination';
import Repositories from './components/Repositories';
import ErrorBoundary from './components/ErrorBoundary';
import NotFoundPage from './components/NotFoundPage';
import RepoDetails from './components/RepoDetails';
import ReposList from './components/ReposList';

function App() {
  return (
    
    <Router>
      <div className='bg-gray-100 min-h-screen p-4'>
        <h1 className='text-3xl font-bold mb-4'>GitHub Repositories</h1>
      <ErrorBoundary>
    <Routes>
    <Route exact path="/" element={<ReposList />} />
          <Route exact path="/repo/:repoName" element={<RepoDetails />} />
          <Route element={<NotFoundPage />} />
          <Route element={<Pagination />} />

        </Routes>
      </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
