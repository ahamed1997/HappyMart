using HappyBuyDAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;


namespace HappyBuyDAL.Implementation
{
    public class CustomerEntity : ICustomer
    {
        DevHappyBuyDAL happyBuy;
        public CustomerEntity()
        {
            happyBuy = new DevHappyBuyDAL();
        }

        public void AddCustomer()
        {
            Dictionary<object, object> keyValuePairs = new Dictionary<object, object>();
            keyValuePairs.Add("Id", "01");
            keyValuePairs.Add("Firstname", "Ahamed");
            keyValuePairs.Add("Lastname", "Ayathullah");
            keyValuePairs.Add("Mobile", "9876543202");
            keyValuePairs.Add("Email", "ahamed@gmail.com");
            keyValuePairs.Add("Password", "298372");
            keyValuePairs.Add("Street", "A.O.K Naga");
            keyValuePairs.Add("LandMark", "TVS Showroom");
            keyValuePairs.Add("City", "Erode");
            keyValuePairs.Add("State", "Tamilnadu");
            keyValuePairs.Add("Zipcode", "23768");




           // int i = happyBuy.Execute<CustomerEntity>(keyValuePairs, "CustomerEntity");


        }

        public Customer DeleteCustomer(string Id)
        {
            throw new NotImplementedException();
        }

        public Customer GetCustomer(string Id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Customer> GetCustomers()
        {
            throw new NotImplementedException();
        }

        public Customer UpdateCustomer(Customer customer)
        {
            throw new NotImplementedException();
        }
    }
}
