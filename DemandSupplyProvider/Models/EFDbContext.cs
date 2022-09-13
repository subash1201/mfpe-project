using Microsoft.EntityFrameworkCore;
namespace DemandSupplyProvider.Models
{
    public class EFDbContext: DbContext
    {
        public EFDbContext(DbContextOptions<EFDbContext> options) : base(options)
        {

        }
        public virtual DbSet<Demands> Demands { get; set; }
        public virtual DbSet<Supplies> Supplies { get; set; }
    }
}
