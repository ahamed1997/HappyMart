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
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = product.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(product) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(product, null));
                }
            }

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
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = product.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(product) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(product, null));
                }
            }

            int i = this.hBProductBL.UpdateProductDetails<Product>(keyValues);
            return i;
        }

        /// <summary>
        /// Insert a new Category.
        /// </summary>
        /// <param name="category">Category Name.</param>
        /// <returns>Returns Inserted Results.</returns>
        public int InsertCategory(Category category)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = category.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(category) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(category, null));
                }
            }

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
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = subCategory.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(subCategory) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(subCategory, null));
                }
            }

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
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = product.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(product) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(product, null));
                }
            }

            var getProduct = this.hBProductBL.GetProducts<Product>(keyValues);
            return getProduct;
        }
    }
}