// <copyright file="ProductTest.cs" company="PlaceholderCompany">
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
    /// Product Business Layer Test.
    /// </summary>
    public class ProductTest
    {
        private Mock<IHBProductBL> hBProductBLMock;
        private IHBProductBL hBProductBL;
        private Dictionary<string, object> dictionary;

        /// <summary>
        /// Product Test Initialize.
        /// </summary>
        [TestInitialize]
        public void TestInitialze()
        {
            this.hBProductBLMock = new Mock<IHBProductBL>();
        }

        /// <summary>
        /// Insert Category Test.
        /// </summary>
        [TestMethod]
        public void Insert_Category_Test()
        {
            // Arrange
            this.dictionary.Add("CategoryName", "Electronics");
            var expectedvalue = 1;

            // Act
            var actualValue = this.hBProductBLMock.SetupGet(x => x.InsertCategory<Category>(this.dictionary));

            // Assert
            Assert.AreEqual(expectedvalue, actualValue);
        }
    }
}
