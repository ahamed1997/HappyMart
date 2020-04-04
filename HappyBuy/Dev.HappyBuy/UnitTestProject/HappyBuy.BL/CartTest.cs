using HappyBuyBL.HB.BL.Interfaces;
using HappyBuyDAL;
using HappyBuyDAL.Interfaces;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;

namespace HappyBuyTest
{
    /// <summary>
    /// Class BL Test.
    /// </summary>
    [TestClass]
    public class CartTest
    {
        private Mock<IHappyBuyRepository> happyBuyRepositoryMock;
        private IHBCartBL hBCartBL;
        private Mock<IHBCartBL> hBCartBLMock;
        private Dictionary<string, object> dictionary;
        
        /// <summary>
        /// Test Initialization.
        /// </summary>
        [TestInitialize]
        public void TestInitialze()
        {

            this.happyBuyRepositoryMock = new Mock<IHappyBuyRepository>();
            this.hBCartBLMock = new Mock<IHBCartBL>();

            this.hBCartBL = this.hBCartBLMock.Object;
            this.dictionary = new Dictionary<string, object>();
        }

        /// <summary>
        /// Add to Cart Test.
        /// </summary>
        [TestMethod]
        public void Add_Items_To_Cart_Test()
        {
            // Arrange
            this.dictionary.Add("CartCustomerId", 1);
            this.dictionary.Add("CartProductId", 2);
            this.dictionary.Add("CartQuantity", 1);
            this.hBCartBLMock.Setup(x => x.AddToCart<Cart>(this.dictionary)).Returns(2);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<Cart>(this.dictionary, 1)).Returns(2);
            int expectedValue = 2;

            // Act
            int actualValue = this.hBCartBL.AddToCart<Cart>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }
        
        /// <summary>
        /// Update Cart Details Test.
        /// </summary>
        [TestMethod]
        public void Update_Cart_Details_Test()
        {
            // Arrange
            this.dictionary.Add("CartId", 1);
            this.dictionary.Add("CartQuantity", 3);
            this.hBCartBLMock.Setup(x => x.UpdateCartQuantity<Cart>(this.dictionary)).Returns(3);
            this.happyBuyRepositoryMock.Setup(x => x.UpdateDetails<Cart>(this.dictionary, 13)).Returns(3);
            int expectedValue = 3;

            // Act
            int actualValue = this.hBCartBL.UpdateCartQuantity<Cart>(this.dictionary);

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
            this.dictionary.Add("CartId", 1);
            this.hBCartBLMock.Setup(x => x.RemoveCartItem<Cart>(this.dictionary)).Returns(1);
            this.happyBuyRepositoryMock.Setup(x => x.DeleteDetails<Cart>(this.dictionary, 12)).Returns(1);
            int expectedValue = 1;

            // Act
            int actualValue = this.hBCartBL.RemoveCartItem<Cart>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }
    }
}
