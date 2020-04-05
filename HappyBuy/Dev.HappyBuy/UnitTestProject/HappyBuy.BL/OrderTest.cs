using HappyBuyBL.HB.BL.Interfaces;
using HappyBuyDAL.Interfaces;
using HappyBuyDAL.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;

namespace HappyBuyTest.HappyBuy.BL
{
    [TestClass]
    public class OrderTest
    {
        private Mock<IHappyBuyRepository> happyBuyRepositoryMock;
        private IHBOrderBL hBOrderBL;
        private Mock<IHBOrderBL> hBOrderBLMock;
        private Dictionary<string, object> dictionary;
        

        /// <summary>
        /// Test Initialization.
        /// </summary>
        [TestInitialize]
        public void TestInitialze()
        {
            

            this.happyBuyRepositoryMock = new Mock<IHappyBuyRepository>();
            this.hBOrderBLMock = new Mock<IHBOrderBL>();

            this.hBOrderBL = this.hBOrderBLMock.Object;
            this.dictionary = new Dictionary<string, object>();
        }

        [TestMethod]
        public void Place_Order_Test()
        {
            // Arrange
            dictionary.Add("OrdersCustomerId", 2);
            dictionary.Add("OrdersShippingAddressId", 1);
            dictionary.Add("OrdersOrderStatusId", 2);
            dictionary.Add("PaymentDetailsPaymentModeId", 1);
            dictionary.Add("PaymentDetailsCardNumber", "COD");
            dictionary.Add("PaymentDetailsCardHolderName", "COD");
            dictionary.Add("PaymentDetailsExpiryMonth", "COD");
            dictionary.Add("PaymentDetailsExpiryYear", "COD");
            dictionary.Add("PaymentDetailsCVV", "COD");
            dictionary.Add("OrderDetailsPrice", 144900.00);
            this.hBOrderBLMock.Setup(x => x.PlaceOrder<OrderPayment>(this.dictionary)).Returns(2);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<OrderPayment>(this.dictionary,11)).Returns(2);
            int expectedValue = 2;

            // Act
            int actualValue = this.hBOrderBL.PlaceOrder<OrderPayment>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);


        }
        [TestMethod]
        public void Make_Payment_Test()
        {
            // Arrange
            this.dictionary.Add("OrderDetailsProductId", 4);
            this.dictionary.Add("OrderDetailsOrdersId", 1);
            this.dictionary.Add("OrderDetailsQuantity", 1);
            this.dictionary.Add("OrderDetailsPrice", 144900.00);
            this.hBOrderBLMock.Setup(x => x.MakePayment<OrderDetails>(this.dictionary)).Returns(2);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<OrderDetails>(this.dictionary, 19)).Returns(2);
            int expectedValue = 2;

            // Act
            int actualValue = this.hBOrderBL.MakePayment<OrderDetails>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }
    }
}
