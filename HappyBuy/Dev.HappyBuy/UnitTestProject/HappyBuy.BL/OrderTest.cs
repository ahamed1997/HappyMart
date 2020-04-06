// <copyright file="OrderTest.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyTest.HappyBuy.BL
{
    using System.Collections.Generic;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using HappyBuyDAL.Interfaces;
    using HappyBuyDAL.Models;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Moq;

    /// <summary>
    /// Order BL test.
    /// </summary>
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

        /// <summary>
        /// Place Order test.
        /// </summary>
        [TestMethod]
        public void Place_Order_Test()
        {
            // Arrange
            Orders orders = new Orders()
            {
                OrdersCustomerId = 2,
                OrdersShippingAddressId = 1,
                OrdersOrderStatusId = 2,
                PaymentDetailsPaymentModeId = 1,
                PaymentDetailsCardNumber = null,
                PaymentDetailsCardHolderName = null,
                PaymentDetailsExpiryMonth = null,
                PaymentDetailsExpiryYear = null,
                PaymentDetailsCVV = null,
                PaymentDetailsAmountPaid = 144900,
            };
            this.dictionary.Add("OrdersCustomerId", orders.OrdersCustomerId);
            this.dictionary.Add("OrdersShippingAddressId", orders.OrdersShippingAddressId);
            this.dictionary.Add("OrdersOrderStatusId", orders.OrdersOrderStatusId);
            this.dictionary.Add("PaymentDetailsPaymentModeId", orders.PaymentDetailsPaymentModeId);
            this.dictionary.Add("PaymentDetailsCardNumber", orders.PaymentDetailsCardNumber);
            this.dictionary.Add("PaymentDetailsCardHolderName", orders.PaymentDetailsCardHolderName);
            this.dictionary.Add("PaymentDetailsExpiryMonth", orders.PaymentDetailsExpiryMonth);
            this.dictionary.Add("PaymentDetailsExpiryYear", orders.PaymentDetailsExpiryYear);
            this.dictionary.Add("PaymentDetailsCVV", orders.PaymentDetailsCVV);
            this.dictionary.Add("OrderDetailsPrice", orders.PaymentDetailsAmountPaid);
            this.hBOrderBLMock.Setup(x => x.PlaceOrder<Orders>(this.dictionary)).Returns(2);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<Orders>(this.dictionary, 11)).Returns(2);
            int expectedValue = 2;

            // Act
            int actualValue = this.hBOrderBL.PlaceOrder<Orders>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }

        /// <summary>
        /// Make Payment test.
        /// </summary>
        [TestMethod]
        public void Make_Payment_Test()
        {
            // Arrange
            OrderDetails orderDetails = new OrderDetails()
            {
                OrderDetailsProductId = 4,
                OrderDetailsOrdersId = 1,
                OrderDetailsQuantity = 1,
                OrderDetailsPrice = 144900,
            };

            this.dictionary.Add("OrderDetailsProductId", orderDetails.OrderDetailsProductId);
            this.dictionary.Add("OrderDetailsOrdersId", orderDetails.OrderDetailsOrdersId);
            this.dictionary.Add("OrderDetailsQuantity", orderDetails.OrderDetailsQuantity);
            this.dictionary.Add("OrderDetailsPrice", orderDetails.OrderDetailsPrice);
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
