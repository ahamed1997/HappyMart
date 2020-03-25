// <copyright file="HappyBuyRepository.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL.Implementation
{
    using System;
    using System.Collections.Generic;
    using HappyBuyDAL.Enums;
    using HappyBuyDAL.Interfaces;
    using Microsoft.Extensions.Configuration;

    /// <summary>
    /// Repository Implementation.
    /// </summary>
    public class HappyBuyRepository : IHaapyBuyRepository
    {
        private DevHappyBuyDAL happyBuyDAL;

        /// <summary>
        /// Initializes a new instance of the <see cref="HappyBuyRepository"/> class.
        /// </summary>
        public HappyBuyRepository()
        {
            this.happyBuyDAL = new DevHappyBuyDAL();
        }

        /// <summary>
        /// Adding Details.
        /// </summary>
        /// <typeparam name="T">Generic Type Object.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary Object.</param>
        /// <param name="storedProcedureEnum">Stored Procedure.</param>
        /// <returns>Insert Results.</returns>
        public int AddDetails<T>(Dictionary<string, object> dictionary, int storedProcedureEnum)
        {
            var commandText = (StoredProcedure)storedProcedureEnum;
            string storedProcedure = commandText.ToString();
            return this.happyBuyDAL.ExecuteNonQuery<DevHappyBuyDAL>(dictionary, storedProcedure);
        }

        /// <summary>
        /// Get All Details.
        /// </summary>
        /// <typeparam name="T">Generic Type Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <param name="storedProcedureEnum">Stored Procedure.</param>
        /// <returns>All Details.</returns>
        public List<T> GetAllDetails<T>(Dictionary<string, object> dictionary, int storedProcedureEnum)
            where T : new()
        {
            var commandText = (StoredProcedure)storedProcedureEnum;
            string storedProcedure = commandText.ToString();
            return this.happyBuyDAL.ExecuteReader<T>(dictionary, storedProcedure);
        }

        /// <summary>
        /// Delete Details.
        /// </summary>
        /// <typeparam name="T">Generic Type Object.</typeparam>
        /// <param name="dictionary">Dynamic Dictionary Object.</param>
        /// <param name="storedProcedureEnum">Stored Procedure.</param>
        /// <returns>Insert Results.</returns>
        public int DeleteDetails<T>(Dictionary<string, object> dictionary, int storedProcedureEnum)
        {
            var commandText = (StoredProcedure)storedProcedureEnum;
            string storedProcedure = commandText.ToString();
            return this.happyBuyDAL.ExecuteNonQuery<DevHappyBuyDAL>(dictionary, storedProcedure);
        }

        /// <summary>
        /// Get Single Details.
        /// </summary>
        /// <param name="id">Get By One Item.</param>
        /// <returns>Single Object.</returns>
        public Customer GetOneDetails(string id)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Get All Details.
        /// </summary>
        /// <typeparam name="T">Generic Type Object.</typeparam>
        /// <param name="dictionary">Dynamic Dictioanry.</param>
        /// <param name="storedProcedureEnum">Stored Procedure.</param>
        /// <returns>Update Results.</returns>
        public int UpdateDetails<T>(Dictionary<string, object> dictionary, int storedProcedureEnum)
        {
            throw new NotImplementedException();
        }
    }
}
