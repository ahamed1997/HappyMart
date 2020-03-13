// <copyright file="HBCustomerBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL
{
    using System.Collections.Generic;
    using HappyBuyDAL.Implementation;

    /// <summary>
    /// Business Layer for Cutsomer.
    /// </summary>
    public class HBCustomerBL
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
        /// Regiteing Customer.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Customer type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        public int RegisterCustomer<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddCustomer<T>(dictionary, 1);
        }

        /// <summary>
        /// Getting Customer Details.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="value">Command Text.</param>
        /// <returns>Customer Details.</returns>
        public List<T> GetAllCustomers<T>(string value)
            where T : new()
        {
            return this.happyBuyRepository.GetAllCustomers<T>(value, 2);
        }
    }
}
