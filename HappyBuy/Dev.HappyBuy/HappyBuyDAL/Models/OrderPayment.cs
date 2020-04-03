// <copyright file="OrderPayment.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Models
{
    using System;

    /// <summary>
    /// Payment Entity.
    /// </summary>
    public class OrderPayment
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
