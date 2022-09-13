using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
namespace DemandSupplyProvider.Models
{
    public class Supplies
    {
            [Key]
            public int SupplyId { get; set; }
            public string PharmacyName { get; set; }
            public string MedicineName { get; set; }
            public int SupplyCount { get; set; }
    }
}
