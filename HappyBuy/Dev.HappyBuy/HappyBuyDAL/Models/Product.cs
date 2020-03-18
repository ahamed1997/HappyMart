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
    public class Product
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets SubCategoryId.
        /// </summary>
        public string SubCategoryId { get; set; }

        /// <summary>
        /// Gets or Sets Name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Description.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Specification.
        /// </summary>
        public string Specification { get; set; }

        /// <summary>
        /// Gets or Sets OPtions.
        /// </summary>
        public string Options { get; set; }

        /// <summary>
        /// Gets or Sets Price.
        /// </summary>
        public decimal Price { get; set; }

        /// <summary>
        /// Gets or Sets Brand.
        /// </summary>
        public string Brand { get; set; }

        /// <summary>
        /// Gets or Sets IsActive.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Gets or Sets Quantity.
        /// </summary>
        public int Quantity { get; set; }

        /// <summary>
        /// Gets or Sets ImageURL.
        /// </summary>
        public string ImageURL { get; set; }
    }
}
