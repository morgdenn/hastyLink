import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <a
          className="App-link"
          href="javascript:!function(){var e='';window.getSelection&&(e=window.getSelection().toString()),0===e.length&&document.getElementsByName('description')[0]&&(e=document.getElementsByName('description')[0].getAttribute('content'));var n=document.title.replace('«',' ').replace(/(\xbb|\xa0|\0|\n|\f|\r|\t|\v)/gim,' ');window.open('mailto:?subject='+encodeURIComponent(n)+'&body='+encodeURIComponent(e)+escape('\r\n')+encodeURIComponent(location.href),'_blank')}();"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hasty Link
        </a>
      </header>
    </div>
  );
}

export default App;
