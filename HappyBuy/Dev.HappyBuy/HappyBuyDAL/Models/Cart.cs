// <copyright file="Cart.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// Cart Entity.
    /// </summary>
    [Table("Cart")]
    public class Cart : Product
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int? CartId { get; set; }

        /// <summary>
        /// Gets or Sets CustomerId.
        /// </summary>
        public int? CartCustomerId { get; set; }

        /// <summary>
        /// Gets or Sets ProductId.
        /// </summary>
        public int? CartProductId { get; set; }

        /// <summary>
        /// Gets or Sets TotalPrice.
        /// </summary>
        public decimal? CartPrice { get; set; }

        /// <summary>
        /// Gets or Sets Quantity.
        /// </summary>
        public int? CartQuantity { get; set; }
    }
}
