// <copyright file="Specification.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;

    /// <summary>
    /// Specification Entity.
    /// </summary>
    [Table("Specification")]
    public class Specification
    {
        /// <summary>
        /// Gets or Sets  SpecificationId.
        /// </summary>
        public int? SpecificationId { get; set; }

        /// <summary>
        /// Gets or Sets  SpecificationProductId.
        /// </summary>
        public int? SpecificationProductId { get; set; }

        /// <summary>
        /// Gets or Sets  SpecificationName.
        /// </summary>
        public string SpecificationName { get; set; }

        /// <summary>
        /// Gets or Sets  SpecificationValue.
        /// </summary>
        public string SpecificationValue { get; set; }
    }
}
