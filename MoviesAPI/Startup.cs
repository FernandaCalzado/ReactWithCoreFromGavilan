using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using MoviesAPI.Controllers;
using MoviesAPI.Filters;
using MoviesAPI.Repositories;

namespace MoviesAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
           // services.AddResponseCaching();
            //trasient es el tiempo mas corto de vida que le damos a un servicio y significa que cada vez que pidamos una instancia del servicio vamos a obtener una nueva instancia de ese reporsitorio en memoria, siempre sera una instancia nueva
            //add scopue, el tiempod e vida de la clase va a ser va a ser durante toda la peticion, si distintas clases piden el mismo serviico y lo hacen dentro del mismo contexto http, se les sirve la misma instancia
            //singleton el tiempo de vida de la instancia del servicio va a ser durante todo el tiempo de la ejecucion del proyecto, esto quiere decir que varios clientes pueden compartir la misma instancia de la clase instanciada 
            //services.AddTransient<IRepository, InMemoryRepository>();
            //services.AddScoped<WeatherForecastController>();
            //services.AddTransient<MyAccionFilter>();
            services.AddControllers(
                options =>
                {
                    options.Filters.Add(typeof(ExceptionFilter));
                }
                );
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "MoviesAPI", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "MoviesAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

         //   app.UseResponseCaching();

            app.UseAuthentication(); //antes de autorizarte debo autenticarte

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
