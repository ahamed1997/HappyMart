﻿// <copyright file="Category.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// Category Entity.
    /// </summary>
    [Table("Category")]
    public class Category
    {
        /// <summary>
        /// Gets or sets category Id.
        /// </summary>
        public int? CategoryId { get; set; }

        /// <summary>
        /// Gets or sets category Name.
        /// </summary>
        public string CategoryName { get; set; }
    }
}
