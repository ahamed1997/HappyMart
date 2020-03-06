using HappyBuyDAL.Enums;
using HappyBuyDAL.Implementation;
using System.Collections.Generic;

namespace HappyBuyBL
{
    public class DevHappyBuyBL
    {
        CustomerRepository customerRepository;
        public DevHappyBuyBL()
        {
            customerRepository = new CustomerRepository();
        }
        public int RegisterCustomer<T>(Dictionary<string, object> dictionary)
        {
            return customerRepository.AddCustomer<T>(dictionary, 1);
        }
        public List<T> GetAllCustomers<T>(string value) where T : new()
        {
            return customerRepository.GetAllCustomers<T>(value,2);
        }

    }
}
