// <copyright file="Stock.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;

    /// <summary>
    /// Stock Entity.
    /// </summary>
    [Table("Stock")]
    public class Stock : Vendors
    {
        /// <summary>
        /// Gets or Sets  Admin Id.
        /// </summary>
        public int? StockId { get; set; }

        /// <summary>
        /// Gets or Sets  Stock Quantity.
        /// </summary>
        public int? StockQuantity { get; set; }

        /// <summary>
        /// Gets or Sets  StockProductId.
        /// </summary>
        public int? StockProductId { get; set; }

        /// <summary>
        /// Gets or Sets  Vendors Id.
        /// </summary>
        public int? StockVendorsId { get; set; }
    }
}