using HappyBuyDAL.Interfaces;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;


namespace HappyBuyDAL
{
    public class Repository : IRepository
    {

        SqlConnection conn;
        SqlCommand cmdCustomer;
        
        void IRepository.ExecuteNonQuery(string commanText, CommandType commandType, SqlParameter[] sqlParamters)
        {

        }
    }
}
