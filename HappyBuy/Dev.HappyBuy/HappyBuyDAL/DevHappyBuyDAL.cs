// <copyright file="DevHappyBuyDAL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyDAL
{
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.SqlClient;
    using System.Linq;
    using System.Reflection;

    /// <summary>
    /// HappyBuy Data Access Layer.
    /// </summary>
    public class DevHappyBuyDAL
    {
        private SqlConnection conn;
        private SqlCommand cmdExecuteNonQuery;
        private SqlCommand cmdExecuteReader;

        /// <summary>
        /// Initializes a new instance of the <see cref="DevHappyBuyDAL"/> class.
        /// </summary>
        public DevHappyBuyDAL()
        {
            this.conn = new SqlConnection("server=(localdb)\\MSSQLLocalDB;database=DB.HappyBuy;Integrated Security=true");
        }

        /// <summary>
        /// Execute NonWuery Command.
        /// </summary>
        /// <typeparam name="T">Generic Parameter.</typeparam>
        /// <param name="dictionary">Dynamic Object Dictionary.</param>
        /// <param name="commandText">command Text.</param>
        /// <returns>Adding Results.</returns>
        public int ExecuteNonQuery<T>(Dictionary<string, object> dictionary, string commandText)
        {
            this.conn.Open();
            int i = 0;
            this.cmdExecuteNonQuery = new SqlCommand(commandText, this.conn);
            foreach (var item in dictionary)
            {
                string keyvalue = "@" + item.Key;
                if (item.Value != null)
                {
                    this.cmdExecuteNonQuery.Parameters.AddWithValue(keyvalue, item.Value);
                    this.cmdExecuteNonQuery.CommandType = CommandType.StoredProcedure;
                }
            }

            SqlDataReader sqlDataReader = this.cmdExecuteNonQuery.ExecuteReader();

            while (sqlDataReader.Read())
            {
                i = Convert.ToInt32(sqlDataReader[0]);
            }

            this.conn.Close();
            return i;
        }

        /// <summary>
        /// Fetching Data using ExecuteReader.
        /// </summary>
        /// <typeparam name="T">Generic Object Parameter.</typeparam>
        /// <param name="dictionary">Input Parameter.</param>
        /// <param name="commandText">Stored Procedure type.</param>
        /// <returns>Generic Object.</returns>
        public List<T> ExecuteReader<T>(Dictionary<string, object> dictionary, string commandText)
            where T : new()
        {
            this.conn.Open();
            this.cmdExecuteReader = new SqlCommand(commandText, this.conn);
            foreach (var item in dictionary)
            {
                string keyvalue = "@" + item.Key;
                if (item.Value != null)
                {
                    this.cmdExecuteReader.Parameters.AddWithValue(keyvalue, item.Value);
                    this.cmdExecuteReader.CommandType = CommandType.StoredProcedure;
                }
            }

            SqlDataReader sqlDataReader = this.cmdExecuteReader.ExecuteReader();
            var entity = typeof(T);
            var entities = new List<T>();
            var propertyDictionary = new Dictionary<string, PropertyInfo>();
            var props = entity.GetProperties(BindingFlags.Instance | BindingFlags.Public);
            propertyDictionary = props.ToDictionary(p => p.Name, p => p);
            T newObject = default(T);

            while (sqlDataReader.Read())
            {
                newObject = Activator.CreateInstance<T>();
                for (int index = 0; index < sqlDataReader.FieldCount; index++)
                {
                    if (propertyDictionary.ContainsKey(sqlDataReader.GetName(index)))
                    {
                        var info = propertyDictionary[sqlDataReader.GetName(index)];
                        if ((info != null) && info.CanWrite)
                        {
                            var val = sqlDataReader.GetValue(index);
                            info.SetValue(newObject, (val == DBNull.Value) ? null : val, null);
                        }
                    }
                }

                entities.Add(newObject);
            }

            this.conn.Close();
            return entities;
        }
    }
}
