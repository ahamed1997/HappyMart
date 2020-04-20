// <copyright file="IHBProductBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL.HB.BL.Interfaces
{
    using System.Collections.Generic;

    /// <summary>
    /// Business Layer for Product Entity.
    /// </summary>
    public interface IHBProductBL
    {
        /// <summary>
        /// Insert a new Product.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns>Insert Results.</returns>
        int AddProduct<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// Update Product Details.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns>Update Results.</returns>
        int UpdateProductDetails<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// Get All Products.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns>Product Details.</returns>
        List<T> GetProducts<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// Insert Category.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Category Type Dictionary.</param>
        /// <returns>Insert Results.</returns>
        int InsertCategory<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// Insert SubCategory.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">SubCategory. Type Dictionary.</param>
        /// <returns>Insert Results.</returns>
        int InsertSubCategory<T>(Dictionary<string, object> dictionary);

        /// <summary>
        /// Get All Products.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns>Product Details.</returns>
        List<T> GetAllProducts<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// GetCategories.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns> Get Categories Details.</returns>
        List<T> GetCategories<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// GetSubCategories.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns> Get SubCategories Details.</returns>
        List<T> GetSubCategories<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// GetSpecification.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Specification Type Dictionary.</param>
        /// <returns> GetSpecification Details.</returns>
        List<T> GetSpecification<T>(Dictionary<string, object> dictionary)
            where T : new();

        /// <summary>
        /// GetOptions.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Options Type Dictionary.</param>
        /// <returns> GetOptions Details.</returns>
        List<T> GetOptions<T>(Dictionary<string, object> dictionary)
            where T : new();
    }
}
