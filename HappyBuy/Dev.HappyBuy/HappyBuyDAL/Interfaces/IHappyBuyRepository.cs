// <copyright file="IHaapyBuyRepository.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Interfaces
{
    using System.Collections.Generic;

    /// <summary>
    /// Common Repository Interface.
    /// </summary>
    public interface IHappyBuyRepository
    {
        /// <summary>
        /// Adding Details.
        /// </summary>
        /// <typeparam name="T">Generic Type Object.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary Object.</param>
        /// <param name="storedProcedureEnum">Stored Procedure.</param>
        /// <returns>Insert Results.</returns>
        int AddDetails<T>(Dictionary<string, object> dictionary, int storedProcedureEnum);

        /// <summary>
        /// Get All Details.
        /// </summary>
        /// <typeparam name="T">Generic Type Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <param name="storedProcedureEnum">Stored Procedure.</param>
        /// <returns>All Details.</returns>
        List<T> GetAllDetails<T>(Dictionary<string, object> dictionary, int storedProcedureEnum)
            where T : new();

        /// <summary>
        /// Get One detail.
        /// </summary>
        /// <typeparam name="T">Generic Type Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <param name="storedProcedureEnum">Stored Procedure.</param>
        /// <returns>All Details.</returns>
        List<T> GetOneDetail<T>(Dictionary<string, object> dictionary, int storedProcedureEnum)
           where T : new();

        /// <summary>
        /// Get All Details.
        /// </summary>
        /// <typeparam name="T">Generic Type Object.</typeparam>
        /// <param name="dictionary">Dynamic Dictioanry.</param>
        /// <param name="storedProcedureEnum">Stored Procedure.</param>
        /// <returns>Update Results.</returns>
        int UpdateDetails<T>(Dictionary<string, object> dictionary, int storedProcedureEnum);

        /// <summary>
        /// Delete Details.
        /// </summary>
        /// <typeparam name="T">Generic Type Object.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary Object.</param>
        /// <param name="storedProcedureEnum">Stored Procedure.</param>
        /// <returns>Insert Results.</returns>
        int DeleteDetails<T>(Dictionary<string, object> dictionary, int storedProcedureEnum);
    }
}
