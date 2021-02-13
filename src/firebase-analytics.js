// activate analytics on client side
export default async function firebaseAnalytics() {
  if (typeof window !== 'undefined') {
    const firebase = await import('./firebase');
    await import('firebase/analytics');
    firebase.default.analytics();
  }
}
