using DemandSupplyProvider.Models;
using DemandSupplyProvider.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace DemandSupplyProvider.Controllers
{
    public class HomeController : Controller
    {
        private ISupplies supplyrepo;
        private IDemands repo;
        

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger,ISupplies supplyrepo, IDemands repo)
        {
            _logger = logger;
            this.repo = repo;
            this.supplyrepo = supplyrepo;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        [Route("AddSupply")]
        public async Task AddSupply(Demands med)
        {
                   try
                   {
                        var distributionOfStock = new List<PharmacyMedicineSupply>();

                       using (var httpclient = new HttpClient())
                       {
                           httpclient.BaseAddress = new Uri("https://localhost:44358/");
                           HttpResponseMessage res = await httpclient.GetAsync("api/MedicineSupply/GetSupplies/" + med.Medicine + "/" + med.Demand);
                           if (res.IsSuccessStatusCode)
                           {
                               var result = res.Content.ReadAsStringAsync().Result;
                               distributionOfStock = JsonConvert.DeserializeObject<List<PharmacyMedicineSupply>>(result);
                           }
                        }
                        if (distributionOfStock.Count != 0)
                        {
                            foreach (var supply in distributionOfStock)
                            {
                                supplyrepo.AddSupply(new Supplies { PharmacyName = supply.PharmacyName, MedicineName = supply.MedicineName, SupplyCount = supply.SupplyCount });
                            }
                }
            }
                   catch(Exception ex)
                   {
                    Console.WriteLine(ex);
                    Console.ReadLine();
            }
                  
               }        

        [HttpPost]
        [Route("AddDemand")]
        public IActionResult Add(MedicineDemand meds)
        {
            
            try
            {
                if (meds == null)
                {
                    return Ok(new { message="list is null" }) ;
                }
                Demands newdemand = new Demands()
                {
                    Medicine = meds.Medicine,
                    Demand = meds.Demand
                };
                int res = repo.AddDemand(newdemand);
                if (res > 0)
                {
                    return Ok(new { message = "demand is added"});
                }
                return Ok(new { message = "demand is added" });
            }
            catch (Exception e)
            {
                return Ok(new { message = e });
            }
        }
    }
}
