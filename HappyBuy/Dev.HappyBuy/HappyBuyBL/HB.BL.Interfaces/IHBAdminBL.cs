// <copyright file="IHBAdminBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL.HB.BL.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// Admin Business Layer.
    /// </summary>
    public interface IHBAdminBL
    {
        /// <summary>
        /// LogIn Validation.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        List<T> AdminLogInValidation<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// Get All Customers.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        List<T> GetAllCustomers<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// GetStock.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Stock Details.</returns>
        List<T> GetStock<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// GetAllVendors.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Vendors Details.</returns>
        List<T> GetAllVendors<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// Get Sales.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Sales Details.</returns>
        List<T> GetSales<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// Get Sales by Products.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Sales Details.</returns>
        List<T> GetSalesByProducts<T>(Dictionary<string, object> dictionary)
            where T : new();
    }
}
