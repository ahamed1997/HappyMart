// <copyright file="HBProductBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL
{
    using System.Collections.Generic;
    using HappyBuyBL.HB.BL.Interfaces;
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
        /// Insert a Specification.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Specification Type Dictionary.</param>
        /// <returns>Insert Results.</returns>
        public int AddSpecification<T>(Dictionary<string, object> dictionary)
        {
                return this.happyBuyRepository.AddDetails<T>(dictionary, 32);
        }

        /// <summary>
        /// Update Specification.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Specification Type Dictionary.</param>
        /// <returns>Udpate Results.</returns>
        public int UpdateSpecification<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 33);
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
        /// Get All Products.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns>Product Details.</returns>
        public List<T> GetAllProducts<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 20);
        }

        /// <summary>
        /// GetCategories.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns> Get Categories Details.</returns>
        public List<T> GetCategories<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 25);
        }

        /// <summary>
        /// GetSubCategories.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Product Type Dictionary.</param>
        /// <returns> Get SubCategories Details.</returns>
        public List<T> GetSubCategories<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 26);
        }

        /// <summary>
        /// GetSpecification.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Specification Type Dictionary.</param>
        /// <returns> GetSpecification Details.</returns>
        public List<T> GetSpecification<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 28);
        }

        /// <summary>
        /// GetOptions.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Options Type Dictionary.</param>
        /// <returns> GetOptions Details.</returns>
        public List<T> GetOptions<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 29);
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

        /// <summary>
        /// Delete Specification.
        /// </summary>
        /// <typeparam name="T">Generic Object Passing.</typeparam>
        /// <param name="dictionary">Specification Type Dictionary.</param>
        /// <returns> Specification Details.</returns>
        public List<T> DeleteSpecification<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 34);
        }
    }
}
