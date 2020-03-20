// <copyright file="HBCustomerBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL
{
    using System.Collections.Generic;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL.Implementation;

    /// <summary>
    /// Business Layer for Cutsomer.
    /// </summary>
    public class HBCustomerBL : IHBCustomerBL
    {
        private HappyBuyRepository happyBuyRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="HBCustomerBL"/> class.
        /// </summary>
        public HBCustomerBL()
        {
            this.happyBuyRepository = new HappyBuyRepository();
        }

        /// <summary>
        /// Registering Customer.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Customer type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        public int RegisterCustomer<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 3);
        }

        /// <summary>
        /// Add Shipping Address of Customer.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">ShippingAddress type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        public int AddShippingAddress<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 2);
        }

        /// <summary>
        /// Update Shipping Address.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">ShippingAddress type Dictionary.</param>
        /// <returns>Update Results.</returns>
        public int UpdateShippingAddress<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 15);
        }

        /// <summary>
        /// Getting Customer Details.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        public List<T> GetAllCustomers<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 4);
        }
    }
}
