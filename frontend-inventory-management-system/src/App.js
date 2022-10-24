import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./Helper/SessionHelper";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
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
            <Route exact path="/Dashboard" element={<DashboardPage />} />
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
