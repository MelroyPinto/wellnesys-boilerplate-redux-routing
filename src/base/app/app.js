import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "src/components/Header/header";
import Contact from "src/pages/ContactPage";
import ErrorPage from "src/pages/ErrorPage";
import HomePage from "src/pages/HomePage";

const App = (initProps) => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  const props = { ...initProps, location, navigate, params };

  return (
    <>
      <Header />
      <section className="lg:w-4/5 lg:m-auto p-6 lg:px-8">
        <Switch>
          <Route path="/" exact element={<HomePage {...props} />} />
          <Route path="/contact" exact element={<Contact {...props} />} />
          <Route path="/404" exact element={<ErrorPage {...props} />} />
          <Route path="*" exact element={<Navigate to="/404" />} />
        </Switch>
      </section>
    </>
  );
};

export default App;
