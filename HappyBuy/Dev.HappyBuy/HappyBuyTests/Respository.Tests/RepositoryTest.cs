// <copyright file="RepositoryTest.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyTests
{
    using System.Collections.Generic;
    using System.Text;
    using global::HappyBuyDAL;
    using global::HappyBuyDAL.Implementation;
    using global::HappyBuyDAL.Interfaces;
    using HappyBuyBL;
    using HappyBuyBL.HB.BL.Interfaces;
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    /// <summary>
    /// Repository Test.
    /// </summary>
    public class RepositoryTest
    {
        private IHBCartBL hBCartBL;
        private IHBProductBL hBProductBL;
        private IHBCustomerBL hBCustomerBL;
        private IHaapyBuyRepository happyBuyRepository;
        private Dictionary<string, object> dictionary;

        /// <summary>
        /// Test Initialization.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.hBCartBL = new HBCartBL();
            this.hBProductBL = new HBProductBL();
            this.hBCustomerBL = new HBCustomerBL();
            this.happyBuyRepository = new HappyBuyRepository();
        }

        /// <summary>
        /// Add Details test in Repository.
        /// </summary>
        [TestMethod]
        public void Add_Details_Test()
        {
            // Arrange
            this.dictionary.Add("CustomerFirstName", "Ahamed");
            this.dictionary.Add("CustomerLastName", "Ayathullah");
            this.dictionary.Add("CustomerMobile", 93737373737);
            this.dictionary.Add("CustomerEmail", "ahamed@gmail.com");
            this.dictionary.Add("CustomerPassword", "737373");
            int storedProcedure = 3;
            var expectedValue = 1;

            // Act
            var actualValue = this.happyBuyRepository.AddDetails<Customer>(this.dictionary, storedProcedure);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Update Details in Repository.
        /// </summary>
        [TestMethod]
        public void Update_Details_Test()
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
            int storedProcedure = 14;
            var expectValue = 1;

            // Act
            var actualValue = this.happyBuyRepository.UpdateDetails<Product>(this.dictionary, storedProcedure);

            // Assert
            Assert.AreEqual(expectValue, actualValue);
        }

        /// <summary>
        /// Delete Details Test in Repository.
        /// </summary>
        [TestMethod]
        public void Delete_Details_Test()
        {
            // Arrange
            this.dictionary = new Dictionary<string, object>();
            this.dictionary.Add("CartId", 1);
            int storedProcedure = 12;
            var expectedValue = 1;

            // Act
            var actualValue = this.happyBuyRepository.DeleteDetails<Cart>(this.dictionary, storedProcedure);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }
    }
}
