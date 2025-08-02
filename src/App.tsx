import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <>
      {/* <div className="grid border-2 border-red">
        <div className="col-12 md:col-6">Column 1</div>
        <div className="col-12 md:col-6">Column 2</div>
        <div className="col-12 sm:col-5 border-2 border-red-500">Column 3</div>
        <div className="col-12 sm:col-3">Column 4</div>
      </div> */}

      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-auto px-4 py-6 mt-3 mb-3 z-0">
          {/* Scrollable Content */}
          <div>
            <h1>Welcome to Retail Dashboard</h1>
            {[...Array(50)].map((_, i) => (
              <p key={i}>Line {i + 1}</p>
            ))}
            {/* Add more content or components as needed */}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
