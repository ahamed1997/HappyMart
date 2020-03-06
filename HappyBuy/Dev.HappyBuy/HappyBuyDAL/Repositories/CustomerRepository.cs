using HappyBuyDAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using HappyBuyDAL.Enums;

namespace HappyBuyDAL.Implementation
{
    public class CustomerRepository : ICustomerRepository
    {
        DevHappyBuyDAL happyBuyDAL;
        StoredProcedure storedProcedure;
        public CustomerRepository()
        {
            happyBuyDAL = new DevHappyBuyDAL();
        }

        public int AddCustomer<T>(Dictionary<string, object> dictionary,int storedProcedureEnum)
        {
            var commandText = (StoredProcedure)storedProcedureEnum;
            string storedProcedure = commandText.ToString();
            
            return happyBuyDAL.ExecuteNonQuery<DevHappyBuyDAL>(dictionary, storedProcedure);
        }
        public List<T> GetAllCustomers<T>(string value, int storedProcedureEnum) where T : new()
        {
            var commandText = (StoredProcedure)storedProcedureEnum;
            string storedProcedure = commandText.ToString();
            return happyBuyDAL.ExecuteReader<T>(value, storedProcedure);
        }
        public Customer DeleteCustomer(string Id)
        {
            throw new NotImplementedException();
        }
            
        public Customer GetCustomer(string Id)
        {
            throw new NotImplementedException();
        }       

        public Customer UpdateCustomer(Customer customer)
        {
            throw new NotImplementedException();
        }
    }
}
