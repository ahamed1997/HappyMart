// <copyright file="Orders.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System;
    using System.ComponentModel.DataAnnotations.Schema;
    using HappyBuyDAL.Models;

    /// <summary>
    /// Orders Entity.
    /// </summary>
    [Table("Orders")]
    public class Orders : PaymentDetails
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int? OrdersId { get; set; }

        /// <summary>
        /// Gets or Sets CustoemrId.
        /// </summary>
        public int? OrdersCustomerId { get; set; }

        /// <summary>
        /// Gets or Sets AddressId.
        /// </summary>
        public int? OrdersShippingAddressId { get; set; }

        /// <summary>
        /// Gets or Sets DateOrderd.
        /// </summary>
        public DateTime? OrdersDateOfOrder { get; set; }

        /// <summary>
        /// Gets or Sets PaymentId.
        /// </summary>
        public int? OrdersOrderStatusId { get; set; }

        /// <summary>
        /// Gets or Sets DateRecieved.
        /// </summary>
        public DateTime? OrdersDateOfOrderCompleted { get; set; }
    }
}
