const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/Users/UsersController");
const BrandController = require("../Controllers/Brands/BrandsController");
const CategoriesController = require("../Controllers/Categories/CategoriesController");
const CustomerController = require("../Controllers/Customer/CustomerController");
const ExpensesTypesController = require("../Controllers/Expenses/ExpensesTypeController");
const ExpensesController = require("../Controllers/Expenses/ExpensesController");
const ProductController = require("../Controllers/Product/ProductController");
const PurchaseController = require("../Controllers/Purchases/PurchasesController");
const SalesController = require("../Controllers/Sales/SalesController");
const ReturnController = require("../Controllers/Return/ReturnController");
const SuppliersController = require("../Controllers/Suppliers/SuppliersController");
const ReportController = require("../Controllers/Report/ReportController");
const SummaryController = require("../Controllers/Summary/SummaryController");
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

router.delete(
  "/DeleteBrand/:id",
  AuthVerifyMiddleware,
  BrandController.DeleteBrand
);

router.get(
  "/BrandDetailsByID/:id",
  AuthVerifyMiddleware,
  BrandController.BrandDetailsByID
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

router.delete(
  "/DeleteCategory/:id",
  AuthVerifyMiddleware,
  CategoriesController.DeleteCategory
);

router.get(
  "/CategoryDetailsByID/:id",
  AuthVerifyMiddleware,
  CategoriesController.CategoryDetailsByID
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

router.delete(
  "/DeleteCustomer/:id",
  AuthVerifyMiddleware,
  CustomerController.DeleteCustomer
);

router.get(
  "/CustomerDetailsByID/:id",
  AuthVerifyMiddleware,
  CustomerController.CustomerDetailsByID
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
  "/ExpensesTypesDropdown/:id",
  AuthVerifyMiddleware,
  ExpensesTypesController.ExpensesTypesDropdown
);

router.get(
  "/ExpensesTypesDetailsByID/:id",
  AuthVerifyMiddleware,
  ExpensesTypesController.ExpensesTypesDetailsByID
);

router.delete(
  "/DeleteExpensesTypes/:id",
  AuthVerifyMiddleware,
  ExpensesTypesController.DeleteExpensesTypes
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
  "/Expense-list/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  ExpensesController.ExpensesList
);

router.get(
  "/ExpensesDetailsByID/:id",
  AuthVerifyMiddleware,
  ExpensesController.ExpensesDetailsByID
);

router.delete(
  "/DeleteExpense/:id",
  AuthVerifyMiddleware,
  ExpensesController.DeleteExpense
);

// Suppliers
router.post(
  "/CreateSuppliers",
  AuthVerifyMiddleware,
  SuppliersController.CreateSupplier
);
router.post(
  "/UpdateSuppliers/:id",
  AuthVerifyMiddleware,
  SuppliersController.UpdateSupplier
);
router.get(
  "/Suppliers-list/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  SuppliersController.SupplierList
);

router.get(
  "/SupplierDropdown/:id",
  AuthVerifyMiddleware,
  SuppliersController.SupplierDropdown
);

router.get(
  "/SupplierDetailsByID/:id",
  AuthVerifyMiddleware,
  SuppliersController.SupplierDetailsByID
);

router.delete(
  "/DeleteSupplier/:id",
  AuthVerifyMiddleware,
  SuppliersController.DeleteSupplier
);

// Product
router.post(
  "/createProduct",
  AuthVerifyMiddleware,
  ProductController.CreateProduct
);
router.post(
  "/updateProduct/:id",
  AuthVerifyMiddleware,
  ProductController.UpdateProduct
);
router.get(
  "/Product-list/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  ProductController.ProductList
);

router.get(
  "/ProductDetailsByID/:id",
  AuthVerifyMiddleware,
  ProductController.ProductDetailsByID
);

router.delete(
  "/DeleteProduct/:id",
  AuthVerifyMiddleware,
  ProductController.DeleteProduct
);

// Purchase
router.post(
  "/CreatePurchase",
  AuthVerifyMiddleware,
  PurchaseController.CreatePurchase
);
router.get(
  "/Purchase-list/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  PurchaseController.PurchaseList
);
router.delete(
  "/DeletePurchase/:id",
  AuthVerifyMiddleware,
  PurchaseController.PurchaseDelete
);

// Sales
router.post("/CreateSales", AuthVerifyMiddleware, SalesController.CreateSales);
router.get(
  "/Sales-list/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  SalesController.SalesList
);
router.delete(
  "/DeleteSales/:id",
  AuthVerifyMiddleware,
  SalesController.SaleDelete
);

// Return
router.post(
  "/CreateReturn",
  AuthVerifyMiddleware,
  ReturnController.CreateReturns
);
router.get(
  "/Return-list/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  ReturnController.ReturnList
);

router.delete(
  "/DeleteReturn/:id",
  AuthVerifyMiddleware,
  ReturnController.ReturnDelete
);

// Report

router.post(
  "/ExpenseReport",
  AuthVerifyMiddleware,
  ReportController.ExpenseByDate
);
router.post(
  "/PurchaseReport",
  AuthVerifyMiddleware,
  ReportController.PurchaseByDate
);
router.post(
  "/ReturnReport",
  AuthVerifyMiddleware,
  ReportController.ReturnByDate
);
router.post("/SalesReport", AuthVerifyMiddleware, ReportController.SalesByDate);

// Summery

router.get(
  "/ExpenseSummary",
  AuthVerifyMiddleware,
  SummaryController.ExpenseSummary
);
router.get(
  "/PurchaseSummary",
  AuthVerifyMiddleware,
  SummaryController.PurchaseSummary
);
router.get(
  "/ReturnSummary",
  AuthVerifyMiddleware,
  SummaryController.ReturnSummary
);
router.get(
  "/SalesSummary",
  AuthVerifyMiddleware,
  SummaryController.SalesSummary
);

module.exports = router;
