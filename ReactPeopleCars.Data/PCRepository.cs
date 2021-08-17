using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPeopleCars.Data
{
    public class PCRepository
    {
        private readonly string _connectionString;

        public PCRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetPeople()
        {
            using var context = new PCDbContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }

        public void AddPerson(Person person)
        {
            using var context = new PCDbContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }

        public Person GetById(int id)
        {
            using var context = new PCDbContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
        }

        public void AddCar(Car car)
        {
            using var context = new PCDbContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }

        public List<Car> GetCars(int personId)
        {
            using var context = new PCDbContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == personId).ToList();
        }

        public void Delete(int pid)
        {
            using var context = new PCDbContext(_connectionString);
            var deleteCars = context.Cars.Where(c => c.PersonId == pid);
            context.Cars.RemoveRange(deleteCars);
            context.SaveChanges();
        }
    }
}
