// <copyright file="Vendors.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;

    /// <summary>
    /// Vandors Entity.
    /// </summary>
    [Table("Vendors")]
    public class Vendors : Product
    {
        /// <summary>
        /// Gets or Sets  VendorsId.
        /// </summary>
        public int? VendorsId { get; set; }

        /// <summary>
        /// Gets or Sets  VendorsName.
        /// </summary>
        public string VendorsName { get; set; }

        /// <summary>
        /// Gets or Sets  VendorsTIN.
        /// </summary>
        public string VendorsTIN { get; set; }

        /// <summary>
        /// Gets or Sets  VendorsMobile.
        /// </summary>
        public string VendorsMobile { get; set; }

        /// <summary>
        /// Gets or Sets  VendorsEmail.
        /// </summary>
        public string VendorsEmail { get; set; }

        /// <summary>
        /// Gets or Sets  VendorsAddress.
        /// </summary>
        public string VendorsAddress { get; set; }
    }
}