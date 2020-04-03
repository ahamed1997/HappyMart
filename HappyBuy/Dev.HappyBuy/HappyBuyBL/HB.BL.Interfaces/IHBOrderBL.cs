// <copyright file="IHBOrderBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL.HB.BL.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// Order Entity.
    /// </summary>
    public interface IHBOrderBL
    {
        /// <summary>
        /// PlaceOrder.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary Passing.</param>
        /// <returns>Returns Order Id.</returns>
        int PlaceOrder<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// MakePayment fro Customer.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Payments type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        int MakePayment<T>(Dictionary<string, object> dictionary);
    }
}
