// <copyright file="ProductTest.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyTests
{
    using System.Collections.Generic;
    using System.Text;
    using global::HappyBuyDAL;
    using HappyBuyBL;
    using HappyBuyBL.HB.BL.Interfaces;
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    /// <summary>
    /// Product Business Layer Test.
    /// </summary>
    public class ProductTest
    {
        private IHBProductBL hBProductBL;
        private Dictionary<string, object> dictionary;

        /// <summary>
        /// Product Test Initialize.
        /// </summary>
        [TestInitialize]
        public void TestInitialze()
        {
            this.hBProductBL = new HBProductBL();
        }

        /// <summary>
        /// Insert Product Test.
        /// </summary>
        [TestMethod]
        public void Insert_Product_Test()
        {
            this.dictionary.Add("ProductName", "Samsung");
            this.dictionary.Add("ProductSubCategoryId", 2);
            this.dictionary.Add("ProductDescription", "Samsung is a nice mobile");
            this.dictionary.Add("ProductSpecification", "6000 MAH");
            this.dictionary.Add("ProductOptions", "64GB ROM");
            this.dictionary.Add("ProductPrice", 15999);
            this.dictionary.Add("ProductBrand", "Samsung");
            this.dictionary.Add("ProductIsActive", true);
            this.dictionary.Add("ProductQuantity", 13);
            this.dictionary.Add("ProductImageURL", "NotYet");
            var expectValue = 1;

            // Act
            var actualValue = this.hBProductBL.AddProduct<Product>(this.dictionary);

            // Assert
            Assert.AreEqual(expectValue, actualValue);
        }

        /// <summary>
        /// Update Product Test.
        /// </summary>
        [TestMethod]
        public void Update_Product_Test()
        {
            this.dictionary.Add("ProductName", "Samsung");
            this.dictionary.Add("ProductSubCategoryId", 2);
            this.dictionary.Add("ProductDescription", "Samsung is a nice mobile");
            this.dictionary.Add("ProductSpecification", "6000 MAH");
            this.dictionary.Add("ProductOptions", "64GB ROM");
            this.dictionary.Add("ProductPrice", 15999);
            this.dictionary.Add("ProductBrand", "Samsung");
            this.dictionary.Add("ProductIsActive", true);
            this.dictionary.Add("ProductQuantity", 13);
            this.dictionary.Add("ProductImageURL", "NotYet");
            var expectValue = 1;

            // Act
            var actualValue = this.hBProductBL.UpdateProductDetails<Product>(this.dictionary);

            // Assert
            Assert.AreEqual(expectValue, actualValue);
        }

        /// <summary>
        /// Insert Category Test.
        /// </summary>
        [TestMethod]
        public void Insert_Category_Test()
        {
            // Arrange
            this.dictionary.Add("CategoryName", "Electronics");
            var expectedvalue = 1;

            // Act
            var actualValue = this.hBProductBL.InsertCategory<Category>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedvalue, actualValue);
        }

        /// <summary>
        /// Insert SubCategory Test.
        /// </summary>
        [TestMethod]
        public void Insert_SubCategory_Test()
        {
            // Arrange
            this.dictionary.Add("SubCategoryCategoryId", 1);
            this.dictionary.Add("SubCategoryName", "Samsung");
            var expectedvalue = 1;

            // Act
            var actualValue = this.hBProductBL.InsertSubCategory<Category>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedvalue, actualValue);
        }
    }
}
