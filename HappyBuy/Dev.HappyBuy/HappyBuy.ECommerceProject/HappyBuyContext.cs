using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace HappyBuy.ECommerceProject
{
    public static class DbConnection
    {
        public static string ConnectionString { get; set; }

        public static SqlConnection ConnectionFactory()
        {
            return new SqlConnection(ConnectionString);
        }
    }
}
