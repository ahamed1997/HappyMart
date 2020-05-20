// <copyright file="HBAdminBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL.HB.BL.Models
{
    using System.Collections.Generic;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL.Interfaces;

    /// <summary>
    /// Admin Business Layer.
    /// </summary>
    public class HBAdminBL : IHBAdminBL
    {
        private readonly IHappyBuyRepository happyBuyRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="HBAdminBL"/> class.
        /// </summary>
        /// <param name="happyBuyRepository">Interface Injection.</param>
        public HBAdminBL(IHappyBuyRepository happyBuyRepository)
        {
            this.happyBuyRepository = happyBuyRepository;
        }

        /// <summary>
        /// LogIn Validation.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        public List<T> AdminLogInValidation<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 30);
        }

        /// <summary>
        /// Get All Customers.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        public List<T> GetAllCustomers<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 31);
        }

        /// <summary>
        /// GetAllVendors.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Vendors Details.</returns>
        public List<T> GetAllVendors<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 40);
        }

        /// <summary>
        /// GetStock.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Stock Details.</returns>
        public List<T> GetStock<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 41);
        }

        /// <summary>
        /// Get Sales.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Sales Details.</returns>
        public List<T> GetSales<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 42);
        }

        /// <summary>
        /// Get Sales by Products.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Sales Details.</returns>
        public List<T> GetSalesByProducts<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 43);
        }
    }
}
