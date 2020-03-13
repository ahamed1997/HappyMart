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

            if (this.cmdExecuteNonQuery.ExecuteNonQuery() > 0)
            {
                i = 1;
            }

            this.conn.Close();
            return i;
        }

        /// <summary>
        /// Fetching Data using ExecuteReader.
        /// </summary>
        /// <typeparam name="T">Generic Object Parameter.</typeparam>
        /// <param name="value">Input Parameter.</param>
        /// <param name="commandText">Stored Procedure type.</param>
        /// <returns>Generic Object.</returns>
        public List<T> ExecuteReader<T>(string value, string commandText)
            where T : new()
        {
            this.conn.Open();
            this.cmdExecuteReader = new SqlCommand(commandText, this.conn);
            string keyvalue = "@Id";
            this.cmdExecuteReader.Parameters.AddWithValue(keyvalue, value);
            this.cmdExecuteReader.CommandType = CommandType.StoredProcedure;
            SqlDataReader sqlDataReader = this.cmdExecuteReader.ExecuteReader();
            var entity = typeof(T);
            var entities = new List<T>();
            var propDict = new Dictionary<string, PropertyInfo>();
            var props = entity.GetProperties(BindingFlags.Instance | BindingFlags.Public);
            propDict = props.ToDictionary(p => p.Name.ToUpper(), p => p);
            T newObject = default(T);

            while (sqlDataReader.Read())
            {
                newObject = Activator.CreateInstance<T>();
                for (int index = 0; index < sqlDataReader.FieldCount; index++)
                {
                    if (propDict.ContainsKey(sqlDataReader.GetName(index).ToUpper()))
                    {
                        var info = propDict[sqlDataReader.GetName(index).ToUpper()];

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
