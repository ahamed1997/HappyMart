// <copyright file="IDevHappyBuyDAL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// HappyBuy Data Access Layer.
    /// </summary>
    public interface IDevHappyBuyDAL
    {
        /// <summary>
        /// Execute NonWuery Command.
        /// </summary>
        /// <typeparam name="T">Generic Parameter.</typeparam>
        /// <param name="dictionary">Dynamic Object Dictionary.</param>
        /// <param name="commandText">command Text.</param>
        /// <returns>Adding Results.</returns>
        int ExecuteNonQuery<T>(Dictionary<string, object> dictionary, string commandText);

        /// <summary>
        /// Fetching Data using ExecuteReader.
        /// </summary>
        /// <typeparam name="T">Generic Object Parameter.</typeparam>
        /// <param name="dictionary">Input Parameter.</param>
        /// <param name="commandText">Stored Procedure type.</param>
        /// <returns>Generic Object.</returns>
        List<T> ExecuteReader<T>(Dictionary<string, object> dictionary, string commandText)
            where T : new();
    }
}
