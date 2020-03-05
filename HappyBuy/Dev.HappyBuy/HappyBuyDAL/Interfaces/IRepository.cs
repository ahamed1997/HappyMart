using System.Data;
using System.Data.SqlClient;

namespace HappyBuyDAL.Interfaces
{
    public interface IRepository
    {
        void ExecuteNonQuery(string commanText, CommandType commandType, SqlParameter[] sqlParamters = null);
    }
}
