﻿using MoviesAPI.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Repositories
{
    public interface IRepository
    {
        void CreateGender(Gender gender);
        List<Gender> GetAllGenders();
        Task<Gender> GetGenderById(int id);
        Guid GetGuid();
    }
}
