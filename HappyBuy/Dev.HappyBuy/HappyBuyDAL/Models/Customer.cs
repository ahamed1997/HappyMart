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
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets FisrtName.
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or Sets LastName.
        /// </summary>
        public string LastName { get; set; }

        /// <summary>
        /// Gets or Sets Mobile.
        /// </summary>
        public string Mobile { get; set; }

        /// <summary>
        /// Gets or Sets Email.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets Password.
        /// </summary>
        public string Password { get; set; }

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
