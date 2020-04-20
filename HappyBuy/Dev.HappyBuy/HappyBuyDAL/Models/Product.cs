// <copyright file="Product.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// Product Entity.
    /// </summary>
    [Table("Product")]
    public class Product : Orders
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int? ProductId { get; set; }

        /// <summary>
        /// Gets or Sets SubCategoryId.
        /// </summary>
        public int? ProductSubCategoryId { get; set; }

        /// <summary>
        /// Gets or Sets Name.
        /// </summary>
        public string ProductName { get; set; }

        /// <summary>
        /// Gets or Sets Description.
        /// </summary>
        public string ProductDescription { get; set; }

        /// <summary>
        /// Gets or Sets Specification.
        /// </summary>
        public string ProductSpecification { get; set; }

        /// <summary>
        /// Gets or Sets OPtions.
        /// </summary>
        public string ProductOptions { get; set; }

        /// <summary>
        /// Gets or Sets Price.
        /// </summary>
        public decimal? ProductPrice { get; set; }

        /// <summary>
        /// Gets or Sets Brand.
        /// </summary>
        public string ProductBrand { get; set; }

        /// <summary>
        /// Gets or Sets IsActive.
        /// </summary>
        public bool? ProductIsActive { get; set; }

        /// <summary>
        /// Gets or Sets Quantity.
        /// </summary>
        public int? ProductQuantity { get; set; }

        /// <summary>
        /// Gets or Sets ImageURL.
        /// </summary>
        public string ProductImageURL { get; set; }
    }
}
