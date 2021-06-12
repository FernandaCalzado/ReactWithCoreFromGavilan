using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using MoviesAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/genders")]
    [ApiController]
   // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //[Route("api/[controller]")] //en tiempo de ejecucion esto se transforma, pero es mejor ser explicitos
    public class GendersController : ControllerBase
    {
       // private readonly IRepository repository;
        private readonly ILogger<GendersController> logger;
       // private readonly WeatherForecastController weatherForecastController;

        public GendersController(
            //IRepository repository,
          ILogger<GendersController> logger
           // ,   WeatherForecastController weatherForecastController)
       ) {
         //   this.repository = repository;
            this.logger = logger;
         //   this.weatherForecastController = weatherForecastController;
        }

        [HttpGet]
      //  [HttpGet("List")] //api/genders/list // se puede corresponder a mas de un endpoint una misma accion
     //   [HttpGet("/genderlist")] //genderlist // ignora la ruta por defecto 
    //  [ResponseCache(Duration =60)] //no funciona si en la cabecera http se encuentra autorization, tampoco funciona si el header de nocatch esta activado 
     // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //  [ServiceFilter(typeof(MyAccionFilter)] //permite iniciar un servicio y todas sus dependencias
        public ActionResult<List<Gender>> Get()
        {
          //  logger.LogInformation("Lets' show the genders");
           // return repository.GetAllGenders();
            return new List<Gender>() { new Gender { Id = 1, Name = "Comedy" } };
        }

        //[HttpGet("guid")]
        //public async Task<ActionResult<Guid>> GetGuid(int id, [FromHeader] string name) //pide por cabecera se solicite esa data que haga bind
        //{

        //    // return repository.GetGuid();
        //    return Ok(
        //     new
        //     {
        //         Guid_GendersController = repository.GetGuid(),
        //         Guid_weatherForcastController = weatherForecastController.GetGuidWhetherForeCastController()
        //     }
        //        );

        //}

        [HttpGet("{Id:int}")]// api/genders/{id}/{name} valor por defecto y restriccion de tipo
                             //  [HttpGet("{Id:int}/{name=Robert}")]// api/genders/{id}/{name} valor por defecto y restriccion de tipo
                             // [HttpGet("{Id}/{name}")]// api/genders/{id}/{name}
                             //  [HttpGet("{Id}")]// api/genders/{id} 
                             // [HttpGet("example")]// api/genders/example
                             // public async Task<ActionResult<Gender>> Get(int id, [BindRequired] string name) //pide por query string un parametro requerido
        public async Task<ActionResult<Gender>> Get(int id, [FromHeader] string name) //pide por cabecera se solicite esa data que haga bind
        // public IActionResult Get(int id, string name)
        {
            throw new NotImplementedException();
            //logger.LogDebug($"Getting a gender by id {id}");
            ////con APIController no es necesario realizar esto, pues ya el tiene de forma automatica devolucion de informacion cuando algo no cumple
            ////  if (!ModelState.IsValid)
            ////     return BadRequest(ModelState);

            //var gender = await repository.GetGenderById(id);
            //if (gender == null)
            //{
            //    logger.LogWarning($"We couldn find a gender by id: {id}");
            //    return NotFound(); //clase derivada de actionresult
            //}
            //return gender;
            //// return Ok(gender);
            //// return Ok("Hi");
            //// return "Hi";
        }
        //AccionResult retorna cualquier tipo retorno de una accion 
        // ActionResult<Gender> devolvemos o un tipo ActionResult con todas las caracteristicas de http que esta tiene o un tipo genero
        //con ActionResult estamos obligados a devolver o un derivado de este o el tipo de la clase que especifiquemos, pero no podemos devolver string u otro objeto que no sea el especificado
        //el iActionResult me obliga a dar una respuesta basada en un derivado de actionResult
        //por lo que la respuesta debe ser casteada por asi decirla o envuelta en una respuesta de ActionResult como un Ok()
        //El problema es que me permite retornar cualquier tipo de datos que no sea solo lo que se supone que yo quiero poder retornar
        [HttpPost]
        public ActionResult Post([FromBody] Gender gender)
        {
            throw new NotImplementedException();

            //repository.CreateGender(gender);

            //return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Gender gender)
        {
          //  return NoContent();
            throw new NotImplementedException();

        }

        [HttpDelete]
        public ActionResult Delete()
        {
           // return NoContent();
            throw new NotImplementedException();

        }


    }
}
