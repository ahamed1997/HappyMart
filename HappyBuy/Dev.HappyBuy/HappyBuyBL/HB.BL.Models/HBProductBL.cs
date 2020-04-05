// <copyright file="HBProductBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL
{
    using System.Collections.Generic;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL.Implementation;
    using HappyBuyDAL.Interfaces;

    /// <summary>
    /// Business Layer for Product Entity.
    /// </summary>
    public class HBProductBL : IHBProductBL
    {
        private readonly IHappyBuyRepository happyBuyRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="HBProductBL"/> class.
        /// </summary>
        /// <param name="happyBuyRepository">Dependency Injection.</param>
        public HBProductBL(IHappyBuyRepository happyBuyRepository)
        {
            this.happyBuyRepository = happyBuyRepository;
        }

        /// <summary>
        /// Insert a new Product.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns>Insert Results.</returns>
        public int AddProduct<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 8);
        }

        /// <summary>
        /// Update Product Details.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns>Update Results.</returns>
        public int UpdateProductDetails<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 14);
        }

        /// <summary>
        /// Get All Products.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns>Product Details.</returns>
        public List<T> GetProducts<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 5);
        }

        /// <summary>
        /// Insert Category.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Category Type Dictionary.</param>
        /// <returns>Insert Results.</returns>
        public int InsertCategory<T>(Dictionary<string, object> dictionary)
        {
            int result = this.happyBuyRepository.AddDetails<T>(dictionary, 6);
            return result;
        }

        /// <summary>
        /// Insert SubCategory.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">SubCategory. Type Dictionary.</param>
        /// <returns>Insert Results.</returns>
        public int InsertSubCategory<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 9);
        }
    }
}
