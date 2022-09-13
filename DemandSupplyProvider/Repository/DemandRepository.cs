using DemandSupplyProvider.Models;

namespace DemandSupplyProvider.Repository
{
    public class DemandRepository: IDemands
    {
        private EFDbContext context;
        public DemandRepository(EFDbContext context)
        {
            this.context = context;
        }
        public int AddDemand(Demands demands)
        {
            context.Demands.Add(demands);
            return context.SaveChanges();
        }
    }
}
