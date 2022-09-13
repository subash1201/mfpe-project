using DemandSupplyProvider.Models;

namespace DemandSupplyProvider.Repository
{
    public class SuppliesRepository : ISupplies
    {
        private EFDbContext context;
        public SuppliesRepository(EFDbContext context)
        {
            this.context = context;
        }
        public int AddSupply(Supplies supply)
        {
            context.Supplies.Add(supply);
            return context.SaveChanges();
        }
    }
}
