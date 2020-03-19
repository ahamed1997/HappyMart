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
        public int? Id { get; set; }

        /// <summary>
        /// Gets or Sets CustomerId.
        /// </summary>
        public string CustomerId { get; set; }

        /// <summary>
        /// Gets or Sets Mobile.
        /// </summary>
        public string Mobile { get; set; }

        /// <summary>
        /// Gets or Sets Street.
        /// </summary>
        public string Street { get; set; }

        /// <summary>
        /// Gets or Sets LandMark.
        /// </summary>
        public string LandMark { get; set; }

        /// <summary>
        /// Gets or Sets City.
        /// </summary>
        public string City { get; set; }

        /// <summary>
        /// Gets or Sets State.
        /// </summary>
        public string State { get; set; }

        /// <summary>
        /// Gets or Sets Zipcode.
        /// </summary>
        public string Zipcode { get; set; }
    }
}
