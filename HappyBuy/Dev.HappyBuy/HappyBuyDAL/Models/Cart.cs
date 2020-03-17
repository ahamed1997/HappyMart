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
    public class Cart
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets CustomerId.
        /// </summary>
        public int CustomerId { get; set; }

        /// <summary>
        /// Gets or Sets ProductId.
        /// </summary>
        public int ProductId { get; set; }

        /// <summary>
        /// Gets or Sets TotalPrice.
        /// </summary>
        public decimal Price { get; set; }

        /// <summary>
        /// Gets or Sets Quantity.
        /// </summary>
        public int Quantity { get; set; }
    }
}
