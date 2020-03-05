using HappyBuyDAL.ConfigModels;
using Microsoft.Extensions.Options;
using System;
using System.Data.Common;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;

namespace HappyBuyDAL
{
    public class DevHappyBuyDAL
    {
        SqlConnection conn;
        SqlCommand cmdExecuteNonQuery,cmdExecuteReader;
        private readonly HappyBuyConnection configOptions;
        public DevHappyBuyDAL()
        //public DevHappyBuyDAL(IOptions<HappyBuyConnection> happyBuyConnectionoptions)
        {
            //configOptions = happyBuyConnectionoptions.Value
            this.conn = new SqlConnection("server=(localdb)\\MSSQLLocalDB;database=DB.HappyBuy;Integrated Security=true");
           //this.conn = new SqlConnection(ConfigurationManager.ConnectionStrings["happyBuyConnection"].ConnectionString);

        }        
        public int ExecuteNonQuery<T>(Dictionary<string, object> dictionary, string commandText)
        {
            conn.Open();
            int i = 0;
            cmdExecuteNonQuery = new SqlCommand(commandText, conn);
            foreach (var item in dictionary)
            {
                string keyvalue = "@"+item.Key;
                cmdExecuteNonQuery.Parameters.AddWithValue(keyvalue, item.Value);
                cmdExecuteNonQuery.CommandType = CommandType.StoredProcedure;               

            }
            if (cmdExecuteNonQuery.ExecuteNonQuery() > 0)
            {
                i = 1;
            }
            conn.Close();
            return i;
        }
        public List<T> ExecuteReader<T>(string value, string commandText,object obj) where  T : new()
        {
            this.conn.Open();
            cmdExecuteReader = new SqlCommand(commandText, conn);            
            string keyvalue = "@FirstName";
            cmdExecuteReader.Parameters.AddWithValue(keyvalue, value);
            cmdExecuteReader.CommandType = CommandType.StoredProcedure;
            SqlDataReader sqlDataReader = cmdExecuteReader.ExecuteReader();
            var entity = typeof(T);
            var entities = new List<T>();
            var propDict = new Dictionary<string, PropertyInfo>();
            var props = entity.GetProperties(BindingFlags.Instance | BindingFlags.Public);
            propDict = props.ToDictionary(p => p.Name.ToUpper(), p => p);
            T newObject = default(T);
            while(sqlDataReader.Read())
            {
                newObject = Activator.CreateInstance<T>();
                for (int index = 0; index < sqlDataReader.FieldCount; index++)
                {
                    if (propDict.ContainsKey(sqlDataReader.GetName(index).ToUpper()))
                    {
                        var info = propDict[sqlDataReader.GetName(index).ToUpper()];
                        if((info!=null)&&(info.CanWrite))
                        {
                            var val = sqlDataReader.GetValue(index);
                            info.SetValue(newObject, (val == DBNull.Value) ? null : val, null);
                        }
                    }
                }
                entities.Add(newObject);
            }
            //List<object> list = new List<object>();
            //obj = new object();
            //int i= 0;
            //T[] array = new T[] { };
            //int len = array.Length;
            //Customer customer = new Customer();
            //while (sqlDataReader.Read())
            //{
            //    while (i == len)
            //    {
            //        var temp = array[i].GetType();
            //        customer.Id = sqlDataReader[i].ToString();

            //    }
            //    i = 0;
            //    list.Add(obj);
            //}
            this.conn.Close();
            return entities;

        }

    }
}
