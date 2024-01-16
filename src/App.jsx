import ListBook from "./components/BookFinder/ListBook";
import Footer from "./components/HeaderFooter/Footer";
import Navbar from "./components/HeaderFooter/Navbar";
function App() {
  return (
    <>
      <div className="bg-[#eae6d7]">
        <Navbar></Navbar>
        <ListBook></ListBook>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
