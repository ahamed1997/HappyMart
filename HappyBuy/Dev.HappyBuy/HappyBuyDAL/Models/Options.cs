// <copyright file="Options.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Models
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// Category Entity.
    /// </summary>
    [Table("Options")]
    public class Options
    {
        /// <summary>
        /// Gets or Sets  OptionId.
        /// </summary>
        public int? OptionId { get; set; }

        /// <summary>
        /// Gets or Sets  OptionName.
        /// </summary>
        public string OptionName { get; set; }

        /// <summary>
        /// Gets or Sets  OptionValue.
        /// </summary>
        public string OptionValue { get; set; }
    }
}
