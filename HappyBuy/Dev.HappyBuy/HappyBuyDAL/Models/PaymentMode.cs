// <copyright file="PaymentMode.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Models
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// PaymentMode Entity.
    /// </summary>
    [Table("PaymentMode")]
    public class PaymentMode
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int? PaymentModeId { get; set; }

        /// <summary>
        /// Gets or Sets ModeOfPayment.
        /// </summary>
        public string PaymentModeModeOfPayment { get; set; }
    }
}
