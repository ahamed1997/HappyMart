// <copyright file="HappyBuyDAL.Test.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyTests
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using global::HappyBuyDAL;
    using global::HappyBuyDAL.Interfaces;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Moq;

    /// <summary>
    /// Data Access layer Test.
    /// </summary>
    public class HappyBuyDAL
    {
        private readonly Dictionary<string, object> dictionary;
        private Mock<IDevHappyBuyDAL> devHappyBuyDAL;

        /// <summary>
        /// Test Initialization.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.devHappyBuyDAL = new Mock<IDevHappyBuyDAL>();
        }

        /// <summary>
        /// Add Details test in Repository.
        /// </summary>
        [TestMethod]
        public void Add_Details_Test()
        {
            // Arrange
            this.dictionary.Add("CustomerFirstName", "Ahamed");
            this.dictionary.Add("CustomerLastName", "Ayathullah");
            this.dictionary.Add("CustomerMobile", 93737373737);
            this.dictionary.Add("CustomerEmail", "ahamed@gmail.com");
            this.dictionary.Add("CustomerPassword", "737373");
            string storedProcedure = "USP_CustomerRegister";
            var expectedValue = 1;

            // Act
            var actualValue = this.devHappyBuyDAL.Setup(x => x.ExecuteNonQuery<Customer>(this.dictionary, storedProcedure));

            // Assert
            Assert.AreEqual(expectedValue, actualValue);
        }
    }
}
