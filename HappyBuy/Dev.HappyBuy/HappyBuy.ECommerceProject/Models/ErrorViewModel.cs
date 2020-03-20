// <copyright file="ErrorViewModel.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Models
{
    /// <summary>
    /// Errorview Class.
    /// </summary>
    public class ErrorViewModel
    {
        /// <summary>
        /// Gets or sets RequestId.
        /// </summary>
        public string RequestId { get; set; }

        /// <summary>
        /// Gets a value indicating whether gets or Sets Boolean Value.
        /// </summary>
        public bool ShowRequestId => !string.IsNullOrEmpty(this.RequestId);
    }
}