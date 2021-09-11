import BookmarkBtn from './BookmarkBtn';

function App() {
  return (
    <div className="container">
      <h1 className="display-1 text-center">Hasty Link</h1>

      <div className="text-center mt-5">
        <p>Drag the blue button onto your bookmarks bar.</p>
      </div>
      <BookmarkBtn />

      <div className="App"></div>
    </div>
  );
}

export default App;
