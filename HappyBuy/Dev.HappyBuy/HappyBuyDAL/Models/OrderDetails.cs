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
    public class OrderDetails : OrderStatus
    {
        /// <summary>
        /// Gets or Sets  Id.
        /// </summary>
        public int? OrderDetailsId { get; set; }

        /// <summary>
        /// Gets or Sets  Id.
        /// </summary>
        public int? OrderDetailsCustomerId { get; set; }

        /// <summary>
        /// Gets or Sets  ProductId.
        /// </summary>
        public int? OrderDetailsProductId { get; set; }

        /// <summary>
        /// Gets or Sets  OrderId.
        /// </summary>
        public int? OrderDetailsOrdersId { get; set; }

        /// <summary>
        /// Gets or Sets  Quantity.
        /// </summary>
        public int? OrderDetailsQuantity { get; set; }

        /// <summary>
        /// Gets or Sets  Price.
        /// </summary>
        public decimal? OrderDetailsPrice { get; set; }
    }
}
