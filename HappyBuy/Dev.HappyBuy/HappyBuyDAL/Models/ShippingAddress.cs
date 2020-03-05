using System.ComponentModel.DataAnnotations.Schema;

namespace HappyBuyDAL
{
    [Table("ShippingAddress")]
    public class ShippingAddress
    {
        string Id { get; set; }
        string CustomerId { get; set; }
        string Mobile { get; set; }
        string Street { get; set; }
        string LandMark { get; set; }
        string City { get; set; }
        string State { get; set; }
        string Zicode { get; set; }
    }
}
