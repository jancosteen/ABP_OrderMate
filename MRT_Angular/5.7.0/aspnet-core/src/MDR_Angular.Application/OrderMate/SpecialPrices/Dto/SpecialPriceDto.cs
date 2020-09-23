using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Specials;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.SpecialPrices
{
    [AutoMapFrom(typeof(SpecialPrice))]
    [AutoMapTo(typeof(SpecialPrice))]
    public class SpecialPriceDto: EntityDto<int>
    {
        //public int SpecialPriceId { get; set; }
        public double SpecialPrice1 { get; set; }
        public DateTime SpecialPriceDateUpdated { get; set; }
        public int? SpecialIdFk { get; set; }

        
    }
}
