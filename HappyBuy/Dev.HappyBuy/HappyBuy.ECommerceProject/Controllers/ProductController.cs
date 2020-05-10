// <copyright file="ProductController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System.Collections.Generic;
    using System.Reflection;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using HappyBuyDAL.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Product Related related API's.
    /// </summary>
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IHBProductBL hBProductBL;

        /// <summary>
        /// Initializes a new instance of the <see cref="ProductController"/> class.
        /// </summary>
        /// <param name="hBProductBL">Dependency Injection.</param>
        public ProductController(IHBProductBL hBProductBL)
        {
            this.hBProductBL = hBProductBL;
        }

        /// <summary>
        /// Insert a new Product.
        /// </summary>
        /// <param name="product">Product Details.</param>
        /// <returns>Inserted result.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/InsertProduct")]
        public int InsertProduct(Product product)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Product>(product);

            int i = this.hBProductBL.AddProduct<Product>(keyValues);
            return i;
        }

        /// <summary>
        /// Insert a new specification.
        /// </summary>
        /// <param name="specification">specification Details.</param>
        /// <returns>Inserted result.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/addSpecification")]
        public int AddSpecification(List<Specification> specification)
        {
            int i = 0;
            for (int j = 0; j < specification.Count; j++)
            {
                Dictionary<string, object> keyValues = this.GetProperty<Specification>(specification[j]);
                i = this.hBProductBL.AddSpecification<Specification>(keyValues);
            }

            return i;
        }

        /// <summary>
        /// Insert a new specification.
        /// </summary>
        /// <param name="specification">specification Details.</param>
        /// <returns>Inserted result.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/updateSpecification")]
        public int UpdateSpecification(Specification specification)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Specification>(specification);

            int i = this.hBProductBL.AddSpecification<Specification>(keyValues);
            return i;
        }

        /// <summary>
        /// Update Product Product Details.
        /// </summary>
        /// <param name="product">Product Details.</param>
        /// <returns>Updated Results.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/UpdateProductDetails")]
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
        [HttpPost]
        [Route("api/InsertCategory")]
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
        [HttpPost]
        [Route("api/InsertSubCategory")]
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
        [HttpPost]
        [Route("api/GetProducts")]
        public object GetProducts(Product product)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Product>(product);
            var getProduct = this.hBProductBL.GetProducts<Product>(keyValues);
            return getProduct;
        }

        /// <summary>
        /// Get All Products.
        /// </summary>
        /// <returns>Returns Product Items.</returns>
        [HttpPost]
        [Route("api/GetAllProducts")]
        public List<Product> GetAllProducts()
        {
            Product p = new Product();
            Dictionary<string, object> keyValues = this.GetProperty<Product>(p);
            List<Product> getProduct = this.hBProductBL.GetAllProducts<Product>(keyValues);
            return getProduct;
        }

        /// <summary>
        /// GetCategories.
        /// </summary>
        /// <returns>Returns Product Items.</returns>
        [HttpPost]
        [Route("api/GetCategories")]
        public List<Category> GetCategories()
        {
            Category c = new Category();
            Dictionary<string, object> keyValues = this.GetProperty<Category>(c);
            List<Category> getProduct = this.hBProductBL.GetCategories<Category>(keyValues);
            return getProduct;
        }

        /// <summary>
        /// GetSpecifications.
        /// </summary>
        /// <param name="specification">Product Id.</param>
        /// <returns>Specifications.</returns>
        [HttpPost]
        [Route("api/GetSpecification")]
        public List<Specification> GetSpecification(Specification specification)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Specification>(specification);
            List<Specification> getProduct = this.hBProductBL.GetSpecification<Specification>(keyValues);
            return getProduct;
        }

        /// <summary>
        /// GetOptions.
        /// </summary>
        /// <param name="options">Product Id.</param>
        /// <returns>Options.</returns>
        [HttpPost]
        [Route("api/GetOptions")]
        public List<Options> GetOptions()
        {
            Options options = new Options();
            Dictionary<string, object> keyValues = this.GetProperty<Options>(options);
            List<Options> getProduct = this.hBProductBL.GetOptions<Options>(keyValues);
            return getProduct;
        }

        /// <summary>
        /// GetSubCategories.
        /// </summary>
        /// <returns>Returns Product Items.</returns>
        [HttpPost]
        [Route("api/GetSubCategories")]
        public List<SubCategory> GetSubCategories()
        {
            SubCategory s = new SubCategory();
            Dictionary<string, object> keyValues = this.GetProperty<SubCategory>(s);
            List<SubCategory> getProduct = this.hBProductBL.GetSubCategories<SubCategory>(keyValues);
            return getProduct;
        }
    }
}