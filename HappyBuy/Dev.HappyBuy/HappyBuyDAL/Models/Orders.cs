// <copyright file="Orders.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
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
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Quantity.
        /// </summary>
        public string Quantity { get; set; }

        /// <summary>
        /// Gets or Sets Price.
        /// </summary>
        public string Price { get; set; }

        /// <summary>
        /// Gets or Sets DateOrderd.
        /// </summary>
        public string DateOrdered { get; set; }

        /// <summary>
        /// Gets or Sets DateRecieved.
        /// </summary>
        public string DateReceived { get; set; }

        /// <summary>
        /// Gets or Sets Status.
        /// </summary>
        public string Status { get; set; }

        /// <summary>
        /// Gets or Sets CustoemrId.
        /// </summary>
        public string CustomerId { get; set; }

        /// <summary>
        /// Gets or Sets PaymentId.
        /// </summary>
        public string PaymentId { get; set; }

        /// <summary>
        /// Gets or Sets ProductId.
        /// </summary>
        public string ProductId { get; set; }

        /// <summary>
        /// Gets or Sets AddressId.
        /// </summary>
        public string AddressId { get; set; }
    }
}
