using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MoviesAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IRepository repository;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, 
            IRepository repository)
        {
            _logger = logger;
            this.repository = repository;
        }
        [HttpGet("guid")]
        public Guid GetGuidWhetherForeCastController()
        {
            return repository.GetGuid();
        }
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var genders = repository.GetAllGenders();
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
