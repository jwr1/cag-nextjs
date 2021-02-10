// activate analytics if in browser
export default async function firebaseAnalytics() {
  if (typeof window !== 'undefined') {
    console.log(document);
    const firebase = await import('./firebase');
    await import('firebase/analytics');
    firebase.default.analytics();
  }
}
