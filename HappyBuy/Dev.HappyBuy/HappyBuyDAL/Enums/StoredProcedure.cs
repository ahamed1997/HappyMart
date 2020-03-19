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
    }
}
