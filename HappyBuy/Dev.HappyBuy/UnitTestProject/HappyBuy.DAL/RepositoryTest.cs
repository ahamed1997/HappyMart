// <copyright file="RepositoryTest.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyTest.HappyBuy.DAL
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using HappyBuyDAL;
    using HappyBuyDAL.Interfaces;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Moq;

    /// <summary>
    /// Repository test.
    /// </summary>
    [TestClass]
    public class RepositoryTest
    {
        private Mock<IHappyBuyRepository> happyBuyRepositoryMock;
        private Mock<IDevHappyBuyDAL> devHappyBuyDALMock;
        private IHappyBuyRepository happyBuyRepository;
        private Dictionary<string, object> dictionary;
        private List<Customer> listCustomer;

        /// <summary>
        /// Test Initialization.
        /// </summary>
        [TestInitialize]
        public void TestInitialze()
        {
            this.devHappyBuyDALMock = new Mock<IDevHappyBuyDAL>();
            this.happyBuyRepositoryMock = new Mock<IHappyBuyRepository>();

            this.happyBuyRepository = this.happyBuyRepositoryMock.Object;
            this.dictionary = new Dictionary<string, object>();

            this.listCustomer = new List<Customer>();
        }

        /// <summary>
        /// Add details test.
        /// </summary>
        [TestMethod]
        public void Add_Details_Test()
        {
            // Arrange
            string commandText = "USP_CustomerRegister";
            this.dictionary.Add("CustomerFirstName", "Third");
            this.dictionary.Add("CustomerLastName", "Customer");
            this.dictionary.Add("CustomerMobile", 93737373737);
            this.dictionary.Add("CustomerEmail", "ahamed973@gmail.com");
            this.dictionary.Add("CustomerPassword", "737373");

            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<Customer>(this.dictionary, 3)).Returns(3);
            this.devHappyBuyDALMock.Setup(x => x.ExecuteNonQuery<Customer>(this.dictionary, commandText)).Returns(3);
            int expectedValue = 3;

            // Act
            int actualValue = this.happyBuyRepository.AddDetails<Customer>(this.dictionary, 3);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Update details test.
        /// </summary>
        [TestMethod]
        public void Update_Details_Test()
        {
            // Arrange
            string commandText = "USP_UpdateShippingAddress";
            this.dictionary.Add("ShippingAddressId", 2);
            this.dictionary.Add("ShippingAddressMobile", 93737373737);
            this.dictionary.Add("ShippingAddressStreet", "V.O.C Street");
            this.dictionary.Add("ShippingAddressLandMark", "Chennai Mobiles");
            this.dictionary.Add("ShippingAddressCity", "Chennai");
            this.dictionary.Add("ShippingAddressZipcode", "737373");
            this.dictionary.Add("ShippingAddressState", "Tamilnadu");
            this.happyBuyRepositoryMock.Setup(x => x.UpdateDetails<Customer>(this.dictionary, 15)).Returns(2);
            this.devHappyBuyDALMock.Setup(x => x.ExecuteNonQuery<Customer>(this.dictionary, commandText)).Returns(2);
            int expectedValue = 2;

            // Act
            int actualValue = this.happyBuyRepository.UpdateDetails<Customer>(this.dictionary, 15);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Delete Details test.
        /// </summary>
        [TestMethod]
        public void Delete_Details_Test()
        {
            // Arrange
            string commandText = "USP_RemoveCartItems";
            this.dictionary.Add("CartId", 1);
            this.happyBuyRepositoryMock.Setup(x => x.DeleteDetails<Cart>(this.dictionary, 12)).Returns(1);
            this.devHappyBuyDALMock.Setup(x => x.ExecuteNonQuery<Cart>(this.dictionary, commandText)).Returns(1);
            int expectedValue = 1;

            // Act
            int actualValue = this.happyBuyRepository.DeleteDetails<Cart>(this.dictionary, 12);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Ge One detail test.
        /// </summary>
        [TestMethod]
        public void Get_One_Detail_Test()
        {
            this.dictionary.Add("CustomerId", "1");
            this.listCustomer = new List<Customer>()
            {
                new Customer()
                {
                    CustomerId = 1,
                    CustomerFirstName = "Ahamed",
                    CustomerLastName = "Ayathullah",
                    CustomerMobile = "9445774250",
                    CustomerEmail = "ahamed@gmail.com",
                },
            };
            this.happyBuyRepositoryMock.Setup(x => x.GetOneDetail<Customer>(this.dictionary, 4)).Returns(this.listCustomer);
            List<Customer> expectedValuelist = this.listCustomer;

            // Act
            List<Customer> actualValuelist = this.happyBuyRepository.GetOneDetail<Customer>(this.dictionary, 4);

            // Assert
            Assert.AreSame(actualValuelist, expectedValuelist);
        }

        /// <summary>
        /// Get all details test.
        /// </summary>
        [TestMethod]
        public void Get_All_Details_Test()
        {
            this.dictionary.Add("CustomerEmail", "ahamed@gmail.com");
            this.dictionary.Add("CustomerPassword", "1234546");
            this.listCustomer = new List<Customer>()
            {
                new Customer()
                {
                    CustomerId = 1,
                    CustomerFirstName = "Ahamed",
                    CustomerLastName = "Ayathullah",
                    CustomerMobile = "9445774250",
                    CustomerEmail = "ahamed@gmail.com",
                },
            };

            this.happyBuyRepositoryMock.Setup(x => x.GetAllDetails<Customer>(this.dictionary, 18)).Returns(this.listCustomer);
            List<Customer> expectedValuelist = this.listCustomer;

            // Act
            List<Customer> actualValuelist = this.happyBuyRepository.GetAllDetails<Customer>(this.dictionary, 18);

            // Assert
            Assert.AreSame(actualValuelist, expectedValuelist);
        }
    }
}
