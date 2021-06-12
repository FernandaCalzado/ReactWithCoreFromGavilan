using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Gender // : IValidatableObject
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "The Field {0} is Required")]
        [StringLength(maximumLength: 50)]
       // [FirstLetterUppercase]
        public string Name { get; set; }

        //  [Range(18,120)]
        //   public int Age { get; set; }

        //Solo se ejecuta cuando todas las reglas de validaciones son validas ademas de que se limita unicamente al modelo e impide la reutilizacion
        //public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        //{
        //    if (!string.IsNullOrEmpty(Name))
        //    {
        //        var firstLetter = Name[0].ToString();
        //        if (firstLetter != firstLetter.ToUpper())
        //            yield return new ValidationResult("Fisrt Letter must be UpperCase", new string[] { nameof(Name) });
        //    }

        //}


    }
}
