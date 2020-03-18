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
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets PaymentId.
        /// </summary>
        public int PaymentId { get; set; }

        /// <summary>
        /// Gets or Sets PaymentModeId.
        /// </summary>
        public int PaymentModeId { get; set; }

        /// <summary>
        /// Gets or Sets CardHolderName.
        /// </summary>
        public string CardHolderName { get; set; }

        /// <summary>
        /// Gets or Sets CardNumber.
        /// </summary>
        public int CardNumber { get; set; }

        /// <summary>
        /// Gets or Sets ExpiryMonth.
        /// </summary>
        public char ExpiryMonth { get; set; }

        /// <summary>
        /// Gets or Sets ExpiryYear.
        /// </summary>
        public char ExpiryYear { get; set; }

        /// <summary>
        /// Gets or Sets CVV.
        /// </summary>
        public char CVV { get; set; }

        /// <summary>
        /// Gets or Sets DateOfPayment.
        /// </summary>
        public DateTime DateOfPayment { get; set; }
    }
}
