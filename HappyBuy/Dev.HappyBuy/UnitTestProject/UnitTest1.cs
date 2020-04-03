using HappyBuyBL.HB.BL.Interfaces;
using HappyBuyDAL;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;

namespace UnitTestProject
{
    [TestClass]
    public class UnitTest1
    {
        private Mock<IHBProductBL> hBProductBLMock;
        private IHBProductBL hBProductBL;
        private Dictionary<string, object> dictionary;
        [TestInitialize]
        public void TestInitialze()
        {
            this.hBProductBLMock = new Mock<IHBProductBL>();
            this.dictionary = new Dictionary<string, object>();
        }
        [TestMethod]
        public void Insert_Category_Test()
        {
           
            // Arrange
            this.dictionary.Add("CategoryName", "Electronics");
            var expectedvalue = 1;

            // Act
            var actualValue = this.hBProductBLMock.Setup(x => x.InsertCategory<Category>(this.dictionary));
           

            // Assert
            Assert.AreEqual(expectedvalue, actualValue);
        }
    }
}
