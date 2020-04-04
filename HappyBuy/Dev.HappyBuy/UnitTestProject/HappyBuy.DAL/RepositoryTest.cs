using HappyBuyDAL;
using HappyBuyDAL.Interfaces;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;

namespace HappyBuyTest.HappyBuy.DAL
{
    [TestClass]
    public class RepositoryTest
    {
        private Mock<IHappyBuyRepository> happyBuyRepositoryMock;
        private Mock<IDevHappyBuyDAL> devHappyBuyDALMock;
        private IHappyBuyRepository happyBuyRepository;
        private Dictionary<string, object> dictionary;
        private List<Customer> listCustomer;
        

        [TestInitialize]
        public void TestInitialze()
        {

            this.devHappyBuyDALMock = new Mock<IDevHappyBuyDAL>();
            this.happyBuyRepositoryMock = new Mock<IHappyBuyRepository>();

            this.happyBuyRepository = this.happyBuyRepositoryMock.Object;
            this.dictionary = new Dictionary<string, object>();

            this.listCustomer = new List<Customer>();
        }

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
            this.devHappyBuyDALMock.Setup(x => x.ExecuteNonQuery<Customer>(dictionary, commandText)).Returns(3);
            int expectedValue = 3;

            // Act
            int actualValue = this.happyBuyRepository.AddDetails<Customer>(this.dictionary, 3);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

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
            this.devHappyBuyDALMock.Setup(x => x.ExecuteNonQuery<Customer>(dictionary, commandText)).Returns(2);
            int expectedValue = 2;

            // Act
            int actualValue = this.happyBuyRepository.UpdateDetails<Customer>(this.dictionary, 15);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        [TestMethod]
        public void Delete_Details_Test()
        {
            // Arrange
            string commandText = "USP_RemoveCartItems";
            this.dictionary.Add("CartId", 1);
            this.happyBuyRepositoryMock.Setup(x => x.DeleteDetails<Cart>(this.dictionary, 12)).Returns(1);
            this.devHappyBuyDALMock.Setup(x => x.ExecuteNonQuery<Cart>(dictionary, commandText)).Returns(1);
            int expectedValue = 1;

            // Act
            int actualValue = this.happyBuyRepository.DeleteDetails<Cart>(this.dictionary, 12);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);

        }

        [TestMethod]
        public void Get_One_Detail_Test()
        {
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
            
            this.happyBuyRepositoryMock.Setup(x => x.GetOneDetail<Customer>(this.dictionary, 4)).Returns(listCustomer);            
            List<Customer> expectedValuelist = listCustomer;

            // Act
            List<Customer> actualValuelist = this.happyBuyRepository.GetOneDetail<Customer>(this.dictionary, 4);

            // Assert
            Assert.AreSame(actualValuelist, expectedValuelist);

        }

        [TestMethod]
        public void Get_All_Details_Test()
        {
            this.dictionary.Add("CustomerEmail", "ahamed@gmail.com");
            this.dictionary.Add("CustomerPassword", "1234546");
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

            this.happyBuyRepositoryMock.Setup(x => x.GetAllDetails<Customer>(this.dictionary, 18)).Returns(listCustomer);
            List<Customer> expectedValuelist = listCustomer;

            // Act
            List<Customer> actualValuelist = this.happyBuyRepository.GetAllDetails<Customer>(this.dictionary, 18);

            // Assert
            Assert.AreSame(actualValuelist, expectedValuelist);

        }
    }
}
