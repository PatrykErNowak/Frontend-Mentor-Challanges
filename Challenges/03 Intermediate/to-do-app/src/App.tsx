function App() {
  const heroStyles =
    "before:content-[''] before:absolute before:top-0 before:left-0 before:h-[200px] before:w-full before:bg-mobile before:bg-no-repeat before:bg-cover";

  return (
    <>
      <div className={`min-h-screen relative bg-app ${heroStyles}`}></div>
    </>
  );
}

export default App;
