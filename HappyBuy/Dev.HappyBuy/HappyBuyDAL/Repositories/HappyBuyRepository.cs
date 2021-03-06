﻿// <copyright file="HappyBuyRepository.cs" company="PlaceholderCompany">
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
    public class HappyBuyRepository : IHappyBuyRepository
    {
        private readonly IDevHappyBuyDAL happyBuyDAL;

        /// <summary>
        /// Initializes a new instance of the <see cref="HappyBuyRepository"/> class.
        /// </summary>
        /// <param name="happyBuyDAL">Dependency Injection.</param>
        public HappyBuyRepository(IDevHappyBuyDAL happyBuyDAL)
        {
            this.happyBuyDAL = happyBuyDAL;
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
            int result = this.happyBuyDAL.ExecuteNonQuery<DevHappyBuyDAL>(dictionary, storedProcedure);
            return result;
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
        /// Get One detail.
        /// </summary>
        /// <typeparam name="T">Generic Type Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <param name="storedProcedureEnum">Stored Procedure.</param>
        /// <returns>All Details.</returns>
        public List<T> GetOneDetail<T>(Dictionary<string, object> dictionary, int storedProcedureEnum)
            where T : new()
        {
            var commandText = (StoredProcedure)storedProcedureEnum;
            string storedProcedure = commandText.ToString();
            return this.happyBuyDAL.ExecuteReader<T>(dictionary, storedProcedure);
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
            var commandText = (StoredProcedure)storedProcedureEnum;
            string storedProcedure = commandText.ToString();
            int result = this.happyBuyDAL.ExecuteNonQuery<DevHappyBuyDAL>(dictionary, storedProcedure);
            return result;
        }
    }
}
