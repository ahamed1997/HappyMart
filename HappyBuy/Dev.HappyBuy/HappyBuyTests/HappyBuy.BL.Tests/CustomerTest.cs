// <copyright file="CustomerTest.cs" company="PlaceholderCompany">
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
    using Moq;

    /// <summary>
    /// Customer Business Layer Test.
    /// </summary>
    public class CustomerTest
    {
        private IHBCustomerBL hBCustomerBL;
        private Mock<IHBCustomerBL> hBCustomerBLMock;
        private Dictionary<string, object> dictionary;

        /// <summary>
        /// Test Initialization.
        /// </summary>
        [TestInitialize]
        public void CustomerInitialize()
        {
            this.hBCustomerBLMock = new Mock<IHBCustomerBL>();
        }

        /// <summary>
        /// Customer Registration Test.
        /// </summary>
        [TestMethod]
        public void Customer_Registration_Test()
        {
            // Arrange
            this.dictionary.Add("CustomerFirstName", "Ahamed");
            this.dictionary.Add("CustomerLastName", "Ayathullah");
            this.dictionary.Add("CustomerMobile", 93737373737);
            this.dictionary.Add("CustomerEmail", "ahamed@gmail.com");
            this.dictionary.Add("CustomerPassword", "737373");
            var expectedValue = 1;

            // Act
            var actualValue = this.hBCustomerBL.RegisterCustomer<Customer>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Add Shipping Address Test.
        /// </summary>
        [TestMethod]
        public void Add_Shipping_Address_Test()
        {
            // Arrange
            this.dictionary.Add("ShippingAddressCustomerId", 2);
            this.dictionary.Add("ShippingAddressMobile", 93737373737);
            this.dictionary.Add("ShippingAddressStreet", "V.O.C Street");
            this.dictionary.Add("ShippingAddressLandMark", "Chennai Mobiles");
            this.dictionary.Add("ShippingAddressCity", "Chennai");
            this.dictionary.Add("ShippingAddressZipcode", "737373");
            this.dictionary.Add("ShippingAddressState", "Tamilnadu");
            var expectedValue = 1;

            // Act
            var actualValue = this.hBCustomerBL.AddShippingAddress<ShippingAddress>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Update Shipping Address Test.
        /// </summary>
        [TestMethod]
        public void Update_Shipping_Address_Test()
        {
            // Arrange
            this.dictionary.Add("ShippingAddressCustomerId", 1);
            this.dictionary.Add("ShippingAddressMobile", 6474744474);
            this.dictionary.Add("ShippingAddressStreet", "V.O.C Street");
            this.dictionary.Add("ShippingAddressLandMark", "Madras Mobiles");
            this.dictionary.Add("ShippingAddressCity", "Chennai");
            this.dictionary.Add("ShippingAddressZipcode", "737373");
            this.dictionary.Add("ShippingAddressState", "Tamilnadu");
            var expectedValue = 1;

            // Act
            var actualValue = this.hBCustomerBL.AddShippingAddress<ShippingAddress>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Get Customer Details.
        /// </summary>
        [TestMethod]
        public void Get_Customer_Details()
        {

        }
    }
}
