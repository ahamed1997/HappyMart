// <copyright file="ProductTest.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyTest
{
    using System.Collections.Generic;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using HappyBuyDAL.Interfaces;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Moq;
    using Newtonsoft.Json.Linq;

    /// <summary>
    /// Product test Class.
    /// </summary>
    [TestClass]
    public class ProductTest
    {
        private Mock<IHappyBuyRepository> happyBuyRepositoryMock;
        private IHBProductBL hBProductBL;
        private Mock<IHBProductBL> hBProductBLMock;
        private Dictionary<string, object> dictionary;
        private List<Product> listProduct;

        /// <summary>
        /// Test Initialization.
        /// </summary>
        [TestInitialize]
        public void TestInitialze()
        {
            this.happyBuyRepositoryMock = new Mock<IHappyBuyRepository>();
            this.hBProductBLMock = new Mock<IHBProductBL>();

            this.hBProductBL = this.hBProductBLMock.Object;
            this.dictionary = new Dictionary<string, object>();
        }

        /// <summary>
        /// Insert Category test.
        /// </summary>
        [TestMethod]
        public void Insert_Category_Test()
        {
            // Arrange
            Category category = new Category();
            category.CategoryName = "Electronics";
            this.dictionary.Add("CategoryName", category.CategoryName);
            this.hBProductBLMock.Setup(x => x.InsertCategory<Category>(this.dictionary)).Returns(4);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<Category>(this.dictionary, 6)).Returns(4);
            int expectedvalue = 4;

            // Act
            int actualValue = this.hBProductBL.InsertCategory<Category>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedvalue, actualValue);
        }

        /// <summary>
        /// Insert SubCategory test.
        /// </summary>
        [TestMethod]
        public void Insert_SubCategory_Test()
        {
            // Arrange
            SubCategory subCategory = new SubCategory();
            subCategory.SubCategoryCategoryId = 2;
            subCategory.SubCategoryName = "Fashions";
            this.dictionary.Add("SubCategoryCategoryId", subCategory.SubCategoryCategoryId);
            this.dictionary.Add("SubCategoryName", subCategory.SubCategoryName);
            this.hBProductBLMock.Setup(x => x.InsertSubCategory<SubCategory>(this.dictionary)).Returns(8);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<SubCategory>(this.dictionary, 9)).Returns(8);
            int expectedvalue = 8;

            // Act
            int actualValue = this.hBProductBL.InsertSubCategory<SubCategory>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedvalue, actualValue);
        }

        /// <summary>
        /// Update Product Test.
        /// </summary>
        [TestMethod]
        public void Update_ProductDetails_Test()
        {
            // Arrange
            Product product = new Product()
            {
                ProductId = 1,
                ProductName = "Apple i10",
                ProductSubCategoryId = 1,
                ProductDescription = "Apple is a nice mobile",
                ProductSpecification = "6000 MAH",
                ProductOptions = "EMI Available",
                ProductPrice = 15999,
                ProductBrand = "Apple",
                ProductIsActive = true,
                ProductQuantity = 13,
                ProductImageURL = "NotFound",
            };
            this.dictionary.Add("ProductId", product.ProductId);
            this.dictionary.Add("ProductName", product.ProductName);
            this.dictionary.Add("ProductSubCategoryId", product.ProductSubCategoryId);
            this.dictionary.Add("ProductDescription", product.ProductDescription);
            this.dictionary.Add("ProductSpecification", product.ProductSpecification);
            this.dictionary.Add("ProductOptions", product.ProductOptions);
            this.dictionary.Add("ProductPrice", product.ProductPrice);
            this.dictionary.Add("ProductBrand", product.ProductBrand);
            this.dictionary.Add("ProductIsActive", product.ProductIsActive);
            this.dictionary.Add("ProductQuantity", product.ProductQuantity);
            this.dictionary.Add("ProductImageURL", product.ProductImageURL);
            this.hBProductBLMock.Setup(x => x.UpdateProductDetails<Product>(this.dictionary)).Returns(1);
            this.happyBuyRepositoryMock.Setup(x => x.UpdateDetails<Product>(this.dictionary, 14)).Returns(1);
            int expectedvalue = 1;

            // Act
            int actualValue = this.hBProductBL.UpdateProductDetails<Product>(this.dictionary);

            // Assert
            Assert.AreEqual(expectedvalue, actualValue);
        }

        /// <summary>
        /// Insert Product Test.
        /// </summary>
        [TestMethod]
        public void Insert_Product_Test()
        {
            // Arrange
            Product product = new Product()
            {
                ProductName = "Apple i10",
                ProductSubCategoryId = 1,
                ProductDescription = "Apple is a nice mobile",
                ProductSpecification = "6000 MAH",
                ProductOptions = "EMI Available",
                ProductPrice = 15999,
                ProductBrand = "Apple",
                ProductIsActive = true,
                ProductQuantity = 13,
                ProductImageURL = "NotFound",
            };
            this.dictionary.Add("ProductName", product.ProductName);
            this.dictionary.Add("ProductSubCategoryId", product.ProductSubCategoryId);
            this.dictionary.Add("ProductDescription", product.ProductDescription);
            this.dictionary.Add("ProductSpecification", product.ProductSpecification);
            this.dictionary.Add("ProductOptions", product.ProductOptions);
            this.dictionary.Add("ProductPrice", product.ProductPrice);
            this.dictionary.Add("ProductBrand", product.ProductBrand);
            this.dictionary.Add("ProductIsActive", product.ProductIsActive);
            this.dictionary.Add("ProductQuantity", product.ProductQuantity);
            this.dictionary.Add("ProductImageURL", product.ProductImageURL);
            this.hBProductBLMock.Setup(x => x.AddProduct<Product>(this.dictionary)).Returns(15);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<Product>(this.dictionary, 8)).Returns(15);
            var expectValue = 15;

            // Act
            var actualValue = this.hBProductBL.AddProduct<Product>(this.dictionary);

            // Assert
            Assert.AreEqual(expectValue, actualValue);
        }

        /// <summary>
        /// Get Product Test.
        /// </summary>
        [TestMethod]
        public void Get_Product_Details_Test()
        {
            // Arrange
            string json = "{\"Display\":\"Retina display: 13.3-inch (diagonal) LED-backlit display with IPS technology\",\"Processor\":\"2.3GHz dual-core Intel Core i5, Turbo Boost up to 3.6GHz, with 64MB of eDRAM, Configurable to 2.5GHz dual-core Intel Core i7, Turbo Boost up to 4.0GHz, with 64MB of eDRAM\",\"Graphics and Video Support\":\"Intel Iris Plus Graphics 640\",\"Wireless\":\"Wi-Fi,Bluetooth 4.2 wireless technology\",\"In the Box\":\"MacBook Pro, 61W USB-C Power Adapter, USB-C Charge Cable(2 m)\",\"Height\":\"1.49 cm \",\"Width\":\"30.41 cm\",\"Depth\":\"21.24 cm\",\"Weight\":\"1.37 kg\",\"Release Date\":\"05-06-2017\"}";
            JObject o = JObject.Parse(json);
            string specification = o.ToString();

            string jsons = "{\"Bank Offer\":\"10% Instant discount with HDFC Bank PayZapp Card on purchase of Rs.1000 or more\",\"No Cost EMI\":\"Avail No Cost EMI on select cards for orders above ?3000\",\"Partner Offers\":\"Get FLAT 5% BACK with Amazon Pay ICICI Bank Credit card card for Prime members. Flat 3% BACK for non-Prime members. No minimum order value. No upper limit on cashback.\"}";
            JObject js = JObject.Parse(jsons);
            string options = js.ToString();

            this.dictionary.Add("ProductName", "Apple");

            this.listProduct = new List<Product>()
            {
                new Product()
                {
                    ProductId = 4,
                    ProductName = "Apple MacBook Pro Core i5 8th Gen - (8 GB/256 GB SSD/Mac OS Mojave) MV962HN  (13.3 inch, Space Grey,",
                    ProductSubCategoryId = 5,
                    ProductDescription = "Stylish & Portable Thin and Light Laptop,13.3 inch Quad HD LED Backlit IPS Retina Display (True Tone Technology, Wide Color (P3), 500 nits Brightness)",
                    ProductSpecification = specification,
                    ProductOptions = options,
                    ProductPrice = 144900,
                    ProductQuantity = 50,
                    ProductBrand = "Apple",
                    ProductIsActive = true,
                    ProductImageURL = "NotFound",
                },
            };

            this.hBProductBLMock.Setup(x => x.GetProducts<Product>(this.dictionary)).Returns(this.listProduct);
            this.happyBuyRepositoryMock.Setup(x => x.GetAllDetails<Product>(this.dictionary, 5)).Returns(this.listProduct);
            List<Product> expectedList = this.listProduct;

            // Act
            List<Product> actualList = this.hBProductBL.GetProducts<Product>(this.dictionary);

            // Assert
            Assert.AreSame(expectedList, this.listProduct);
        }
    }
}
