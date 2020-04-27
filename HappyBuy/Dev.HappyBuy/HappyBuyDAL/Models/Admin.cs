// <copyright file="Admin.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;

    /// <summary>
    /// Admin Entity.
    /// </summary>
    [Table("Admin")]
    public class Admin
    {
        /// <summary>
        /// Gets or Sets  Admin Id.
        /// </summary>
        public int? AdminId { get; set; }

        /// <summary>
        /// Gets or Sets Admin FirstName.
        /// </summary>
        public string AdminFirstName { get; set; }

        /// <summary>
        /// Gets or Sets Admin LastName.
        /// </summary>
        public string AdminLastName { get; set; }

        /// <summary>
        /// Gets or Sets Admin Mobile.
        /// </summary>
        public string AdminMobile { get; set; }

        /// <summary>
        /// Gets or Sets Admin Email.
        /// </summary>
        public string AdminEmail { get; set; }

        /// <summary>
        /// Gets or Sets Admin Password.
        /// </summary>
        public string AdminPassword { get; set; }
    }
}
