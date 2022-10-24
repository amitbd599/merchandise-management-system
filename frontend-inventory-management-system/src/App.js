import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./Helper/SessionHelper";
import CustomerCreateUpdatePage from "./Pages/Customer/CustomerCreateUpdatePage";
import CustomerListPage from "./Pages/Customer/CustomerListPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import SupplierCreateUpdatePage from "./Pages/Supplier/SupplierCreateUpdatePage";
import SupplierListPage from "./Pages/Supplier/SupplierListPage";
import CreatePasswordPage from "./Pages/User/CreatePasswordPage";
import LoginPage from "./Pages/User/LoginPage";
import RegistrationPage from "./Pages/User/RegistrationPage";
import SendOTPPage from "./Pages/User/SendOTPPage";
import VerifyOTPPage from "./Pages/User/VerifyOTPPage";
function App() {
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route
              exact
              path="/CustomerCreateUpdate"
              element={<CustomerCreateUpdatePage />}
            />
            <Route exact path="/CustomerList" element={<CustomerListPage />} />
            <Route
              exact
              path="/SupplierCreateUpdate"
              element={<SupplierCreateUpdatePage />}
            />
            <Route exact path="/SupplierList" element={<SupplierListPage />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Registration" element={<RegistrationPage />} />
            <Route exact path="/VerifyEmailService" element={<SendOTPPage />} />
            <Route exact path="/VerifyOTPService" element={<VerifyOTPPage />} />
            <Route
              exact
              path="/ResetPasswordService"
              element={<CreatePasswordPage />}
            />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
