// <copyright file="StoredProcedure.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Enums
{
    /// <summary>
    /// HappyBuy DB Stored Procedure.
    /// </summary>
    public enum StoredProcedure
    {
        /// <summary>
        /// Stored Procedure for Add Items to Cart.
        /// </summary>
        USP_AddCart = 1,

        /// <summary>
        /// Stored Procedure for Add new Shipping Address.
        /// </summary>
        USP_AddShippingAddress = 2,

        /// <summary>
        /// Stored Procedure for Customer Register.
        /// </summary>
        USP_CustomerRegister = 3,

        /// <summary>
        /// Stored Procedure for Get Customer Details.
        /// </summary>
        USP_GetCustomerDetails = 4,

        /// <summary>
        /// Stored Procedure for Get Product Details.
        /// </summary>
        USP_GetProductDetails = 5,

        /// <summary>
        /// Stored Procedure for Inserting Category.
        /// </summary>
        USP_InsertCategory = 6,

        /// <summary>
        /// Stored Procedure for for Inserting Status in Orders.
        /// </summary>
        USP_InsertOrderStatusTable = 7,

        /// <summary>
        /// Stored Procedure for Inserting Product.
        /// </summary>
        USP_InsertProduct = 8,

        /// <summary>
        /// Stored Procedure for Insert SubCategory.
        /// </summary>
        USP_InsertSubCategory = 9,

        /// <summary>
        /// Stored Procedure for Modify OrderStatus.
        /// </summary>
        USP_ModifyOrderStatusTable = 10,

        /// <summary>
        /// Stored Procedure for Place Order.
        /// </summary>
        USP_PlaceOrder = 11,

        /// <summary>
        /// Stored Procedure for Remove Items in Cart.
        /// </summary>
        USP_RemoveCartItems = 12,

        /// <summary>
        /// Stored Procedure for Update Cart Items Quantity.
        /// </summary>
        USP_UpdateCartQuantity = 13,

        /// <summary>
        /// Stored Procedure for Update Product Details.
        /// </summary>
        USP_UpdateProductDetails = 14,

        /// <summary>
        /// Stored Procedure for Shipping Address.
        /// </summary>
        USP_UpdateShippingAddress = 15,

        /// <summary>
        /// Stored Procedure for Get Cart Items.
        /// </summary>
        USP_GetCartItems = 16,

        /// <summary>
        /// Stored Procedure for Get Shipping Address.
        /// </summary>
        USP_GetShippingAddress = 17,

        /// <summary>
        /// Stored Procedure for LogIn Authentication.
        /// </summary>
        USP_LogInValidation = 18,

        /// <summary>
        /// Stored Procedure for Make Payment.
        /// </summary>
        USP_MakePayment = 19,

        /// <summary>
        /// Stored Procedure for Get All Products.
        /// </summary>
        USP_GetAllProducts = 20,

        /// <summary>
        /// Stored Procedure for Get All OrderDetails.
        /// </summary>
        USP_GetOrderDetails = 21,

        /// <summary>
        /// Stored Procedure for Email existence.
        /// </summary>
        USP_ForgotPasswordValidation = 22,

        /// <summary>
        /// Stored Procedure for update Password.
        /// </summary>
        USP_UpdatePassword = 23,

        /// <summary>
        /// Stored Procedure for update Profile.
        /// </summary>
        USP_UpdateProfile = 24,

        /// <summary>
        /// Stored Procedure for Get Categories.
        /// </summary>
        USP_GetCategories = 25,

        /// <summary>
        /// Stored Procedure for Get SubCategories.
        /// </summary>
        USP_GetSubCategories = 26,

        /// <summary>
        /// Stored Procedure for Update Profile Validation.
        /// </summary>
        USP_UpdateProfileValidation = 27,

        /// <summary>
        /// Stored Procedure for Product Specification.
        /// </summary>
        USP_GetProductSpecification = 28,

        /// <summary>
        /// Stored Procedure for getting Options.
        /// </summary>
        USP_GetOptions = 29,

        /// <summary>
        /// Stored Procedure for Admin LogIn Validation.
        /// </summary>
        USP_AdminLogInValidation = 30,

        /// <summary>
        /// Stored Procedure for Get All Customers.
        /// </summary>
        USP_GetAllCustomers = 31,

        /// <summary>
        /// Stored Procedure for Add Specification.
        /// </summary>
        USP_AddSpecification = 32,

        /// <summary>
        /// Stored Procedure for Update Specification.
        /// </summary>
        USP_UpdateSpecification = 33,
    }
}
