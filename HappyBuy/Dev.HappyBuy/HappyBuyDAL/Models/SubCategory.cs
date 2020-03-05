using System.ComponentModel.DataAnnotations.Schema;

namespace HappyBuyDAL
{
    [Table("SubCategory")]
    public class SubCategory
    {
        string Id { get; set; }
        string CategoryId { get; set; }
        string Name { get; set; }
    }
}
