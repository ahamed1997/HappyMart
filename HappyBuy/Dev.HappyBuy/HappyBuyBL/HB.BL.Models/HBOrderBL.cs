﻿// <copyright file="HBOrderBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL
{
    using System.Collections.Generic;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL.Implementation;
    using HappyBuyDAL.Interfaces;

    /// <summary>
    /// Order Business Layer.
    /// </summary>
    public class HBOrderBL : IHBOrderBL
    {
        private readonly IHappyBuyRepository happyBuyRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="HBOrderBL"/> class.
        /// </summary>
        /// <param name="happyBuyRepository">Repository Injection.</param>
        public HBOrderBL(IHappyBuyRepository happyBuyRepository)
        {
            this.happyBuyRepository = happyBuyRepository;
        }

        /// <summary>
        /// Place Order.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Orders type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        public int PlaceOrder<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 11);
        }

        /// <summary>
        /// MakePayment fro Customer.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Payments type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        public int MakePayment<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 19);
        }

        /// <summary>
        /// Getting Order Details.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Order Details.</returns>
        public List<T> GetOrderDetails<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 21);
        }

        /// <summary>
        /// GetAllOrders.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Order Details.</returns>
        public List<T> GetAllOrders<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 35);
        }

        /// <summary>
        /// GetAll Orders Details.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Order Details.</returns>
        public List<T> GetAllOrdersDetails<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 36);
        }

        /// <summary>
        /// GetAllOrdersStatus.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Order Details.</returns>
        public List<T> GetAllOrdersStatus<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 38);
        }

        /// <summary>
        /// Get All ShippingAddress.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Shiiping Address Details.</returns>
        public List<T> GetAllShippingAddress<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 37);
        }

        /// <summary>
        /// Update OrderStatus.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Updated Results Details.</returns>
        public List<T> UpdateOrderStatus<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 39);
        }
    }
}
