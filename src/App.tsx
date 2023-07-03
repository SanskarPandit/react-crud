import ContactCreate from "./ContactCreate";
import ContactEdit from "./ContactEdit";
import ContactListing from "./ContactLisitng";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactListing />}></Route>
          <Route path="/create" element={<ContactCreate />}></Route>
          <Route path="/edit/:userId" element={<ContactEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
