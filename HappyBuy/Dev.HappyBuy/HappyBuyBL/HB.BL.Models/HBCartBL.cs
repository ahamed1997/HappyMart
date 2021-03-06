﻿// <copyright file="HBCartBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL
{
    using System.Collections.Generic;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL.Implementation;
    using HappyBuyDAL.Interfaces;

    /// <summary>
    /// Cart Business Layer.
    /// </summary>
    public class HBCartBL : IHBCartBL
    {
        private readonly IHappyBuyRepository happyBuyRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="HBCartBL"/> class.
        /// </summary>
        /// <param name="happyBuyRepository">Dependency Injection.</param>
        public HBCartBL(IHappyBuyRepository happyBuyRepository)
        {
            this.happyBuyRepository = happyBuyRepository;
        }

        /// <summary>
        /// Add Items to Cart.
        /// </summary>
        /// <typeparam name="T">Generic Type Parameter.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary.</param>
        /// <returns>Returns Add Items Result Id.</returns>
        public int AddToCart<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 1);
        }

        /// <summary>
        /// Update Cart Item Quantity.
        /// </summary>
        /// <typeparam name="T">Generic type Parameter.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary.</param>
        /// <returns>Returns the Update Result Id.</returns>
        public List<T> UpdateCartQuantity<T>(Dictionary<string, object> dictionary)
             where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 13);
        }

        /// <summary>
        /// Removes Item from Cart.
        /// </summary>
        /// <typeparam name="T">Generic type Parameter.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary.</param>
        /// <returns>Returns removed item id.</returns>
        public List<T> RemoveCartItem<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 12);
        }

        /// <summary>
        /// Get Cart items for Customer.
        /// </summary>
        /// <typeparam name="T">Genric type Parametr.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary.</param>
        /// <returns>Returns the Cart items.</returns>
        public List<T> GetCartItems<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 16);
        }
    }
}
