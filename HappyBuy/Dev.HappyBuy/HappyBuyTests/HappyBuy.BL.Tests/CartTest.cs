// <copyright file="CartTest.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyTests
{
    using System.Collections.Generic;
    using global::HappyBuyDAL;
    using HappyBuyBL;
    using HappyBuyBL.HB.BL.Interfaces;
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    /// <summary>
    /// Cart Business Layer Test.
    /// </summary>
    [TestClass]
    public class CartTest
    {
        private IHBCartBL hBCartBL;
        private Dictionary<string, object> dictionary;

        /// <summary>
        /// Cart Test Initialize.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.hBCartBL = new HBCartBL();
        }

        /// <summary>
        /// Test for Add Items.
        /// </summary>
        [TestMethod]
        public void Add_Items_To_Cart_Test()
        {
            // Arrange
            this.dictionary = new Dictionary<string, object>();
            this.dictionary.Add("CartCustomerId", 1);
            this.dictionary.Add("CartProductId", 2);
            this.dictionary.Add("CartQuantity", 1);
            var expectedValue = 1;

            // Act
            var actualValue = this.hBCartBL.AddToCart<Cart>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Update Cart Details test.
        /// </summary>
        [TestMethod]
        public void Update_Cart_Details_Test()
        {
            // Arrange
            this.dictionary = new Dictionary<string, object>();
            this.dictionary.Add("CartId", 1);
            this.dictionary.Add("CartQuantity", 2);
            var expectedValue = 1;

            // Act
            var actualValue = this.hBCartBL.UpdateCartQuantity<Cart>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Remove Cart Item Test.
        /// </summary>
        [TestMethod]
        public void Remove_Cart_Items_Test()
        {
            // Arrange
            this.dictionary = new Dictionary<string, object>();
            this.dictionary.Add("CartId", 1);
            var expectedValue = 1;

            // Act
            var actualValue = this.hBCartBL.RemoveCartItem<Cart>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Get Cary Items Test.
        /// </summary>
        [TestMethod]
        public void Get_Cart_Items_Test()
        {

        }
    }
}
