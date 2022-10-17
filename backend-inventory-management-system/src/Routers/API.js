const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/Users/UsersController");
const BrandController = require("../Controllers/Brands/BrandsController");
const CategoriesController = require("../Controllers/Categories/CategoriesController");
const CustomerController = require("../Controllers/Customer/CustomerController");
const ExpensesTypesController = require("../Controllers/Expenses/ExpensesTypeController");
const ExpensesController = require("../Controllers/Expenses/ExpensesController");
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");

// User Profile
router.post("/Registration", UserController.Registration);
router.post("/Login", UserController.Login);
router.get("/ProfileData", AuthVerifyMiddleware, UserController.ProfileData);
router.post(
  "/ProfileUpdate",
  AuthVerifyMiddleware,
  UserController.ProfileUpdate
);

router.post("/VerifyEmailService/:email", UserController.VerifyEmailService);
router.post("/VerifyOTPService/:email/:otp", UserController.VerifyOTPService);
router.post("/ResetPasswordService", UserController.ResetPasswordService);

// Brands

router.post(
  "/CreateBrandsService",
  AuthVerifyMiddleware,
  BrandController.CreateBrandsService
);
router.post(
  "/UpdateBrand/:id",
  AuthVerifyMiddleware,
  BrandController.UpdateBrand
);
router.get(
  "/BrandList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  BrandController.BrandList
);
router.get(
  "/BrandDropdown",
  AuthVerifyMiddleware,
  BrandController.BrandDropdown
);

// Category
router.post(
  "/CreateCategoryService",
  AuthVerifyMiddleware,
  CategoriesController.CreateCategoryService
);
router.post(
  "/UpdateCategory/:id",
  AuthVerifyMiddleware,
  CategoriesController.UpdateCategory
);
router.get(
  "/CategoryList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  CategoriesController.CategoryList
);
router.get(
  "/CategoryDropdown",
  AuthVerifyMiddleware,
  CategoriesController.CategoryDropdown
);

// Customer
router.post(
  "/CreateCustomerService",
  AuthVerifyMiddleware,
  CustomerController.CreateCustomerService
);
router.post(
  "/UpdateCustomer/:id",
  AuthVerifyMiddleware,
  CustomerController.UpdateCustomer
);
router.get(
  "/CustomerList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  CustomerController.CustomerList
);
router.get(
  "/CustomerDropdown",
  AuthVerifyMiddleware,
  CustomerController.CustomerDropdown
);

// ExpensesTypes
router.post(
  "/CreateExpensesTypesService",
  AuthVerifyMiddleware,
  ExpensesTypesController.CreateExpensesTypesService
);
router.post(
  "/UpdateExpensesTypes/:id",
  AuthVerifyMiddleware,
  ExpensesTypesController.UpdateExpensesTypes
);
router.get(
  "/ExpensesTypesList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  ExpensesTypesController.ExpensesTypesList
);
router.get(
  "/ExpensesTypesDropdown",
  AuthVerifyMiddleware,
  ExpensesTypesController.ExpensesTypesDropdown
);

// Expense
router.post(
  "/createExpenses",
  AuthVerifyMiddleware,
  ExpensesController.createExpenses
);
router.post(
  "/UpdateExpenses/:id",
  AuthVerifyMiddleware,
  ExpensesController.UpdateExpenses
);
router.get(
  "/Expense-list/:pageNo/:perPage/:searchValue", 
  AuthVerifyMiddleware,
  ExpensesController.ExpensesList
);
module.exports = router;
