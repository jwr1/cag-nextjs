import { useEffect, useState } from 'react';
import firebase from 'firebase';

export default function FunFact() {
  const [funFact, setFunFact] = useState('Over 70 nations Represented');

  useEffect(() => {
    firebase
      .firestore()
      .collection('website-fun-facts')
      .doc('facts')
      .get()
      .then(doc => {
        const facts = doc.data().facts;
        setFunFact(facts[Math.floor(Math.random() * facts.length)]);
      });
  }, []);

  return (
    <h3>
      Local Church &bull; Global Outreach <br />
      <span style={{ color: 'rgb(112, 132, 153)' }}>{funFact}</span>
    </h3>
  );
}
