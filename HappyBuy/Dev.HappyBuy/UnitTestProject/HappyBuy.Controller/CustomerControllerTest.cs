using HappyBuy.ECommerceProject.Controllers;
using HappyBuyBL.HB.BL.Interfaces;
using HappyBuyDAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;

namespace HappyBuyTest.HappyBuy.Controller
{
    [TestClass]
    public class CustomerControllerTest
    {
        private Mock<IHBCustomerBL> hbCustomerBLMock;
        private ICustomerController customerController;
        private Mock<ICustomerController> customerControllerMock;
        private Dictionary<string, object> dictionary;
        private Customer customer;

        /// <summary>
        /// Test Initialization.
        /// </summary>
        [TestInitialize]
        public void TestInitialze()
        {           

            this.hbCustomerBLMock = new Mock<IHBCustomerBL>();
            this.customerControllerMock = new Mock<ICustomerController>();

            this.customerController = this.customerControllerMock.Object;
            this.dictionary = new Dictionary<string, object>();
        }

        [TestMethod]
        public void Add_Customer_Test()
        {
            // Arrange
            customer = new Customer()
            {
                CustomerFirstName = "Third",
                CustomerLastName = "Insert",
                CustomerMobile = "837467364",
                CustomerEmail = "ahamed973@gmail.com",
                CustomerPassword = "737373"

            };
            this.dictionary.Add("CustomerFirstName", "Third");
            this.dictionary.Add("CustomerLastName", "Insert");
            this.dictionary.Add("CustomerMobile", 837467364);
            this.dictionary.Add("CustomerEmail", "ahamed973@gmail.com");
            this.dictionary.Add("CustomerPassword", "737373");
            this.hbCustomerBLMock.Setup(x => x.RegisterCustomer<Customer>(this.dictionary)).Returns(3);
            this.customerControllerMock.Setup(x => x.RegisterCustomer(customer)).Returns(3);
            int expectedValue = 3;

            // Act
            int actualValue = this.customerController.RegisterCustomer(customer);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }
    }
}
