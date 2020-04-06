// <copyright file="ShippingAddress.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// ShippingAddress.
    /// </summary>
    [Table("ShippingAddress")]
    public class ShippingAddress
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int? ShippingAddressId { get; set; }

        /// <summary>
        /// Gets or Sets CustomerId.
        /// </summary>
        public int? ShippingAddressCustomerId { get; set; }

        /// <summary>
        /// Gets or Sets Mobile.
        /// </summary>
        public string ShippingAddressMobile { get; set; }

        /// <summary>
        /// Gets or Sets Street.
        /// </summary>
        public string ShippingAddressStreet { get; set; }

        /// <summary>
        /// Gets or Sets LandMark.
        /// </summary>
        public string ShippingAddressLandMark { get; set; }

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
    }
}
