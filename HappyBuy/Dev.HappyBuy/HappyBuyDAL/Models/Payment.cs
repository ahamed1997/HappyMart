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
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets CustomerId.
        /// </summary>
        public string CustomerId { get; set; }

        /// <summary>
        /// Gets or Sets PaymentMode.
        /// </summary>
        public string PaymentMode { get; set; }

        /// <summary>
        /// Gets or Sets AmountPaid.
        /// </summary>
        public string AmountPaid { get; set; }

        /// <summary>
        /// Gets or Sets DateOfPayment.
        /// </summary>
        public string DateOfPayment { get; set; }
    }
}
