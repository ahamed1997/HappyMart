// <copyright file="ShippingAddress.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System.ComponentModel.DataAnnotations.Schema;
    using HappyBuyDAL.Models;

    /// <summary>
    /// ShippingAddress.
    /// </summary>
    [Table("ShippingAddress")]
    public class ShippingAddress : OrderDetails
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int? ShippingAddressId { get; set; }

        /// <summary>
        /// Gets or Sets Delivery Address name.
        /// </summary>
        public string ShippingAddressName { get; set; }

        /// <summary>
        /// Gets or Sets CustomerId.
        /// </summary>
        public int? ShippingAddressCustomerId { get; set; }

        /// <summary>
        /// Gets or Sets Street.
        /// </summary>
        public string ShippingAddressStreet { get; set; }

        /// <summary>
        /// Gets or Sets City.
        /// </summary>
        public string ShippingAddressCity { get; set; }

        /// <summary>
        /// Gets or Sets State.
        /// </summary>
        public string ShippingAddressState { get; set; }

        /// <summary>
        /// Gets or Sets Zipcode.
        /// </summary>
        public string ShippingAddressZipcode { get; set; }

        /// <summary>
        /// Gets or Sets CountryCode.
        /// </summary>
        public string ShippingAddressCountryCode { get; set; }
    }
}
