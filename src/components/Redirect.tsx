import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../config/config';

const Redirect = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = db.collection('urls').where('slug', '==', slug);

    const unsubscribe = query.onSnapshot(
      (snapshot) => {
        if (snapshot.size > 0) {
          const doc = snapshot.docs[0];
          const data = doc.data();
          window.location.href = data.url;
        } else {
          // Handle the case when the slug doesn't exist
          // For example, display an error message or redirect to a custom page
        }
        setLoading(false);
      },
      (error) => {
        // Handle any errors that occur during the query
        console.error('Error fetching URL:', error);
        setLoading(false);
      }
    );

    // Cleanup function to unsubscribe from the snapshot listener
    return () => {
      unsubscribe();
    };
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return null;
};

export default Redirect;
