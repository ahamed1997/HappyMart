using System.Collections.Generic;

namespace HappyBuyDAL.Interfaces
{
    public interface ICustomerRepository
    {
        int AddCustomer<T>(Dictionary<string, object> dictionary, int storedProcedureEnum);
        List<T> GetAllCustomers<T>(string value, int storedProcedureEnum) where T : new();
        Customer GetCustomer(string Id);
        Customer UpdateCustomer(Customer customer);
        Customer DeleteCustomer(string Id);
    }
}
