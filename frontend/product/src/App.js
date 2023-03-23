import Registration from "./component/Registration";
import { Routes, Route } from "react-router-dom";
import UpdateRegistration from "./component/updateRegistration";
import ViewRegistration from "./component/viewRegistration";

function App() {
  return (
   <>
<Routes>
  <Route path="/updateregistration" element={<UpdateRegistration />} />
  <Route path="/" element={<ViewRegistration />} />
  <Route path="/registration" element={<Registration />} />
</Routes>
   </>
  );
}

export default App;
