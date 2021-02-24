import React from 'react';
import { useUser } from '../lib/useUser';
import SignIn from './SignIn';

export default function PleaseSignIn({ children }) {
  const me = useUser();
  if (!me) return <SignIn />;
  return children;
}
