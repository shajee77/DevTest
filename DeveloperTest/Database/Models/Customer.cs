using System.ComponentModel.DataAnnotations;

namespace DeveloperTest.Database.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }

        [MinLength(5)]
        public string Name { get; set; }

        public string Type { get; set; }
    }
}
