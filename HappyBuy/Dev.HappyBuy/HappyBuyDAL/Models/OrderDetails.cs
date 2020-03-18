// <copyright file="OrderDetails.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Models
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// OrderDetails Entity.
    /// </summary>
    [Table("OrderDetails")]
    public class OrderDetails
    {
        /// <summary>
        /// Gets or Sets  Id.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets  ProductId.
        /// </summary>
        public int ProductId { get; set; }

        /// <summary>
        /// Gets or Sets  OrderId.
        /// </summary>
        public int OrderId { get; set; }

        /// <summary>
        /// Gets or Sets  Quantity.
        /// </summary>
        public int Quantity { get; set; }

        /// <summary>
        /// Gets or Sets  Price.
        /// </summary>
        public decimal Price { get; set; }
    }
}
