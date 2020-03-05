using System.ComponentModel.DataAnnotations.Schema;

namespace HappyBuyDAL
{
    [Table("Product")]
    public class Product
    {
        string Id { get; set; }
        string SubCategoryId { get; set; }
        string Name { get; set; }
        string Description { get; set; }
        string Specification { get; set; }
        string Options { get; set; }
        int Price { get; set; }
        string Brand { get; set; }
        int IsActive { get; set; }
        string ImageURL { get; set; }
    }
}
