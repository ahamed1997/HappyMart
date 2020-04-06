// <copyright file="PropertyTest.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyTest.HappyBuy.DAL
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using HappyBuyDAL;
    using HappyBuyDAL.Models;
    using Microsoft.Extensions.Configuration;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Moq;

    /// <summary>
    /// Properties Test.
    /// </summary>
    [TestClass]
    public class PropertyTest
    {
        private Customer customer;
        private Payment payment;
        private Orders orders;
        private Cart cart;
        private OrderDetails orderDetails;
        private Product product;
        private OrderStatus orderStatus;
        private PaymentMode paymentMode;
        private Category category;
        private SubCategory subCategory;
        private PaymentDetails paymentDetails;
        private ShippingAddress shippingAddress;
        private Dictionary<string, object> dictionary;
        private List<Customer> listCustomer;

        /// <summary>
        /// Initializations for test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.dictionary = new Dictionary<string, object>();
            this.cart = new Cart();
            this.customer = new Customer();
            this.payment = new Payment();
            this.orders = new Orders();
            this.orderDetails = new OrderDetails();
            this.product = new Product();
            this.orderStatus = new OrderStatus();
            this.paymentMode = new PaymentMode();
            this.category = new Category();
            this.subCategory = new SubCategory();
            this.paymentDetails = new PaymentDetails();
            this.shippingAddress = new ShippingAddress();
        }

        /// <summary>
        /// Customer Entity Test.
        /// </summary>
        [TestMethod]
        public void Customer_Entity_Test()
        {
            // Arrange
            this.customer.CustomerFirstName = "Ahamed";
            this.customer.CustomerLastName = "Ayathullah";
            this.customer.CustomerId = 2;
            this.customer.CustomerMobile = "9842717493";
            this.customer.CustomerEmail = "ahamed@gmail.com";
            this.customer.CustomerPassword = "123456";
            var expected = "Ahamed" + "Ayathullah" + 2 + "9842717493" + "ahamed@gmail.com" + "123456";

            // Act
            var actualValue = this.customer.CustomerFirstName + this.customer.CustomerLastName + this.customer.CustomerId + this.customer.CustomerMobile + this.customer.CustomerEmail + this.customer.CustomerPassword;

            // Assert
            Assert.AreEqual(expected, actualValue);
        }

        /// <summary>
        /// Product Entity Test.
        /// </summary>
        [TestMethod]
        public void Product_Entity_Test()
        {
            // Arrange
            this.product.ProductId = 1;
            this.product.ProductName = "Samsung M31";
            this.product.ProductSubCategoryId = 2;
            this.product.ProductDescription = "Its a Monster Mobile";
            this.product.ProductSpecification = "6000 MAH, 128 GB, 62MP";
            this.product.ProductOptions = "EMI Available";
            this.product.ProductPrice = 14999;
            this.product.ProductQuantity = 50;
            this.product.ProductIsActive = true;
            this.product.ProductImageURL = "NOTFOUND";
            this.product.ProductBrand = "Sansung";
            var expected = 1 + "Samsung M31" + 2 + "Its a Monster Mobile" + "6000 MAH, 128 GB, 62MP" + "EMI Available" + 14999 + 50 + true + "NOTFOUND" + "Sansung";

            // Act
            var actual = this.product.ProductId + this.product.ProductName + this.product.ProductSubCategoryId + this.product.ProductDescription + this.product.ProductSpecification + this.product.ProductOptions + this.product.ProductPrice + this.product.ProductQuantity + this.product.ProductIsActive + this.product.ProductImageURL + this.product.ProductBrand;

            // Assert
            Assert.AreEqual(actual, expected);
        }

        /// <summary>
        /// Category Entity Test.
        /// </summary>
        [TestMethod]
        public void Category_Entity_Test()
        {
            // Arrange
            this.category.CategoryId = 1;
            this.category.CategoryName = "Samsung";
            var expected = 1 + "Samsung";

            // Act
            var actual = this.category.CategoryId + this.category.CategoryName;

            // Assert
            Assert.AreEqual(actual, expected);
        }

        /// <summary>
        /// Shipping Address Entity Test.
        /// </summary>
        [TestMethod]
        public void Shipping_Address_Entity_Test()
        {
            // Arrange
            this.shippingAddress.ShippingAddressId = 1;
            this.shippingAddress.ShippingAddressCustomerId = 1;
            this.shippingAddress.ShippingAddressStreet = "7th Street";
            this.shippingAddress.ShippingAddressLandMark = "Chennai Mobiles";
            this.shippingAddress.ShippingAddressCity = "Chennai";
            this.shippingAddress.ShippingAddressState = "TAMILNADU";
            this.shippingAddress.ShippingAddressMobile = "9836373733";
            this.shippingAddress.ShippingAddressZipcode = "600001";
            var expected = 1 + 1 + "7th Street" + "Chennai Mobiles" + "Chennai" + "TAMILNADU" + "9836373733" + "600001";

            // Act
            var actual = this.shippingAddress.ShippingAddressId + this.shippingAddress.ShippingAddressCustomerId + this.shippingAddress.ShippingAddressStreet + this.shippingAddress.ShippingAddressLandMark + this.shippingAddress.ShippingAddressCity + this.shippingAddress.ShippingAddressState + this.shippingAddress.ShippingAddressMobile + this.shippingAddress.ShippingAddressZipcode;

            // Assert
            Assert.AreEqual(actual, expected);
        }

        /// <summary>
        /// Payment Details Entity Test.
        /// </summary>
        [TestMethod]
        public void Payment_Details_Entity_Test()
        {
            // Arrange
            this.paymentDetails.PaymentDetailsId = 1;
            this.paymentDetails.PaymentDetailsPaymentId = 1;
            this.paymentDetails.PaymentDetailsPaymentModeId = 2;
            this.paymentDetails.PaymentDetailsCardHolderName = "XYZ";
            this.paymentDetails.PaymentDetailsCardNumber = "7896789667899876";
            this.paymentDetails.PaymentDetailsCVV = "123";
            this.paymentDetails.PaymentDetailsExpiryMonth = "12";
            this.paymentDetails.PaymentDetailsExpiryYear = "2025";
            this.paymentDetails.PaymentDetailsDateOfPayment = default(DateTime);
            this.paymentDetails.PaymentDetailsAmountPaid = 12345;

            var expected = 1 + 1 + 2 + "XYZ" + "7896789667899876" + "123" + "12" + "2025" + default(DateTime) + 12345;

            // Act
            var actual = this.paymentDetails.PaymentDetailsId + this.paymentDetails.PaymentDetailsPaymentId + this.paymentDetails.PaymentDetailsPaymentModeId + this.paymentDetails.PaymentDetailsCardHolderName + this.paymentDetails.PaymentDetailsCardNumber + this.paymentDetails.PaymentDetailsCVV + this.paymentDetails.PaymentDetailsExpiryMonth + this.paymentDetails.PaymentDetailsExpiryYear + this.paymentDetails.PaymentDetailsDateOfPayment + this.paymentDetails.PaymentDetailsAmountPaid;

            // Assert
            Assert.AreEqual(actual, expected);
        }

        /// <summary>
        /// Order Details Entity Test.
        /// </summary>
        [TestMethod]
        public void Order_Details_Entity_Test()
        {
            // Arrange
            this.orderDetails.OrderDetailsId = 1;
            this.orderDetails.OrderDetailsOrdersId = 1;
            this.orderDetails.OrderDetailsProductId = 1;
            this.orderDetails.OrderDetailsQuantity = 2;
            this.orderDetails.OrderDetailsPrice = 23000;
            var expected = 1 + 1 + 1 + 2 + 23000;

            // Act
            var actual = this.orderDetails.OrderDetailsId + this.orderDetails.OrderDetailsOrdersId + this.orderDetails.OrderDetailsProductId + this.orderDetails.OrderDetailsQuantity + this.orderDetails.OrderDetailsPrice;

            // Assert
            Assert.AreEqual(actual, expected);
        }

        /// <summary>
        /// Cart Entity Test.
        /// </summary>
        [TestMethod]
        public void Cart_Entity_Test()
        {
            // Arrange
            this.cart.CartId = 1;
            this.cart.CartCustomerId = 1;
            this.cart.CartProductId = 1;
            this.cart.CartQuantity = 2;
            this.cart.CartPrice = 23000;
            var expected = 1 + 1 + 1 + 2 + 23000;

            // Act
            var actual = this.cart.CartId + this.cart.CartCustomerId + this.cart.CartProductId + this.cart.CartQuantity + this.cart.CartPrice;

            // Assert
            Assert.AreEqual(actual, expected);
        }

        /// <summary>
        /// Orders Entity Test.
        /// </summary>
        [TestMethod]
        public void Orders_Entity_Test()
        {
            // Arrange
            this.orders.OrdersId = 1;
            this.orders.OrdersCustomerId = 1;
            this.orders.OrdersOrderStatusId = 1;
            this.orders.OrdersShippingAddressId = 2;
            this.orders.OrdersDateOfOrder = default(DateTime);
            this.orders.OrdersDateOfOrderCompleted = default(DateTime);
            var expected = 1 + 1 + 1 + 2 + "seperator" + default(DateTime) + default(DateTime);

            // Act
            var actual = this.orders.OrdersId + this.orders.OrdersCustomerId + this.orders.OrdersOrderStatusId + this.orders.OrdersShippingAddressId + "seperator" + this.orders.OrdersDateOfOrder + this.orders.OrdersDateOfOrderCompleted;

            // Assert
            Assert.AreEqual(actual, expected);
        }

        /// <summary>
        /// Orders Status Entity Test.
        /// </summary>
        [TestMethod]
        public void Orders_Status_Entity_Test()
        {
            // Arrange
            this.orderStatus.OrdersStatusId = 1;
            this.orderStatus.OrdersStatusState = "Shipped";
            var expected = 1 + "Shipped";

            // Act
            var actual = this.orderStatus.OrdersStatusId + this.orderStatus.OrdersStatusState;

            // Assert
            Assert.AreEqual(actual, expected);
        }

        /// <summary>
        /// SubCategory Entity Test.
        /// </summary>
        [TestMethod]
        public void SubCategory_Entity_Test()
        {
            // Arrange
            this.subCategory.SubCategoryId = 1;
            this.subCategory.SubCategoryCategoryId = 1;
            this.subCategory.SubCategoryName = "Mobiles";
            var expected = 1 + 1 + "Mobiles";

            // Act
            var actual = this.subCategory.SubCategoryId + this.subCategory.SubCategoryCategoryId + this.subCategory.SubCategoryName;

            // Assert
            Assert.AreEqual(actual, expected);
        }

        /// <summary>
        /// PaymentMode Entity Test.
        /// </summary>
        [TestMethod]
        public void Payment_Mode_Entity_Test()
        {
            // Arrange
            this.paymentMode.PaymentModeId = 1;
            this.paymentMode.PaymentModeModeOfPayment = "Cash on Delivery";
            var expected = 1 + "Cash on Delivery";

            // Act
            var actual = this.paymentMode.PaymentModeId + this.paymentMode.PaymentModeModeOfPayment;

            // Assert
            Assert.AreEqual(actual, expected);
        }

        /// <summary>
        /// Payment Entity Test.
        /// </summary>
        [TestMethod]
        public void Payment_Entity_Test()
        {
            // Arrange
            this.payment.PaymentId = 1;
            this.payment.PaymentOrderId = 2;
            var expected = 1 + 2;

            // Act
            var actual = this.payment.PaymentId + this.payment.PaymentOrderId;

            // Assert
            Assert.AreEqual(actual, expected);
        }
    }
}
