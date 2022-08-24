import React from 'react';
const Header = () => {
  return (
    <div>
      <img src="https://velog.velcdn.com/images/danchoi/profile/56f31c7c-29d1-4496-bc0c-6f084d8c2fcb/image.png" alt="logo"  style={{width: "175px"}}/>
      <img src="https://dan-studio.github.io/assets/logo.ico/android-chrome-192x192.png" alt="logo"  style={{width: "175px"}}/>
      <h1>TodoList by Dan-Studio!</h1>
    </div>
  );
};
const layout = () => {
  return (
    <div>
      <Header/>
    </div>
  );
};

const Form = () => {
  return (
    <div>
      <input></input>
    </div>
  );
};
const Todo = () => {
  return (
    <div>
      
    </div>
  );
};
const Detail = () => {
  return (
    <div>
      
    </div>
  );
};
export default layout;