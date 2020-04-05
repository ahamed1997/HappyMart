namespace HappyBuyTest
{
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using HappyBuyDAL.Interfaces;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Moq;
    using System.Collections.Generic;

    /// <summary>
    /// Customer Entity Test Case.
    /// </summary>
    [TestClass]
    public class CustomerTest
    {
        private Mock<IHappyBuyRepository> happyBuyRepositoryMock;
        private IHBCustomerBL hBCustomerBL;
        private Mock<IHBCustomerBL> hBCustomerBLMock;
        private Dictionary<string, object> dictionary;
        private List<Customer> listCustomer;

        /// <summary>
        /// Test Initialization.
        /// </summary>
        [TestInitialize]
        public void TestInitialze()
        {
            this.listCustomer = new List<Customer>();

            this.happyBuyRepositoryMock = new Mock<IHappyBuyRepository>();
            this.hBCustomerBLMock = new Mock<IHBCustomerBL>();

            this.hBCustomerBL = this.hBCustomerBLMock.Object;
            this.dictionary = new Dictionary<string, object>();
        }

        /// <summary>
        /// Customer Registration Test.
        /// </summary>
        [TestMethod]
        public void Customer_Registration_Test()
        {
            // Arrange
            this.dictionary.Add("CustomerFirstName", "Third");
            this.dictionary.Add("CustomerLastName", "Customer");
            this.dictionary.Add("CustomerMobile", 93737373737);
            this.dictionary.Add("CustomerEmail", "ahamed973@gmail.com");
            this.dictionary.Add("CustomerPassword", "737373");
            this.hBCustomerBLMock.Setup(x => x.RegisterCustomer<Customer>(this.dictionary)).Returns(3);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<Customer>(this.dictionary, 3)).Returns(3);
            int expectedValue = 3;

            // Act
            int actualValue = this.hBCustomerBL.RegisterCustomer<Customer>(this.dictionary);

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
            this.hBCustomerBLMock.Setup(x => x.AddShippingAddress<ShippingAddress>(this.dictionary)).Returns(3);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<ShippingAddress>(this.dictionary, 2)).Returns(3);
            int expectedValue = 3;


            // Act
            int actualValue = this.hBCustomerBL.AddShippingAddress<ShippingAddress>(this.dictionary);

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
            this.dictionary.Add("ShippingAddressId", 2);
            this.dictionary.Add("ShippingAddressMobile", 93737373737);
            this.dictionary.Add("ShippingAddressStreet", "V.O.C Street");
            this.dictionary.Add("ShippingAddressLandMark", "Chennai Mobiles");
            this.dictionary.Add("ShippingAddressCity", "Chennai");
            this.dictionary.Add("ShippingAddressZipcode", "737373");
            this.dictionary.Add("ShippingAddressState", "Tamilnadu");
            this.hBCustomerBLMock.Setup(x => x.UpdateShippingAddress<ShippingAddress>(this.dictionary)).Returns(2);
            this.happyBuyRepositoryMock.Setup(x => x.UpdateDetails<ShippingAddress>(this.dictionary, 15)).Returns(2);
            int expectedValue = 2;

            // Act
            int actualValue = this.hBCustomerBL.UpdateShippingAddress<ShippingAddress>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Get Customer Details.
        /// </summary>
        [TestMethod]
        public void Get_Customer_Details()
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
            this.hBCustomerBLMock.Setup(x => x.GetMyProfile<Customer>(this.dictionary)).Returns(listCustomer);
            this.happyBuyRepositoryMock.Setup(x => x.GetOneDetail<Customer>(this.dictionary, 4)).Returns(listCustomer);
            List<Customer> expectedValuelist = listCustomer;

            // Act
            List<Customer> actualValuelist = this.hBCustomerBL.GetMyProfile<Customer>(this.dictionary);

            // Assert
            Assert.AreSame(actualValuelist, expectedValuelist);

        }

        /// <summary>
        /// LogIn Validation Test.
        /// </summary>
        [TestMethod]
        public void LogIn_Validation_Test()
        {
           
            // Arrange
           
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
            this.hBCustomerBLMock.Setup(x => x.LogInValidation<Customer>(this.dictionary)).Returns(listCustomer);
            this.happyBuyRepositoryMock.Setup(x => x.GetAllDetails<Customer>(this.dictionary, 18)).Returns(listCustomer);
            List<Customer> expectedValuelist = listCustomer;

            // Act
            List<Customer> actualValuelist = this.hBCustomerBL.LogInValidation<Customer>(this.dictionary);

            // Assert
            Assert.AreSame(actualValuelist, expectedValuelist);
        }
    }
}
