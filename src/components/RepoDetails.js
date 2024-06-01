import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



function RepoDetails() {
  const { repoName, repoDescription } = useParams();

  return (
    <div>
      <h2 className='text-xl font-semibold mb-2'>
        Repository Details
      </h2>
      <p>
        Showing details for repository: {repoName}
      </p>
      <h3>{repoDescription}</h3>

    </div>
  );

  }



  export default RepoDetails;



 