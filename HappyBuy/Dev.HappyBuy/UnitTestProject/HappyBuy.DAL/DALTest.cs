using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Text;

namespace HappyBuyTest.HappyBuy.DAL
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using HappyBuyDAL;
    using HappyBuyDAL.Interfaces;
    using Microsoft.Extensions.Configuration;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Moq;

    /// <summary>
    /// Data Access layer Test.
    /// </summary>
    [TestClass]
    public class DALTest
    {
        private IDevHappyBuyDAL devHappyBuyDAL;
        private Mock<IDevHappyBuyDAL> devHappyBuyDALMock;
        private Dictionary<string, object> dictionary;
        private Mock<IConfiguration> configurationMock;
        private List<Customer> listCustomer;

        /// <summary>
        /// Test Initialization.
        /// </summary>
        [TestInitialize]
        public void TestInitialze()
        {

            this.configurationMock = new Mock<IConfiguration>();
            this.devHappyBuyDALMock = new Mock<IDevHappyBuyDAL>();

            this.devHappyBuyDAL = this.devHappyBuyDALMock.Object;
            this.dictionary = new Dictionary<string, object>();

        }

        /// <summary>
        /// Execute Non Query Test.
        /// </summary>
        [TestMethod]
        public void Execute_Non_Query_Test()
        {
            // Arrange
            string commandText = "USP_CustomerRegister";
            this.dictionary.Add("CustomerFirstName", "Third");
            this.dictionary.Add("CustomerLastName", "Customer");
            this.dictionary.Add("CustomerMobile", 93737373737);
            this.dictionary.Add("CustomerEmail", "ahamed973@gmail.com");
            this.dictionary.Add("CustomerPassword", "737373");

            this.devHappyBuyDALMock.Setup(x => x.ExecuteNonQuery<Customer>(dictionary, commandText)).Returns(3);            
            int expectedValue = 3;

            // Act
            int actualValue = this.devHappyBuyDAL.ExecuteNonQuery<Customer>(dictionary, commandText);

            // Assert
            Assert.AreEqual(actualValue, expectedValue);
        }

        /// <summary>
        /// Execute Reader Test.
        /// </summary>
        [TestMethod]
        public void Execute_Reader_Test()
        {
            //  Arrange
            string commandText = "USP_GetCustomerDetails";
            this.dictionary.Add("CustomerId", "1");
            this.listCustomer = new List<Customer>()
            {
                new Customer()
                {
                    CustomerId =1,
                    CustomerFirstName = "Ahamed",
                    CustomerLastName = "Ayathullah",
                    CustomerMobile = "9445774250",
                    CustomerEmail = "ahamed@gmail.com"
                }
            };

            this.devHappyBuyDALMock.Setup(x => x.ExecuteReader<Customer>(this.dictionary, commandText)).Returns(listCustomer);
            List<Customer> expectedValuelist = listCustomer;

            // Act
            List<Customer> actualValuelist = this.devHappyBuyDAL.ExecuteReader<Customer>(this.dictionary, commandText);

            // Assert
            Assert.AreSame(actualValuelist, expectedValuelist);
        }
    }
}
