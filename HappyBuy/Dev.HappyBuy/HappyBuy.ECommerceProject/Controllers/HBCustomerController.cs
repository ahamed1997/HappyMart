using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using HappyBuyDAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HappyBuy.ECommerceProject.Controllers
{
    [EnableCors("http://localhost:4200", "*", "GET,PUT,POST")]
    public class HBCustomerController : Controller
    {
        private DevHappyBuyDAL devHappyBuyDal = new DevHappyBuyDAL();
        // GET: HBCustomer
        public int Execute(Customer customer)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            //keyValues= customer.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public)
            // .ToDictionary(prop => prop.Name, prop => prop.GetValue(customer));
            string commandText = "CustomerEntity";
            PropertyInfo[] infos = customer.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(customer, null));
            }
            int i = devHappyBuyDal.ExecuteNonQuery<DevHappyBuyDAL>(keyValues, commandText);
            return i;
        }
        public int ExecuteReader(string value)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            //keyValues= customer.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public)
            // .ToDictionary(prop => prop.Name, prop => prop.GetValue(customer));
            string commandText = "GetCustomerDetails";
            List<Customer> customers = new List<Customer>();
            //PropertyInfo[] infos = customer.GetType().GetProperties();
            //foreach (PropertyInfo info in infos)
            //{
            //    keyValues.Add(info.Name, info.GetValue(customer, null));
            //}
            Customer cus = new Customer();
            devHappyBuyDal.ExecuteReader<Customer>(value, commandText, cus);
            return 2;

        }
        public int Get()
        {
            return 1234567890;
        }

    }
}