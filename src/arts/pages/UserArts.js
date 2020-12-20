import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ArtList from '../components/ArtList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserArts = () => {
  const [loadedArts, setLoadedArts] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const reponseData = await sendRequest(`http://localhost:5000/api/arts/user/${userId}`);
        setLoadedArts(reponseData.arts);
      }
      catch(err) {}
    }
    fetchArts();
  }, [sendRequest, userId]);

  const artDeletedHandler = deletedArtId => {
    setLoadedArts(prevArts => 
      prevArts.filter(art => art.id !== deletedArtId)
    );
  };

  return (
  <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && (
      <div className="center">
        <LoadingSpinner />
      </div>
    )}
    {!isLoading && loadedArts && <ArtList items={loadedArts} onDeleteArt={artDeletedHandler}/>}
  </React.Fragment>
  );
};

export default UserArts;