// <copyright file="PaymentDetails.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Models
{
    using System;
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// PaymentDetails Entity.
    /// </summary>
    [Table("PaymentDetails")]
    public class PaymentDetails : ShippingAddress
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int? PaymentDetailsId { get; set; }

        /// <summary>
        /// Gets or Sets PaymentId.
        /// </summary>
        public int? PaymentDetailsPaymentId { get; set; }

        /// <summary>
        /// Gets or Sets PaymentModeId.
        /// </summary>
        public int? PaymentDetailsPaymentModeId { get; set; }

        /// <summary>
        /// Gets or Sets DateOfPayment.
        /// </summary>
        public DateTime? PaymentDetailsDateOfPayment { get; set; }

        /// <summary>
        /// Gets or Sets PaymentDetailsAmountPaid.
        /// </summary>
        public decimal? PaymentDetailsAmountPaid { get; set; }

        /// <summary>
        /// Gets or Sets PaymentDetailsTransactionId.
        /// </summary>
        public string PaymentDetailsTransactionId { get; set; }

        /// <summary>
        /// Gets or Sets PaymentDetailsPayerId.
        /// </summary>
        public string PaymentDetailsPayerId { get; set; }

        /// <summary>
        /// Gets or Sets PaymentDetailsPayerName.
        /// </summary>
        public string PaymentDetailsPayerName { get; set; }

        /// <summary>
        /// Gets or Sets PaymentDetailsPayeeId.
        /// </summary>
        public string PaymentDetailsPayeeId { get; set; }

        /// <summary>
        /// Gets or Sets PaymentDetailsPayeeEmailId.
        /// </summary>
        public string PaymentDetailsPayeeEmailId { get; set; }
    }
}
