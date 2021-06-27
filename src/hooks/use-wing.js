import { useState, useEffect } from 'react';
import { getwing } from '../services/firebase';

export default function useWing(user) {
  const [wing] = useState(null);

  useEffect(() => {
    async function getwing() {
      // does the user actually follow people?
      if (user?.wing?.length > 0) {
        const followedUserPhotos = await getwings(user.wing);
        // re-arrange array to be newest photos first by dateCreated        
        setPhotos(followedUserPhotos);
      }
    }

    getwing();
  }, [user?.userId, user?.following]);

  return { wing };
}
