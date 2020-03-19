// <copyright file="OrderStatus.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Models
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// OrderStatus Entity.
    /// </summary>
    [Table("OrderStatus")]
    public class OrderStatus
    {
        /// <summary>
        /// Gets or Sets  Id.
        /// </summary>
        public int? Id { get; set; }

        /// <summary>
        /// Gets or Sets  Status.
        /// </summary>
        public string Status { get; set; }
    }
}
