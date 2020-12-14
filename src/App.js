import React, { useState, useCallback, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import MainPage from './MainPage';
import { subscribeAuthHandler } from './firebase/auth';
import ShopPage from './ShopPage';

function App() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const checkUser = useCallback(userData => {
    if (!userData) {
      setUser(null);
      return;
    }

    setUser({ name: userData.displayName, id: userData.uid });
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const unsubscribeAuthHandler = subscribeAuthHandler(checkUser);

    return () => {
      unsubscribeAuthHandler();
    }
  }, [checkUser]);

  useEffect(() => {
    if (user === null) setIsOpen(false);
    else setIsOpen(true);
  }, [user]);

  return (
    <div>
      <NavigationBar />
      <MainPage />
      <ShopPage isOpen={isOpen} handleClose={handleClose} user={user} />
    </div>
  );
}

export default App;
