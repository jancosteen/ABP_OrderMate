using Abp.Application.Services;
using MDR_Angular.OrderMate.Allergies.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Allergies
{
    public interface IAllergyAppService: IAsyncCrudAppService<AllergyDto>
    {
    }
}
