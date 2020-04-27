// <copyright file="IHBAdminBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL.HB.BL.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// Admin Business Layer.
    /// </summary>
    public interface IHBAdminBL
    {
        /// <summary>
        /// LogIn Validation.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        List<T> AdminLogInValidation<T>(Dictionary<string, object> dictionary)
            where T : new();
    }
}
