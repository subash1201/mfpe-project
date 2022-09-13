using System.ComponentModel.DataAnnotations;
namespace DemandSupplyProvider.Models
{
    public class Demands
    {
        [Key]
        public int DemandId { get; set; }
        public string Medicine { get; set; }
        public int Demand { get; set; }
    }
}
