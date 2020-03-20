// <copyright file="IHBCartBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL.HB.BL.Interfaces
{
    using System.Collections.Generic;

    /// <summary>
    /// Cart Business Layer.
    /// </summary>
    public interface IHBCartBL
    {
        /// <summary>
        /// Add Items to Cart.
        /// </summary>
        /// <typeparam name="T">Generic Type Parameter.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary.</param>
        /// <returns>Returns Add Items Result Id.</returns>
        int AddToCart<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// Update Cart Item Quantity.
        /// </summary>
        /// <typeparam name="T">Generic type Parameter.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary.</param>
        /// <returns>Returns the Update Result Id.</returns>
        int UpdateCartQuantity<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// Removes Item from Cart.
        /// </summary>
        /// <typeparam name="T">Generic type Parameter.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary.</param>
        /// <returns>Returns removed item id.</returns>
        int RemoveCartItem<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// Get Cart items for Customer.
        /// </summary>
        /// <typeparam name="T">Genric type Parametr.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary.</param>
        /// <returns>Returns the Cart items.</returns>
        List<T> GetCartItems<T>(Dictionary<string, object> dictionary)
            where T : new();
    }
}
