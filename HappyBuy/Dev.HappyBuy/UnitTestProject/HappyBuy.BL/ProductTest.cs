using HappyBuyBL;
using HappyBuyBL.HB.BL.Interfaces;
using HappyBuyDAL;
using HappyBuyDAL.Interfaces;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;

namespace HappyBuyTest
{
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
        [TestMethod]
        public void Insert_Category_Test()
        {

            // Arrange
            this.dictionary.Add("CategoryName", "Electronics");
            this.hBProductBLMock.Setup(x => x.InsertCategory<Category>(this.dictionary)).Returns(4);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<Category>(this.dictionary, 6)).Returns(4);
            int expectedvalue = 4;

            // Act
            int actualValue = this.hBProductBL.InsertCategory<Category>(this.dictionary);


            // Assert
            Assert.AreEqual(expectedvalue, actualValue);
        }

        [TestMethod]
        public void Insert_SubCategory_Test()
        {

            // Arrange
            this.dictionary.Add("SubCategoryCategoryId", 6);
            this.dictionary.Add("SubCategoryName", "Samsung");
            this.hBProductBLMock.Setup(x => x.InsertSubCategory<SubCategory>(this.dictionary)).Returns(6);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<SubCategory>(this.dictionary, 9)).Returns(6);
            int expectedvalue = 6;

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
            this.dictionary.Add("ProductId", 1);
            this.dictionary.Add("ProductName", "Samsung");
            this.dictionary.Add("ProductSubCategoryId", 1);
            this.dictionary.Add("ProductDescription", "Samsung is a nice mobile");
            this.dictionary.Add("ProductSpecification", "6000 MAH");
            this.dictionary.Add("ProductOptions", "64GB ROM");
            this.dictionary.Add("ProductPrice", 15999);
            this.dictionary.Add("ProductBrand", "Samsung");
            this.dictionary.Add("ProductIsActive", true);
            this.dictionary.Add("ProductQuantity", 13);
            this.dictionary.Add("ProductImageURL", "NotYet");
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
            this.dictionary.Add("ProductName", "Apple");
            this.dictionary.Add("ProductSubCategoryId", 1);
            this.dictionary.Add("ProductDescription", "Apple is a nice mobile");
            this.dictionary.Add("ProductSpecification", "6000 MAH");
            this.dictionary.Add("ProductOptions", "64GB ROM");
            this.dictionary.Add("ProductPrice", 15999);
            this.dictionary.Add("ProductBrand", "Samsung");
            this.dictionary.Add("ProductIsActive", true);
            this.dictionary.Add("ProductQuantity", 13);
            this.dictionary.Add("ProductImageURL", "NotYet");
            this.hBProductBLMock.Setup(x => x.AddProduct<Product>(this.dictionary)).Returns(5);
            this.happyBuyRepositoryMock.Setup(x => x.AddDetails<Product>(this.dictionary, 8)).Returns(5);
            var expectValue = 5;

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
                    ProductImageURL = "NotFound"

                }

            };

            this.hBProductBLMock.Setup(x => x.GetProducts<Product>(this.dictionary)).Returns(listProduct);
            this.happyBuyRepositoryMock.Setup(x => x.GetAllDetails<Product>(this.dictionary, 5)).Returns(listProduct);
            List<Product> expectedList = listProduct;

            // Act
            List<Product> actualList = this.hBProductBL.GetProducts<Product>(this.dictionary);

            // Assert
            Assert.AreSame(expectedList, listProduct);
        }
    }
}
