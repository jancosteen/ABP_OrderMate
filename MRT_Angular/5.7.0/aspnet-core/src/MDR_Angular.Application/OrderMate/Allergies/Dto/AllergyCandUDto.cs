using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Allergies.Dto
{
    [AutoMapFrom(typeof(Allergy))]
    [AutoMapTo(typeof(Allergy))]
    public class AllergyCandUDto
    {
        public string Allergy1 { get; set; }

    }
}
