// <copyright file="CartTest.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyTest
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using HappyBuyDAL.Interfaces;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Moq;

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
        private List<Cart> cartlist;

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
            Cart cart = new Cart();
            cart.CartCustomerId = 1;
            cart.CartProductId = 2;
            cart.CartQuantity = 1;
            this.dictionary.Add("CartCustomerId", cart.CartCustomerId);
            this.dictionary.Add("CartProductId", cart.CartProductId);
            this.dictionary.Add("CartQuantity", cart.CartQuantity);
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
            Cart cart = new Cart();
            cart.CartId = 1;
            cart.CartQuantity = 2;
            this.dictionary.Add("CartId", cart.CartId);
            this.dictionary.Add("CartQuantity", cart.CartQuantity);
            this.hBCartBLMock.Setup(x => x.UpdateCartQuantity<Cart>(this.dictionary)).Returns(2);
            this.happyBuyRepositoryMock.Setup(x => x.UpdateDetails<Cart>(this.dictionary, 13)).Returns(2);
            int expectedValue = 2;

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
            Cart cart = new Cart();
            cart.CartId = 1;
            this.dictionary.Add("CartId", cart.CartId);
            this.hBCartBLMock.Setup(x => x.RemoveCartItem<Cart>(this.dictionary)).Returns(1);
            this.happyBuyRepositoryMock.Setup(x => x.DeleteDetails<Cart>(this.dictionary, 12)).Returns(1);
            int expectedValue = 1;

            // Act
            int actualValue = this.hBCartBL.RemoveCartItem<Cart>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Get Cart Items.
        /// </summary>
        [TestMethod]
        public void Get_Cart_Items()
        {
            // Arrange
            this.dictionary.Add("CartCustomerId", 1);

            this.cartlist = new List<Cart>()
            {
                new Cart()
                {
                    CartId = 1,
                    CartPrice = 144900,
                    CartQuantity = 1,
                    CartCustomerId = 1,
                    CartProductId = 4,
                    ProductId = 1,
                    ProductName = "Apple MacBook Pro Core i5 8th Gen - (8 GB/256 GB SSD/Mac OS Mojave) MV962HN  (13.3 inch, Space Grey,",
                    ProductBrand = "Apple",
                    ProductDescription = "Stylish & Portable Thin and Light Laptop,13.3 inch Quad HD LED Backlit IPS Retina Display (True Tone Technology, Wide Color (P3), 500 nits Brightness)",
                    ProductSpecification = "{\"Display\":\"Retina display: 13.3-inch (diagonal) LED-backlit display with IPS technology\",\"Processor\":\"2.3GHz dual-core Intel Core i5, Turbo Boost up to 3.6GHz, with 64MB of eDRAM, Configurable to 2.5GHz dual-core Intel Core i7, Turbo Boost up to 4.0GHz, with 64MB of eDRAM\",\"Graphics and Video Support\":\"Intel Iris Plus Graphics 640\",\"Wireless\":\"Wi-Fi,Bluetooth 4.2 wireless technology\",\"In the Box\":\"MacBook Pro, 61W USB-C Power Adapter, USB-C Charge Cable(2 m)\",\"Height\":\"1.49 cm \",\"Width\":\"30.41 cm\",\"Depth\":\"21.24 cm\",\"Weight\":\"1.37 kg\",\"Release Date\":\"05-06-2017\"}",
                    ProductImageURL = "NotFound",
                    ProductIsActive = true,
                    ProductOptions = "{\"Bank Offer\":\"10% Instant discount with HDFC Bank PayZapp Card on purchase of Rs.1000 or more\",\"No Cost EMI\":\"Avail No Cost EMI on select cards for orders above ?3000\",\"Partner Offers\":\"Get FLAT 5% BACK with Amazon Pay ICICI Bank Credit card card for Prime members. Flat 3% BACK for non-Prime members. No minimum order value. No upper limit on cashback.\"}",
                    ProductPrice = 144900,
                    ProductQuantity = 50,
                    ProductSubCategoryId = 5,
                },
            };

            this.hBCartBLMock.Setup(x => x.GetCartItems<Cart>(this.dictionary)).Returns(this.cartlist);
            this.happyBuyRepositoryMock.Setup(x => x.GetAllDetails<Cart>(this.dictionary, 16)).Returns(this.cartlist);
            List<Cart> expectedlist = this.cartlist;

            // Act
            List<Cart> actuallist = this.hBCartBL.GetCartItems<Cart>(this.dictionary);

            // Assert
            Assert.AreSame(expectedlist, actuallist);
        }
    }
}
