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
        /// Stored Procedure for Cutomer Registration.
        /// </summary>
        sp_CustomerRegistration = 1,

        /// <summary>
        /// Stored Procedure for Fetch Customer Details.
        /// </summary>
        sp_GetCustomerDetails = 2,

        /// <summary>
        /// Stored Procedure for Add Product to Cart.
        /// </summary>
        sp_AddCart = 3,

        /// <summary>
        /// Stored Procedure for Adding Shipping Address.
        /// </summary>
        sp_AddShippingAddress = 4,

        /// <summary>
        /// Stored Procedure for Get Product Details.
        /// </summary>
        sp_GetProductDetails = 5,

        /// <summary>
        /// Stored Procedure for Inserting Category.
        /// </summary>
        sp_InsertCategory = 6,

        /// <summary>
        /// Stored Procedure for for Inserting Product.
        /// </summary>
        sp_InsertProduct = 7,

        /// <summary>
        /// Stored Procedure for Inserting SubCategory.
        /// </summary>
        sp_InsertSubCategory = 8,

        /// <summary>
        /// Stored Procedure for Update Payment Details.
        /// </summary>
        sp_MakePayment = 9,

        /// <summary>
        /// Stored Procedure for Update Order Details.
        /// </summary>
        sp_PlaceOrder = 10
    }
}
