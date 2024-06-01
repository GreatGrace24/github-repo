// Repositories.js

import React from 'react';

const Repositories = ({ repositories }) => {
  return (
    <div className="space-y-4">
      {repositories.map((repo) => (
        <div key={repo.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{repo.name}</h2>
          <p className="text-gray-600">{repo.description}</p>
          {/* Add other relevant information about the repository */}
        </div>
      ))}
    </div>
  );
};

export default Repositories;
