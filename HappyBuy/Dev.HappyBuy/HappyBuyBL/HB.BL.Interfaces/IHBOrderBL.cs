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

        /// <summary>
        /// Getting Order Details.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Order Details.</returns>
        List<T> GetOrderDetails<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// GetAllOrders.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Order Details.</returns>
        List<T> GetAllOrders<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// GetAll Orders Details.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Order Details.</returns>
        List<T> GetAllOrdersDetails<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// GetAllOrdersStatus.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Order Details.</returns>
        List<T> GetAllOrdersStatus<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// Get All ShippingAddress.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Shiiping Address Details.</returns>
        List<T> GetAllShippingAddress<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// Update OrderStatus.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Updated Results Details.</returns>
        List<T> UpdateOrderStatus<T>(Dictionary<string, object> dictionary)
            where T : new();
    }
}
