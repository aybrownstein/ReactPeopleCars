using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using ReactPeopleCars.Data;

namespace ReactPeopleCars.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private string _connectionString;

        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("getall")]
        public List<Person> GetPeople()
        {
            var repo = new PCRepository(_connectionString);
            return repo.GetPeople();
        }

        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PCRepository(_connectionString);
            repo.AddPerson(person);
        }

        [HttpGet]
        [Route("getperson")]
        public Person GetPerson(int id)
        {
            var repo = new PCRepository(_connectionString);
            return repo.GetById(id);
        }

        [HttpPost]
        [Route("addcar")]
        public void AddCar(Car car)
        {
            var repo = new PCRepository(_connectionString);
            repo.AddCar(car);
        }

        [HttpGet]
        [Route("getcars")]
        public List<Car> GetCars(int personId)
        {
            var repo = new PCRepository(_connectionString);
            return repo.GetCars(personId);
        }

        [HttpPost]
        [Route("deletecars")]
        public void DeleteCars(int personId)
        {
            var repo = new PCRepository(_connectionString);
            repo.Delete(personId);
        }
    }
}
