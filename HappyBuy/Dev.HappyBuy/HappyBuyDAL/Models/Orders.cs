// <copyright file="Orders.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System;
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// Orders Entity.
    /// </summary>
    [Table("Orders")]
    public class Orders
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int? Id { get; set; }

        /// <summary>
        /// Gets or Sets CustoemrId.
        /// </summary>
        public string CustomerId { get; set; }

        /// <summary>
        /// Gets or Sets AddressId.
        /// </summary>
        public string AddressId { get; set; }

        /// <summary>
        /// Gets or Sets DateOrderd.
        /// </summary>
        public DateTime? DateOfOrder { get; set; }

        /// <summary>
        /// Gets or Sets PaymentId.
        /// </summary>
        public int? OrderStatusId { get; set; }

        /// <summary>
        /// Gets or Sets DateRecieved.
        /// </summary>
        public DateTime DateOfOrderDispatched { get; set; }

        /// <summary>
        /// Gets or Sets Status.
        /// </summary>
        public string Status { get; set; }

        /// <summary>
        /// Gets or Sets ProductId.
        /// </summary>
        public string ProductId { get; set; }
    }
}
