import Footer from "./components/Footer.jsx";
import Notes from "./components/Notes.jsx";
import Table from "./components/Table.jsx";
import ClientDetails from "./components/ClientDetails.jsx";
import Dates from "./components/Dates.jsx";
import MainDetails from "./components/MainDetails.jsx";
import Header from "./components/Header.jsx";

function App() {

  

  return (
    <>
      <main className="m-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow p-5">
        <ClientDetails />
        <Header />
        <MainDetails />
        <Dates />
        <Table />
        <Notes />
        <Footer />
      </main>
    </>
  );
}

export default App;
