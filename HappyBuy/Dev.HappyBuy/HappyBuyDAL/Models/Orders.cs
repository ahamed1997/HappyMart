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
        public int? OrdersId { get; set; }

        /// <summary>
        /// Gets or Sets CustoemrId.
        /// </summary>
        public string OrdersCustomerId { get; set; }

        /// <summary>
        /// Gets or Sets AddressId.
        /// </summary>
        public string OrdersShippingAddressId { get; set; }

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
        public DateTime OrdersDateOfOrderDispatched { get; set; }

        /// <summary>
        /// Gets or Sets Status.
        /// </summary>
        public string OrdersStatus { get; set; }

        /// <summary>
        /// Gets or Sets ProductId.
        /// </summary>
        public string OrdersProductId { get; set; }
    }
}
