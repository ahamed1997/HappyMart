// <copyright file="HBProductController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Reflection;
    using System.Web.Http.Cors;
    using HappyBuyBL;
    using HappyBuyDAL;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Product Related related API's.
    /// </summary>
    [EnableCors("http://localhost:4200", "*", "GET,PUT,POST")]
    public class HBProductController : Controller
    {
        private HBProductBL hBProductBL = new HBProductBL();

        /// <summary>
        /// Insert a new Product.
        /// </summary>
        /// <param name="product">Product Details.</param>
        /// <returns>Inserted result.</returns>
        public int InsertProduct(Product product)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Product>(product);

            int i = this.hBProductBL.AddProduct<Product>(keyValues);
            return i;
        }

        /// <summary>
        /// Update Product Product Details.
        /// </summary>
        /// <param name="product">Product Details.</param>
        /// <returns>Updated Results.</returns>
        public int UpdateProductDetails(Product product)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Product>(product);
            int i = this.hBProductBL.UpdateProductDetails<Product>(keyValues);
            return i;
        }

        /// <summary>
        /// Get Properties for the Model.
        /// </summary>
        /// <typeparam name="T">Generic Dictionary.</typeparam>
        /// <param name="classobject">Dynamic Object.</param>
        /// <returns>Property Dictionary.</returns>
        public Dictionary<string, object> GetProperty<T>(object classobject)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = classobject.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(classobject) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(classobject, null));
                }
            }

            return keyValues;
        }

        /// <summary>
        /// Insert a new Category.
        /// </summary>
        /// <param name="category">Category Name.</param>
        /// <returns>Returns Inserted Results.</returns>
        public int InsertCategory(Category category)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Category>(category);
            int i = this.hBProductBL.InsertCategory<Category>(keyValues);
            return i;
        }

        /// <summary>
        /// Insert SuCategory.
        /// </summary>
        /// <param name="subCategory">SubCategory Details.</param>
        /// <returns>Returns inserted results.</returns>
        public int InsertSubCategory(SubCategory subCategory)
        {
            Dictionary<string, object> keyValues = this.GetProperty<SubCategory>(subCategory);
            int i = this.hBProductBL.InsertSubCategory<SubCategory>(keyValues);
            return i;
        }

        /// <summary>
        /// Get product Details.
        /// </summary>
        /// <param name="product">Search Items.</param>
        /// <returns>Returns Product Items.</returns>
        public object GetProducts(Product product)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Product>(product);
            var getProduct = this.hBProductBL.GetProducts<Product>(keyValues);
            return getProduct;
        }
    }
}