// <copyright file="Payment.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// Payment Entity.
    /// </summary>
    [Table("Payment")]
    public class Payment
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int? PaymentId { get; set; }

        /// <summary>
        /// Gets or Sets CustomerId.
        /// </summary>
        public int? PaymentOredrId { get; set; }
    }
}
