// <copyright file="SubCategory.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// SubCategory Entity.
    /// </summary>
    [Table("SubCategory")]
    public class SubCategory
    {
        /// <summary>
        /// Gets or Sets Id.
        /// </summary>
        public int? Id { get; set; }

        /// <summary>
        /// Gets or Sets CategoryId.
        /// </summary>
        public int? CategoryId { get; set; }

        /// <summary>
        /// Gets or Sets Name.
        /// </summary>
        public string Name { get; set; }
    }
}
