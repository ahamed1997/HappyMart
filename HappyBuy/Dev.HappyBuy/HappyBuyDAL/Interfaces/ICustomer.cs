using System.Collections.Generic;

namespace HappyBuyDAL.Interfaces
{
    public interface ICustomer
    {
        Customer GetCustomer(string Id);
        IEnumerable<Customer> GetCustomers();
        void AddCustomer();
        Customer UpdateCustomer(Customer customer);
        Customer DeleteCustomer(string Id);
    }
}
