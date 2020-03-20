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
    public class PaymentDetails
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
        /// Gets or Sets CardHolderName.
        /// </summary>
        public string PaymentDetailsCardHolderName { get; set; }

        /// <summary>
        /// Gets or Sets CardNumber.
        /// </summary>
        public int? PaymentDetailsCardNumber { get; set; }

        /// <summary>
        /// Gets or Sets ExpiryMonth.
        /// </summary>
        public char? PaymentDetailsExpiryMonth { get; set; }

        /// <summary>
        /// Gets or Sets ExpiryYear.
        /// </summary>
        public char? PaymentDetailsExpiryYear { get; set; }

        /// <summary>
        /// Gets or Sets CVV.
        /// </summary>
        public char? PaymentDetailsCVV { get; set; }

        /// <summary>
        /// Gets or Sets DateOfPayment.
        /// </summary>
        public DateTime? PaymentDetailsDateOfPayment { get; set; }
    }
}
