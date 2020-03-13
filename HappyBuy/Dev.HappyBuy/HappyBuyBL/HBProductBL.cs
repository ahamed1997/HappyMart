// <copyright file="HBProductBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL
{
    using System.Collections.Generic;
    using HappyBuyDAL.Implementation;

    /// <summary>
    /// Business Layer for Product Entity.
    /// </summary>
    public class HBProductBL
    {
        private HappyBuyRepository happyBuyRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="HBProductBL"/> class.
        /// </summary>
        public HBProductBL()
        {
            this.happyBuyRepository = new HappyBuyRepository();
        }

        /// <summary>
        /// Insert a new Product.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns>Insert Results.</returns>
        public int AddProduct<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddCustomer<T>(dictionary, 7);
        }
    }
}
