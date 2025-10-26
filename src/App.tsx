import { HashRouter, Route, Routes } from "react-router-dom";
import GenderByName from "./components/GenderByName/GenderByName";
import RandomJoke from "./components/RandomJoke/RandomJoke";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout";
import { ROUTES } from "./constants/routes";
import Cohort68 from "./pages/Cohort68/Cohort68";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import AccountLayout from "./layouts/AccountLayout/AccountLayout";
import SettingsAccount from "./pages/SettingsAccount/SettingsAccount";
import InfoUsers from "./pages/InfoUsers/InfoUsers";
import AccountHome from "./pages/AccountHome/AccountHome";
import Country from "./components/Country/Country";
import ProductsList from "./components/ProductList/ProductList";
import ProductPage from "./pages/ProductPage/ProductPage";
import UserList from "./components/UsersList/UsersList";
import UserPage from "./pages/UserPage/UserPage";
import Parent from "./components/Parent/Parent";
import SigninPage from "./components/SignPage/SignPage";
import Categories from "./components/Categories/Categories";
import CreateCategories from "./components/CreateCategories/CreateCategories";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.GENDER_REVEAL} element={<GenderByName />} />
            <Route path={ROUTES.SPACE_MISSION} element={<SpaceMissionForm />} />
            <Route path={ROUTES.RANDOM_JOKE} element={<RandomJoke />} />
            <Route path={ROUTES.COHORT_68} element={<Cohort68 />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.PRODUCTS} element={<ProductsList />} />
            <Route path={ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
            <Route path={ROUTES.USER_INFO} element={<UserList />} />
            <Route path={ROUTES.USER_PAGE} element={<UserPage />} />

            <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
              <Route index element={<AccountHome />} />
              <Route
                path={ROUTES.SETTINGS_ACCOUNT}
                element={<SettingsAccount />}
              />
              <Route path={ROUTES.INFO_USERS} element={<InfoUsers />} />
            </Route>

            <Route path="*" element={<NotFound />} />
            <Route path={ROUTES.COUNTRY} element={<Country />} />
            <Route path={ROUTES.PARENT} element={<Parent />} />
            <Route path={ROUTES.SIGN_IN} element={<SigninPage />} />
            <Route path={ROUTES.CATEGORIES} element={<Categories />} />
            <Route path={ROUTES.CREATE_CATEGORIES} element={<CreateCategories />} />



          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
