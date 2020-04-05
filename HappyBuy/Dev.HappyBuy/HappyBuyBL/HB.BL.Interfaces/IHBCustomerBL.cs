// <copyright file="IHBCustomerBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL.HB.BL.Interfaces
{
    using System.Collections.Generic;

    /// <summary>
    /// Business Layer for Cutsomer.
    /// </summary>
    public interface IHBCustomerBL
    {
        /// <summary>
        /// Registering Customer.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Customer type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        int RegisterCustomer<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// Add Shipping Address of Customer.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">ShippingAddress type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        int AddShippingAddress<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// Update Shipping Address.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">ShippingAddress type Dictionary.</param>
        /// <returns>Update Results.</returns>
        int UpdateShippingAddress<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// Getting Customer Details.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        List<T> GetMyProfile<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// LogIn Validation.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        List<T> LogInValidation<T>(Dictionary<string, object> dictionary)
            where T : new();
    }
}
