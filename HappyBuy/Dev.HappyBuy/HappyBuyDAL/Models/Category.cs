using System.ComponentModel.DataAnnotations.Schema;

namespace HappyBuyDAL
{
    [Table("Category")]
    public class Category
    {
        string Id { get; set; }
        string Categories { get; set; }
    }
}
