// <copyright file="Customer.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// Customer Entity.
    /// </summary>
    [Table("Customer")]
    public class Customer
    {
        /// <summary>
        /// Gets or Sets  Id.
        /// </summary>
        public int? CustomerId { get; set; }

        /// <summary>
        /// Gets or Sets FisrtName.
        /// </summary>
        public string CustomerFirstName { get; set; }

        /// <summary>
        /// Gets or Sets LastName.
        /// </summary>
        public string CustomerLastName { get; set; }

        /// <summary>
        /// Gets or Sets Mobile.
        /// </summary>
        public string CustomerMobile { get; set; }

        /// <summary>
        /// Gets or Sets Email.
        /// </summary>
        public string CustomerEmail { get; set; }

        /// <summary>
        /// Gets or Sets Password.
        /// </summary>
        public string CustomerPassword { get; set; }

        /// <summary>
        /// Gets or Sets Street.
        /// </summary>
        public string CustomerStreet { get; set; }

        /// <summary>
        /// Gets or Sets LandMark.
        /// </summary>
        public string CustomerLandMark { get; set; }

        /// <summary>
        /// Gets or Sets City.
        /// </summary>
        public string CustomerCity { get; set; }

        /// <summary>
        /// Gets or Sets State.
        /// </summary>
        public string CustomerState { get; set; }

        /// <summary>
        /// Gets or Sets Zipcode.
        /// </summary>
        public string CustomerZipcode { get; set; }
    }
}
